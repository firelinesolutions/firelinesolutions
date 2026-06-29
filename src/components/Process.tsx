const steps = [
  {
    number: "01",
    title: "Free Workflow Audit",
    description:
      "We spend 30 minutes mapping your biggest time drains. You leave with a clear picture of what's automatable and what it's worth — no cost, no obligation.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We build your first automations and integrate them into how your business already works. No disruptive new systems to learn.",
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "We stay on as your automation partner, refining what's built and finding the next opportunity to give your team time back.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-t border-white/5 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-fire-400">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Simple, low-risk, built around proof.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-white/5 bg-slate-850/50 p-6 sm:p-8"
            >
              <span className="font-display text-4xl font-bold text-fire-500/20">
                {step.number}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
