export const clientsStyles = {
  section: "relative z-10 overflow-x-clip py-20 md:py-28",
  inner: "mx-auto max-w-7xl px-6 md:px-8",
  header: "text-center mb-12 md:mb-16",
  label:
    "inline-block text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4",
  title:
    "font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground",
  description: "mt-4 text-muted text-base md:text-lg max-w-2xl mx-auto",
  marqueeWrap: "relative mt-4",
  fadeLeft:
    "pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background to-transparent",
  fadeRight:
    "pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background to-transparent",
  track: "flex w-max gap-4 md:gap-6 animate-logo-marquee hover:[animation-play-state:paused]",
  card: "group relative flex items-center justify-center shrink-0 w-[160px] h-[96px] md:w-[200px] md:h-[112px] rounded-2xl border border-border bg-surface backdrop-blur-xl px-6 transition-all duration-500 hover:border-border-hover hover:bg-surface-hover hover:shadow-[0_0_40px_var(--card-shadow)] hover:-translate-y-1",
  logo: "max-h-10 md:max-h-12 w-auto max-w-[120px] md:max-w-[140px] object-contain transition-all duration-500 ease-out grayscale opacity-50 brightness-90 dark:brightness-110 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 group-hover:scale-105",
} as const;
