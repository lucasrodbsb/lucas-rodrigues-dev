export const skillsStyles = {
  section: "relative z-10 overflow-x-clip py-16 md:py-24",
  inner: "mx-auto max-w-7xl px-6 md:px-8",
  marqueeWrap: "relative mt-10",
  fadeLeft:
    "pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-28",
  fadeRight:
    "pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-28",
  row: "overflow-hidden py-2",
  track:
    "flex w-max gap-3 animate-logo-marquee hover:[animation-play-state:paused] md:gap-4",
  tile: "flex h-[118px] w-[104px] shrink-0 flex-col items-center justify-center gap-2.5 rounded-2xl bg-[#e8e9ed] px-2 dark:bg-[rgba(255,255,255,0.08)] md:h-[126px] md:w-[112px]",
  tileIcon: "flex h-10 w-10 items-center justify-center",
  tileName:
    "max-w-full text-center text-[0.7rem] font-medium leading-tight tracking-tight text-foreground",
  staticGrid:
    "mt-10 grid grid-cols-3 justify-items-center gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8",
  languages: "mx-auto mt-8 flex max-w-7xl flex-wrap items-center gap-3 px-6 md:px-8",
  language:
    "inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.14)]",
  languageName: "text-sm font-medium text-foreground",
  languageLevel: "text-[0.68rem] uppercase tracking-[0.16em] text-accent",
} as const;
