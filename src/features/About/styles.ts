export const aboutStyles = {
  section: "relative z-10 py-12 md:py-16",
  inner: "mx-auto max-w-7xl px-6 md:px-8",
  heading: "mb-6 md:mb-8",
  headingTitle:
    "font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl",
  layout: "flex flex-col gap-8 md:gap-10",
  identity:
    "grid w-full grid-cols-1 justify-items-center gap-6 sm:gap-7 md:grid-cols-[auto_minmax(0,1fr)] md:items-center md:justify-items-stretch md:gap-x-8 md:gap-y-7 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-x-14 lg:gap-y-0",
  photoShell:
    "relative shrink-0 md:col-start-1 md:row-start-1 lg:row-start-1",
  photoGlow:
    "pointer-events-none absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,var(--profile-glow-from),transparent_62%),radial-gradient(circle_at_80%_80%,var(--profile-glow-to),transparent_58%)] opacity-80 blur-xl",
  photo:
    "relative h-48 w-40 overflow-hidden rounded-[1.4rem] border border-border bg-profile-card shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:h-52 sm:w-44 md:h-44 md:w-36 md:rounded-[1.35rem] lg:h-[22rem] lg:w-72 lg:rounded-[1.5rem]",
  // md:contents lets intro + bio join the parent grid (bio full-width).
  // lg:flex restores a single copy column beside the photo (desktop look).
  copyStack:
    "flex w-full max-w-md flex-col items-center text-center md:contents lg:col-start-2 lg:row-start-1 lg:flex lg:max-w-none lg:items-start lg:justify-center lg:text-left",
  intro:
    "flex min-w-0 w-full flex-col items-center md:col-start-2 md:row-start-1 md:items-start md:self-center md:text-left",
  profileName:
    "font-display text-[2rem] font-bold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-[2.35rem] md:text-[2.15rem] lg:text-[3.5rem]",
  profileNameMark: "text-accent",
  profileHeadline:
    "mt-2.5 text-sm font-medium tracking-tight text-accent sm:text-[0.95rem] md:mt-2 md:text-[0.95rem] lg:text-base",
  profileMeta:
    "mt-3.5 inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-[0.72rem] text-muted sm:text-sm md:mt-3",
  locationIcon: "h-3.5 w-3.5 shrink-0 text-faint",
  profileBio:
    "mt-5 w-full border-t border-border pt-5 text-left text-sm leading-relaxed text-muted md:col-span-2 md:row-start-2 md:mt-0 md:text-[0.95rem] md:leading-7 lg:col-span-1 lg:mt-5 lg:text-base lg:leading-8",
  stories:
    "grid gap-5 border-t border-border pt-6 lg:grid-cols-3 lg:gap-0",
  story:
    "min-w-0 lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-border",
  storyTitle:
    "font-display text-base font-semibold leading-snug tracking-tight text-foreground lg:text-[1.05rem]",
  storyDescription: "mt-1.5 text-sm leading-relaxed text-muted",
} as const;
