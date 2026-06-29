import { PhoneLink } from "@/components/PhoneLink";

export function FinalCta() {
  return (
    <section className="border-t border-white/5 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl rounded-2xl border border-fire-500/20 bg-fire-500/5 p-6 text-center sm:p-10 md:p-14">
          <h2 className="text-balance font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Find out what your team could reclaim.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            The audit is free, takes 30 minutes, and you&apos;ll walk away with
            a concrete picture of what automation could save you — even if you
            never become a client.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block w-full rounded-xl bg-fire-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-fire-600/25 transition-all hover:bg-fire-500 sm:mt-8 sm:w-auto sm:px-8"
          >
            Book Your Free Workflow Audit
          </a>
          <p className="mt-4 text-sm text-slate-400">
            Or call{" "}
            <PhoneLink className="font-medium text-fire-400" showIcon />
          </p>
        </div>
      </div>
    </section>
  );
}
