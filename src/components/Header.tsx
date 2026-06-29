"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { PhoneLink } from "@/components/PhoneLink";

const navLinks = [
  { label: "What We Do", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Who It's For", href: "#who" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="safe-top fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:h-20">
        <a href="#" className="flex min-w-0 shrink items-center">
          <Logo className="h-8 w-auto sm:h-10 lg:h-14" height={32} />
        </a>

        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <PhoneLink
            className="whitespace-nowrap text-sm text-slate-300"
            showIcon
          />
          <a
            href="#contact"
            className="whitespace-nowrap rounded-lg bg-fire-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-fire-500"
          >
            Book Audit
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-lg border border-white/10 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-5 w-5 text-slate-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-white/5 bg-slate-950 px-4 py-4 sm:max-h-[calc(100dvh-4rem)] sm:px-6 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3.5 text-base text-slate-300 active:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <PhoneLink
              className="mt-2 justify-center rounded-lg border border-white/10 px-4 py-3.5 text-base text-slate-200"
              showIcon
            />
            <a
              href="#contact"
              className="mt-2 rounded-lg bg-fire-600 px-4 py-3.5 text-center text-base font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Book Workflow Audit
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
