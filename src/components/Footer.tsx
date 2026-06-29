import { Logo } from "@/components/Logo";
import { PhoneLink } from "@/components/PhoneLink";
import { BUSINESS_IDENTITY } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="safe-bottom border-t border-white/5 bg-slate-950 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-6 lg:text-left">
          <Logo className="h-9 w-auto sm:h-10" height={36} />

          <div className="max-w-sm space-y-2 text-sm text-slate-500 sm:max-w-none">
            <p>AI automation that gives skilled teams their time back.</p>
            <p className="break-words">
              Call our AI assistant:{" "}
              <PhoneLink className="text-slate-400" />
            </p>
          </div>

          <div className="max-w-sm space-y-1 text-xs text-slate-600 sm:max-w-none sm:text-sm">
            <p>{BUSINESS_IDENTITY.footer}</p>
            <p>&copy; {year} Fireline Solutions Agency. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
