'use strict';
const { google } = require('googleapis');
const { DateTime } = require('luxon');

const TIMEZONE       = process.env.TIMEZONE || 'America/New_York';
const SLOT_MINUTES   = parseInt(process.env.APPOINTMENT_DURATION_MINUTES || '60', 10);
const BUSINESS_OPEN  = parseInt(process.env.BUSINESS_HOURS_START || '9', 10);
const BUSINESS_CLOSE = parseInt(process.env.BUSINESS_HOURS_END || '17', 10);
const CALENDAR_ID    = process.env.CALENDAR_ID || 'primary';
const DAYS_AHEAD     = 7;
const MAX_SLOTS      = 15; // cap so voice response stays manageable

function getAuth() {
  const client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );
  client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
  return client;
}

// Returns true if an all-day event covers dateStr (YYYY-MM-DD) and is marked busy.
// Google all-day events use start.date / end.date; end.date is exclusive.
function allDayEventBlocksDate(event, dateStr) {
  if (!event.start?.date) return false;
  if (event.transparency === 'transparent') return false;
  const check = DateTime.fromISO(dateStr);
  const start = DateTime.fromISO(event.start.date);
  const end   = DateTime.fromISO(event.end.date); // exclusive
  return check >= start && check < end;
}

function overlaps(aStart, aEnd, bStart, bEnd) {
  return aStart < bEnd && aEnd > bStart;
}

async function checkAvailability() {
  const auth     = getAuth();
  const calendar = google.calendar({ version: 'v3', auth });

  const now        = DateTime.now().setZone(TIMEZONE);
  const searchEnd  = now.plus({ days: DAYS_AHEAD }).endOf('day');

  const { data } = await calendar.events.list({
    calendarId:  CALENDAR_ID,
    timeMin:     now.toISO(),
    timeMax:     searchEnd.toISO(),
    singleEvents: true,
    orderBy:     'startTime',
  });

  const events         = data.items || [];
  const availableSlots = [];

  for (let d = 0; d <= DAYS_AHEAD && availableSlots.length < MAX_SLOTS; d++) {
    const day     = now.plus({ days: d }).setZone(TIMEZONE).startOf('day');
    const dateStr = day.toISODate();

    // Skip the whole day if any all-day busy event covers it
    if (events.some(e => allDayEventBlocksDate(e, dateStr))) continue;

    // Collect timed busy blocks that overlap this day's business hours
    const openTime  = day.set({ hour: BUSINESS_OPEN,  minute: 0, second: 0, millisecond: 0 });
    const closeTime = day.set({ hour: BUSINESS_CLOSE, minute: 0, second: 0, millisecond: 0 });

    const busyBlocks = events
      .filter(e => e.start?.dateTime && e.transparency !== 'transparent')
      .map(e => ({
        start: DateTime.fromISO(e.start.dateTime, { zone: TIMEZONE }),
        end:   DateTime.fromISO(e.end.dateTime,   { zone: TIMEZONE }),
      }))
      .filter(b => overlaps(b.start, b.end, openTime, closeTime));

    // Walk through business-hour slots
    let slot = openTime;
    while (slot.plus({ minutes: SLOT_MINUTES }) <= closeTime && availableSlots.length < MAX_SLOTS) {
      const slotEnd = slot.plus({ minutes: SLOT_MINUTES });

      // Skip past slots
      if (slotEnd <= now) { slot = slotEnd; continue; }

      const isFree = !busyBlocks.some(b => overlaps(slot, slotEnd, b.start, b.end));
      if (isFree) {
        availableSlots.push({
          start:   slot.toISO(),
          end:     slotEnd.toISO(),
          display: slot.toFormat("cccc, LLLL d 'at' h:mm a ZZZZ"),
        });
      }

      slot = slotEnd;
    }
  }

  return availableSlots;
}

async function bookAppointment({ startTime, callerName, callerPhone, notes }) {
  const auth     = getAuth();
  const calendar = google.calendar({ version: 'v3', auth });

  const start = DateTime.fromISO(startTime, { zone: TIMEZONE });
  const end   = start.plus({ minutes: SLOT_MINUTES });

  const descLines = ['Booked via Retell AI voice agent'];
  if (callerPhone) descLines.push(`Phone: ${callerPhone}`);
  if (notes)       descLines.push(`Notes: ${notes}`);

  const { data: event } = await calendar.events.insert({
    calendarId: CALENDAR_ID,
    requestBody: {
      summary:     `Appointment – ${callerName || 'Caller'}`,
      description: descLines.join('\n'),
      start: { dateTime: start.toISO(), timeZone: TIMEZONE },
      end:   { dateTime: end.toISO(),   timeZone: TIMEZONE },
    },
  });

  return {
    id:          event.id,
    htmlLink:    event.htmlLink,
    displayTime: start.toFormat("cccc, LLLL d 'at' h:mm a ZZZZ"),
  };
}

module.exports = { checkAvailability, bookAppointment };
