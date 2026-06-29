'use strict';
require('dotenv').config();
const express = require('express');
const { checkAvailability, bookAppointment } = require('./googleCalendar');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Retell AI sends `arguments` as either a JSON object or a JSON-encoded string.
function parseArgs(body) {
  const raw = body?.arguments;
  if (!raw) return body || {};
  if (typeof raw === 'string') {
    try { return JSON.parse(raw); } catch { return {}; }
  }
  return raw;
}

function slotsToVoice(slots) {
  if (!slots.length) {
    return 'I checked your calendar and there are no available appointment slots in the next 7 days.';
  }
  const list = slots
    .map((s, i) => `Option ${i + 1}: ${s.display}`)
    .join('. ');
  return `Here are the available appointment slots: ${list}. Which option works best for you?`;
}

// ── POST /check-availability ───────────────────────────────────────────────────
// Retell AI calls this tool to read open slots.
// No arguments required; returns a voice-friendly list plus the raw slots array.
app.post('/check-availability', async (req, res) => {
  try {
    const slots = await checkAvailability();
    res.json({
      result: slotsToVoice(slots),
      slots,
    });
  } catch (err) {
    console.error('[check-availability]', err.message);
    res.status(500).json({
      result: 'I was unable to check the calendar right now. Please try again in a moment.',
    });
  }
});

// ── POST /book-appointment ─────────────────────────────────────────────────────
// Retell AI calls this tool once the caller confirms a slot.
// Expected arguments: start_time (ISO 8601), caller_name, caller_phone?, notes?
app.post('/book-appointment', async (req, res) => {
  try {
    const args = parseArgs(req.body);
    const { start_time, caller_name, caller_phone, notes } = args;

    if (!start_time) {
      return res.status(400).json({
        result: 'I need a start time to book the appointment. Could you confirm the slot you want?',
      });
    }

    const event = await bookAppointment({
      startTime:   start_time,
      callerName:  caller_name || 'Caller',
      callerPhone: caller_phone,
      notes,
    });

    res.json({
      result: `Your appointment has been booked for ${event.displayTime}. We look forward to speaking with you!`,
      event_id:   event.id,
      event_link: event.htmlLink,
    });
  } catch (err) {
    console.error('[book-appointment]', err.message);
    res.status(500).json({
      result: 'I was unable to book the appointment. Please try again or call us directly.',
    });
  }
});

// ── GET /health ────────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Retell webhook server listening on port ${PORT}`);
  console.log(`  POST http://localhost:${PORT}/check-availability`);
  console.log(`  POST http://localhost:${PORT}/book-appointment`);
});
