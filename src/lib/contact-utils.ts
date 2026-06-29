export function formatPhoneToE164(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 10) {
    return `+1${digits}`;
  }

  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }

  if (phone.trim().startsWith("+") && digits.length >= 10) {
    return `+${digits}`;
  }

  return null;
}

export function formatTimePreference(time?: string) {
  const labels: Record<string, string> = {
    morning: "Morning (9AM – 12PM)",
    afternoon: "Afternoon (12PM – 4PM)",
    evening: "Evening (4PM – 6PM)",
  };
  return time ? labels[time] ?? time : "Not specified";
}

export type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  time?: string;
  message?: string;
};

export function buildTemplateAutoReply(name: string, message?: string) {
  const topic = message?.trim()
    ? `We noted your message about "${message.trim()}".`
    : "We received your workflow audit request.";

  return `Hi ${name},

Thank you for reaching out to Fireline Solutions Agency. ${topic}

Someone from our team will reach out within 1–2 business days to schedule your free 30-minute workflow audit.

Best,
The Fireline Solutions Agency Team`;
}
