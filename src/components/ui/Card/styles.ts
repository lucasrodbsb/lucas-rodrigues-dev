export const cardStyles = {
  base: "relative rounded-2xl border border-border bg-surface backdrop-blur-xl overflow-hidden",
  glow: "before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:bg-[linear-gradient(to_bottom_right,var(--card-glow),transparent)]",
  hover:
    "transition-all duration-500 hover:border-border-hover hover:bg-surface-hover hover:shadow-[0_0_40px_var(--card-shadow)]",
} as const;
