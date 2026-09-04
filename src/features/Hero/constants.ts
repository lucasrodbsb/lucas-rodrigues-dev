export const heroLegacyStyles = {
  section:
    "relative min-h-screen flex items-center justify-center overflow-hidden",
  content: "relative z-10 mx-auto max-w-7xl px-6 md:px-8 pt-32 pb-20",
  greeting:
    "text-sm md:text-base font-medium tracking-[0.3em] uppercase text-accent mb-6",
  title:
    "font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-foreground leading-[0.9]",
  subtitle: "mt-6 text-xl md:text-2xl text-muted font-light max-w-xl",
  role: "mt-4 text-lg md:text-xl text-foreground/70 font-medium",
  socialLink:
    "p-3 rounded-full border border-border bg-surface text-muted hover:text-foreground hover:border-border-hover hover:bg-surface-hover transition-all duration-300",
  scrollHint: "text-faint hover:text-muted transition-colors",
} as const;

export const heroPortraitStyles = {
  section:
    "relative flex max-md:min-h-[100dvh] max-md:h-auto max-md:items-center max-md:justify-center max-md:overflow-x-clip max-md:overflow-y-auto md:h-screen md:max-h-[100dvh] md:items-center md:justify-center md:overflow-hidden",
  content:
    "relative z-10 mx-auto flex h-full w-full max-w-7xl max-md:items-center max-md:justify-center max-md:overflow-x-clip max-md:px-4 max-md:pt-[calc(env(safe-area-inset-top,0px)+3.75rem)] max-md:pb-14 md:items-center md:px-5 md:pt-28 md:pb-16 lg:px-6 lg:pt-32 lg:pb-20 xl:px-8",
  glowPrimary:
    "pointer-events-none absolute top-[42%] left-1/2 h-[min(88vw,360px)] w-[min(88vw,360px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.28)_0%,rgba(99,102,241,0.18)_38%,transparent_72%)] blur-2xl md:top-1/2 md:h-[min(62vh,480px)] md:w-[min(62vh,480px)] lg:h-[min(70vh,640px)] lg:w-[min(70vh,640px)]",
  glowSecondary:
    "pointer-events-none absolute top-[42%] left-1/2 h-[min(64vw,280px)] w-[min(64vw,280px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.1)_0%,transparent_70%)] blur-xl md:top-1/2 md:h-[min(48vh,360px)] md:w-[min(48vh,360px)] lg:h-[min(52vh,440px)] lg:w-[min(52vh,440px)]",
  mobileLayout:
    "flex w-full max-w-full flex-col items-center gap-y-3 overflow-x-clip text-center md:hidden",
  mobileOrbitWrap: "my-0 w-full max-w-[min(100%,320px)] overflow-hidden",
  mobileTextGroup:
    "flex w-full max-w-[min(100%,18rem)] flex-col items-center gap-y-2.5 px-1 text-center sm:max-w-xs",
  desktopLayout:
    "hidden h-full min-h-0 w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-3 md:grid md:gap-x-4 lg:gap-x-6 xl:gap-x-10",
  leftPanel:
    "flex flex-col items-end justify-center text-right",
  centerPanel: "flex shrink-0 items-center justify-center",
  rightPanel:
    "flex flex-col items-start justify-center text-left",
  greeting:
    "text-xs font-semibold tracking-[0.32em] uppercase text-accent sm:text-sm",
  greetingLine:
    "hidden h-px w-16 bg-gradient-to-r from-transparent via-accent/60 to-transparent sm:block md:w-24",
  greetingDesktop:
    "mb-2 text-[0.65rem] font-semibold tracking-[0.35em] uppercase text-accent md:mb-3 md:text-xs lg:mb-4 lg:text-sm xl:text-base",
  orbit:
    "relative mx-auto flex h-[min(88vw,300px)] w-[min(88vw,300px)] max-w-full shrink-0 items-center justify-center overflow-hidden md:h-[clamp(260px,44vh,320px)] md:w-[clamp(260px,44vh,320px)] lg:h-[clamp(380px,58vh,540px)] lg:w-[clamp(380px,58vh,540px)]",
  innerRing: "hero-circular-text-inner opacity-80 max-md:opacity-70",
  ringOuter:
    "pointer-events-none absolute inset-[5px] rounded-full border border-white/[0.12] shadow-[0_0_60px_rgba(99,102,241,0.1)] dark:border-white/[0.1]",
  ringInner:
    "pointer-events-none absolute inset-[12%] rounded-full border border-dashed border-white/[0.08]",
  ringAccent:
    "pointer-events-none absolute top-[8%] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_14px_rgba(99,102,241,0.85)]",
  photoFrame:
    "relative z-10 flex h-[min(58vw,205px)] w-[min(48vw,172px)] items-center justify-center md:h-[clamp(168px,28vh,210px)] md:w-[clamp(142px,23vh,175px)] lg:h-[clamp(240px,34vh,360px)] lg:w-[clamp(200px,28vh,295px)]",
  photoGlow:
    "pointer-events-none absolute -inset-8 bg-[radial-gradient(circle,rgba(212,165,116,0.42)_0%,rgba(99,102,241,0.18)_45%,transparent_78%)] blur-xl md:-inset-12 lg:-inset-16 lg:blur-2xl",
  photo:
    "hero-portrait-photo relative z-10 h-full w-full object-contain object-center",
  nameBlock: "shrink-0",
  title:
    "font-display text-[1.5rem] font-bold tracking-[-0.02em] text-foreground leading-[1.05] sm:text-[1.75rem]",
  titleDesktop:
    "font-display text-right text-[1.875rem] font-bold tracking-[-0.04em] text-foreground leading-[0.92] md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl",
  roleDivider:
    "my-2 ml-auto h-px w-10 bg-gradient-to-l from-accent/70 to-transparent md:my-3 md:w-12 lg:my-4 xl:w-16",
  role: "text-sm font-medium text-foreground/75 sm:text-base",
  roleDesktop:
    "text-right text-sm font-medium tracking-wide text-foreground/75 md:text-base lg:text-lg xl:text-xl",
  tagline: "hero-tagline-mobile mt-2 max-w-[17.5rem] sm:max-w-xs",
  taglineDesktop:
    "hero-tagline mt-2 max-w-[11rem] text-sm leading-relaxed md:mt-3 md:max-w-xs md:text-[0.9375rem] lg:max-w-sm lg:text-base xl:max-w-md",
  badges:
    "mt-3 flex max-w-[18rem] flex-wrap items-center justify-center gap-2 sm:max-w-xs",
  badgesDesktop:
    "mt-3 flex max-w-[11rem] flex-wrap items-start justify-start gap-1.5 md:mt-4 md:max-w-xs md:gap-2 lg:max-w-sm",
  actions:
    "mt-1 flex w-full flex-col gap-2.5",
  actionsDesktop:
    "mt-3 flex flex-wrap items-start justify-start gap-2 md:mt-4 md:gap-3",
  socials: "mt-3 flex items-center justify-center gap-3",
  socialsDesktop: "mt-3 flex items-center justify-start gap-2.5 md:mt-4 md:gap-3",
  socialLink:
    "rounded-full border border-border bg-surface p-3 text-muted transition-all duration-300 hover:border-border-hover hover:bg-surface-hover hover:text-foreground lg:p-3.5",
  scrollWrap:
    "absolute bottom-4 left-1/2 z-10 -translate-x-1/2 sm:bottom-5 md:bottom-6",
  scrollHint:
    "inline-flex rounded-full p-2 text-faint transition-colors hover:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
} as const;

/** @deprecated Use heroLegacyStyles */
export const heroStyles = heroLegacyStyles;
