"use client";

import { useEffect, useState } from "react";
import { BUSINESS_PHONE } from "@/lib/site";

export function VoiceCallButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <a
        href={BUSINESS_PHONE.tel}
        className="safe-bottom fixed bottom-4 right-4 z-[100] flex items-center gap-2 rounded-full bg-fire-600 px-4 py-3.5 font-medium text-white shadow-lg shadow-fire-600/30 transition-all hover:bg-fire-500 active:scale-95 sm:bottom-6 sm:right-6 sm:hidden"
        aria-label={`Call our AI voice agent at ${BUSINESS_PHONE.display}`}
      >
        <PhoneIcon className="h-5 w-5 shrink-0" />
        <span className="text-sm">Call AI Agent</span>
      </a>

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="safe-bottom fixed bottom-6 right-6 z-[100] hidden items-center gap-2 rounded-full bg-fire-600 px-5 py-3.5 font-medium text-white shadow-lg shadow-fire-600/30 transition-all hover:bg-fire-500 sm:flex"
          aria-label="Call our AI voice agent"
        >
          <PhoneIcon className="h-5 w-5 shrink-0" />
          <span>Call AI Agent</span>
        </button>
      )}

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[100] hidden bg-black/60 sm:block"
            aria-label="Close call dialog"
            onClick={() => setOpen(false)}
          />
          <div
            className="fixed inset-0 z-[101] flex h-dvh w-full flex-col bg-slate-950 sm:inset-auto sm:bottom-6 sm:right-6 sm:h-auto sm:max-w-sm sm:rounded-2xl sm:border sm:border-white/10 sm:shadow-2xl sm:shadow-black/50"
            role="dialog"
            aria-label="Call Fireline AI voice agent"
          >
            <div className="safe-top flex shrink-0 items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3 sm:rounded-t-2xl">
              <div>
                <p className="font-display font-semibold text-white">
                  Fireline Voice Agent
                </p>
                <p className="text-xs text-slate-400">Available 24/7</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-white/5 hover:text-white"
                aria-label="Close"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-5 p-6 text-center sm:flex-none sm:gap-6 sm:p-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-fire-500/10">
                <PhoneIcon className="h-10 w-10 text-fire-400" />
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Talk to our AI agent
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Ask about workflow automation, our services, or book a free
                  30-minute audit.
                </p>
              </div>

              <a
                href={BUSINESS_PHONE.tel}
                className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-fire-600 px-6 py-3.5 text-sm font-medium text-white hover:bg-fire-500 sm:w-auto"
              >
                <PhoneIcon className="h-4 w-4" />
                Call {BUSINESS_PHONE.display}
              </a>

              <p className="max-w-xs text-xs leading-relaxed text-slate-500">
                Prefer email? Use the contact form on this page and our team
                will follow up within 1–2 business days.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}
