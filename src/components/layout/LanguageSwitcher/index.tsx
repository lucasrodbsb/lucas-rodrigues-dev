"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils/cn";

const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div
      className={cn(
        "flex items-center gap-1 p-1 rounded-full border border-border bg-surface",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={cn(
            "px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300",
            locale === loc
              ? "text-switcher-active"
              : "text-switcher-inactive hover:text-foreground",
          )}
          aria-pressed={locale === loc}
        >
          {LOCALE_LABELS[loc]}
        </button>
      ))}
    </div>
  );
}
