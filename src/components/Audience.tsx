const audiences = [
  {
    title: "Small Teams, Big Workloads",
    description:
      "Everyone wears too many hats. We automate the repetitive tasks so your people can focus on what they were actually hired to do.",
    icon: "👥",
  },
  {
    title: "Missed Calls & Slow Follow-Up",
    description:
      "Leads call when you're on a job and never hear back. We deploy missed call text back and AI receptionist agents so every inquiry gets answered.",
    icon: "📞",
  },
  {
    title: "No-Shows & Empty Slots",
    description:
      "Appointments get forgotten and calendars have gaps. Automated reminders and no-show recovery keep your schedule full.",
    icon: "📅",
  },
  {
    title: "Reputation & Reviews",
    description:
      "You do great work but reviews don't happen on their own. A review generation agent asks at the right moment, every time.",
    icon: "⭐",
  },
  {
    title: "Cold Leads & Lost Pipeline",
    description:
      "Inquiries sit in your CRM with no follow-up. Lead reactivation agents reach out until they book or you move on.",
    icon: "🔄",
  },
];

export function Audience() {
  return (
    <section id="who" className="border-t border-white/5 bg-slate-850/30 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-fire-400">
            Who It&apos;s For
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Built for businesses ready to work smarter
          </h2>
          <p className="mt-4 text-slate-400">
            If your team is buried in tasks that don&apos;t require their
            expertise, we should talk.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/5 bg-slate-950/50 p-6 sm:p-8"
            >
              <span className="text-3xl" role="img" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
