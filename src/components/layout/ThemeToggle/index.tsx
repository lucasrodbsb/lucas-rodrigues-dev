"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils/cn";

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const t = useTranslations("theme");
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <div
        className={cn(
          "w-9 h-9 rounded-full border border-border bg-surface",
          className,
        )}
        aria-hidden="true"
      />
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "flex items-center justify-center w-9 h-9 rounded-full border border-border bg-surface text-muted hover:text-foreground hover:bg-surface-hover hover:border-border-hover transition-all duration-300",
        className,
      )}
      aria-label={t("toggle")}
      title={isDark ? t("light") : t("dark")}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
