const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "Missed Call Text Back Agent",
    description:
      "Every missed call gets an instant, professional text — so leads know you saw them and can book without playing phone tag. No more lost opportunities because someone couldn't reach you.",
    highlights: [
      "Instant SMS when a call goes unanswered",
      "Custom message with booking link or callback option",
      "Works 24/7, even after hours and on weekends",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    title: "AI Receptionist",
    description:
      "Your phone answered 24/7 by a natural-sounding AI that qualifies callers, answers common questions, and books appointments — so your team only handles conversations that need a human.",
    highlights: [
      "Answers inbound calls around the clock",
      "Books appointments directly into your calendar",
      "Captures lead details and sends clean summaries to your team",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Appointment Reminder + No-Show Recovery",
    description:
      "Automated reminders before every appointment — and when someone no-shows, the agent follows up to reschedule before that slot turns into lost revenue.",
    highlights: [
      "SMS and call reminders before appointments",
      "Automatic no-show detection and outreach",
      "Rescheduling handled without staff chasing people down",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    title: "Review Generation Agent",
    description:
      "After a great visit or completed job, your agent reaches out at the right moment to ask for a Google review — building your reputation while the experience is still fresh.",
    highlights: [
      "Timed outreach after positive interactions",
      "Direct link to your Google review page",
      "Consistent review flow without staff remembering to ask",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Lead Follow-Up + Reactivation Agent",
    description:
      "Leads that went cold or never booked get persistent, professional follow-up — by text or call — until they respond or you decide to move on. Your pipeline stops leaking.",
    highlights: [
      "Automated follow-up sequences for new leads",
      "Re-engages old contacts who never converted",
      "Keeps your calendar full without manual outreach",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-white/5 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-fire-400">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            AI agents that capture revenue you&apos;re already losing.
          </h2>
          <p className="mt-4 text-slate-400">
            We build and manage intelligent agents for service businesses — so
            missed calls, no-shows, and cold leads stop costing you money.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/5 bg-slate-850/50 p-6 transition-all hover:border-fire-500/20 hover:bg-slate-850 sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-fire-500/10 text-fire-400 transition-colors group-hover:bg-fire-500/20">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-400">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fire-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
