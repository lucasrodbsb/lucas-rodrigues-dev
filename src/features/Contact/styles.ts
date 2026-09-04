export const contactStyles = {
  section: "relative z-10 py-24 md:py-32",
  inner: "mx-auto max-w-7xl px-6 md:px-8",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20",
  heading:
    "font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight",
  description: "text-muted mt-4 text-lg leading-relaxed",
  form: "space-y-6",
  helper: "text-sm leading-relaxed text-faint",
  input:
    "w-full px-5 py-4 rounded-2xl border border-border bg-surface backdrop-blur-xl text-foreground placeholder:text-faint focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-300",
  textarea: "min-h-[160px] resize-none",
  socialCard:
    "flex items-center gap-4 p-4 rounded-2xl border border-border bg-surface hover:border-border-hover hover:bg-surface-hover transition-all duration-300",
  socialIcon: "p-2 rounded-xl bg-surface-hover",
  socialLabel: "text-sm text-foreground/80",
  socialUrl: "text-xs text-faint",
} as const;
