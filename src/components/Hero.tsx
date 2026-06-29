import { PhoneLink } from "@/components/PhoneLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 lg:pt-44">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-fire-500/20 bg-fire-500/10 px-3 py-1.5 text-xs text-fire-300 sm:mb-6 sm:px-4 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fire-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fire-500" />
            </span>
            AI Business Agents
          </div>

          <h1 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Your team wasn&apos;t hired to do{" "}
            <span className="text-gradient">copy-paste work</span>.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg md:text-xl">
            Fireline Solutions builds AI agents for service businesses — missed
            call text back, AI receptionists, appointment reminders, review
            generation, and lead follow-up — so you stop losing revenue to
            missed calls, no-shows, and leads that go cold.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-xl bg-fire-600 px-8 py-3.5 text-center font-medium text-white shadow-lg shadow-fire-600/25 transition-all hover:bg-fire-500 sm:w-auto"
            >
              Book a Free Workflow Audit
            </a>
            <a
              href="#services"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-center font-medium text-slate-200 transition-all hover:bg-white/10 sm:w-auto"
            >
              See What We Build
            </a>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-slate-500">
            30 minutes. No cost. You&apos;ll leave knowing exactly what
            we&apos;d automate and what it would save you — whether or not you
            ever hire us.
          </p>
          <p className="mx-auto mt-4 flex flex-col items-center gap-2 text-sm text-slate-400 sm:flex-row sm:justify-center">
            <span>Or call our AI assistant now:</span>
            <PhoneLink className="font-medium text-fire-400" showIcon />
          </p>
        </div>
      </div>
    </section>
  );
}
