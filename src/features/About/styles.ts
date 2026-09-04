export const aboutStyles = {
  section: "relative z-10 py-12 md:py-16",
  inner: "mx-auto max-w-7xl px-6 md:px-8",
  heading: "mb-6 md:mb-8",
  headingTitle:
    "font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl",
  layout: "flex flex-col gap-8 md:gap-10",
  identity:
    "grid w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-5 sm:gap-8 md:gap-12 lg:gap-14",
  photoShell: "relative shrink-0",
  photoGlow:
    "pointer-events-none absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,var(--profile-glow-from),transparent_62%),radial-gradient(circle_at_80%_80%,var(--profile-glow-to),transparent_58%)] opacity-80 blur-xl",
  photo:
    "relative h-44 w-36 overflow-hidden rounded-[1.35rem] border border-border bg-profile-card shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:h-64 sm:w-52 md:h-80 md:w-64 md:rounded-[1.5rem] lg:h-[22rem] lg:w-72",
  copy: "min-w-0 flex w-full flex-col justify-center py-0.5",
  profileName:
    "font-display text-[1.85rem] font-bold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem]",
  profileNameMark: "text-accent",
  profileHeadline:
    "mt-2 text-sm font-medium tracking-tight text-accent sm:mt-2.5 sm:text-[0.95rem] md:text-base",
  profileMeta:
    "mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-[0.72rem] text-muted sm:text-sm",
  locationIcon: "h-3.5 w-3.5 shrink-0 text-faint",
  profileBio:
    "mt-4 w-full border-t border-border pt-4 text-sm leading-relaxed text-muted md:mt-5 md:pt-5 md:text-[0.95rem] md:leading-7 lg:text-base lg:leading-8",
  stories:
    "grid gap-5 border-t border-border pt-6 md:grid-cols-3 md:gap-0",
  story:
    "min-w-0 md:px-8 md:first:pl-0 md:last:pr-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-border",
  storyTitle:
    "font-display text-base font-semibold leading-snug tracking-tight text-foreground md:text-[1.05rem]",
  storyDescription: "mt-1.5 text-sm leading-relaxed text-muted",
} as const;
