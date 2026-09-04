export const recommendationsStyles = {
  section: "relative z-10 overflow-hidden py-16 md:py-24",
  inner: "mx-auto max-w-7xl px-6 md:px-8",
  grid: "mx-auto grid max-w-6xl gap-5 md:grid-cols-3 md:items-start md:gap-6",
  floatWrap: "origin-center",
  floatA: "md:mt-2 md:rotate-[-1.4deg]",
  floatB: "md:mt-10 md:rotate-[1.6deg]",
  floatC: "md:mt-4 md:rotate-[-0.8deg]",
  card: "p-5 shadow-[0_18px_40px_rgba(0,0,0,0.22)] md:p-6",
  header: "flex items-start gap-3.5",
  avatar:
    "relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border shadow-[0_8px_24px_rgba(0,0,0,0.28)]",
  identity: "min-w-0",
  name: "font-display text-lg font-semibold leading-tight tracking-tight text-foreground",
  role: "mt-1 text-xs leading-snug text-muted",
  linkedin:
    "mt-2 inline-flex items-center gap-1 text-xs text-accent transition-colors hover:text-accent/80",
  quote:
    "mt-4 text-sm leading-relaxed text-muted",
  quoteClamped: "line-clamp-5",
  readMore:
    "mt-3 text-xs font-medium text-accent transition-colors hover:text-accent/80",
} as const;
