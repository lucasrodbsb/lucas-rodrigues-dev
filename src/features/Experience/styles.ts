export const experienceStyles = {
  section: "relative z-10 py-24 md:py-32",
  inner: "mx-auto max-w-7xl px-6 md:px-8",
  list: "space-y-4",
  item: "group relative border border-border rounded-2xl bg-surface backdrop-blur-sm overflow-hidden transition-all duration-500",
  itemActive:
    "border-border-hover bg-surface-hover shadow-[0_0_40px_var(--card-active-glow)]",
  header:
    "relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between p-6 md:p-8 cursor-pointer md:pl-10",
  accentDot:
    "pointer-events-none absolute left-6 top-7 h-1.5 w-1.5 rounded-full md:top-1/2 md:-translate-y-1/2",
  company: "font-display text-2xl md:text-3xl font-bold text-foreground",
  role: "text-accent text-sm font-medium mt-1",
  location: "text-faint text-sm md:text-right max-w-xs leading-relaxed",
  details: "px-6 md:px-8 pb-6 md:pb-8",
  tech: "flex flex-wrap gap-2 mt-4",
  techBadge:
    "px-3 py-1 text-xs rounded-full border border-border text-muted bg-surface",
  achievement: "flex items-start gap-2 text-sm text-muted mt-2",
} as const;
