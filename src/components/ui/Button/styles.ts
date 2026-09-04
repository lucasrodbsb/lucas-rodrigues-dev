export const buttonStyles = {
  base: "relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    primary: "bg-btn-primary hover:opacity-90",
    secondary:
      "bg-btn-secondary border backdrop-blur-xl hover:bg-[var(--btn-secondary-hover-bg)] hover:border-[var(--btn-secondary-hover-border)]",
    ghost:
      "bg-transparent text-muted hover:text-foreground hover:bg-surface",
    outline:
      "bg-transparent text-foreground border border-border hover:border-border-hover hover:bg-surface",
  },
  sizes: {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  },
} as const;
