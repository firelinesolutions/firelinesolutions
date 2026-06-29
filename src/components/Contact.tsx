"use client";

import { getErrorMessage } from "@/lib/error-message";
import { FormEvent, useState } from "react";
import { PhoneLink } from "@/components/PhoneLink";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          time: formData.get("time"),
          message: formData.get("message"),
        }),
      });

      let data: { error?: string } = {};
      try {
        data = await response.json();
      } catch {
        if (!response.ok) {
          throw new Error("Failed to submit form. Please try again.");
        }
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form.");
      }

      form.reset();
      setSubmitted(true);
    } catch (err) {
      setError(
        getErrorMessage(err, "Something went wrong. Please try again.")
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="border-t border-white/5 bg-slate-850/30 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-fire-400">
            Get Started
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Book your free workflow audit
          </h2>
          <p className="mt-4 text-slate-400">
            Tell us about your business and we&apos;ll follow up to schedule
            your 30-minute audit — no cost, no obligation.
          </p>
          <div className="mx-auto mt-6 w-full max-w-md rounded-xl border border-fire-500/20 bg-fire-500/5 px-4 py-3 text-center sm:max-w-none sm:px-5">
            <p className="text-sm text-slate-300">
              Prefer to talk now? Call our AI assistant:
            </p>
            <PhoneLink
              className="mt-2 justify-center text-base font-semibold text-fire-400"
              showIcon
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-xl sm:mt-12">
          {submitted ? (
            <div className="rounded-2xl border border-fire-500/20 bg-fire-500/10 p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-fire-500/20">
                <svg
                  className="h-6 w-6 text-fire-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                Thank you!
              </h3>
              <p className="mt-2 text-slate-400">
                We received your request and sent a confirmation to your email.
                Damien will personally reach out within one business day to
                schedule your free workflow audit.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-white/5 bg-slate-950/50 p-5 sm:p-8"
            >
              {error && (
                <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  {error}
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 outline-none transition-colors focus:border-fire-500/50 focus:ring-1 focus:ring-fire-500/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 outline-none transition-colors focus:border-fire-500/50 focus:ring-1 focus:ring-fire-500/50"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-300"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 outline-none transition-colors focus:border-fire-500/50 focus:ring-1 focus:ring-fire-500/50"
                  placeholder="(555) 123-4567"
                />
                <p className="mt-1.5 text-xs text-slate-500">
                  Optional — so Damien can reach you directly when he follows up.
                </p>
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-slate-300"
                >
                  Best Time to Call
                </label>
                <select
                  id="time"
                  name="time"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-2.5 text-white outline-none transition-colors focus:border-fire-500/50 focus:ring-1 focus:ring-fire-500/50"
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (9AM – 12PM)</option>
                  <option value="afternoon">Afternoon (12PM – 4PM)</option>
                  <option value="evening">Evening (4PM – 6PM)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300"
                >
                  Biggest time drain right now?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full resize-none rounded-lg border border-white/10 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 outline-none transition-colors focus:border-fire-500/50 focus:ring-1 focus:ring-fire-500/50"
                  placeholder="e.g. Missed calls, no-shows, leads not following up, not enough reviews..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-fire-600 py-3.5 font-medium text-white shadow-lg shadow-fire-600/25 transition-all hover:bg-fire-500 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Book Your Free Workflow Audit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
