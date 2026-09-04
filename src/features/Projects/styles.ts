export const projectsStyles = {
  section: "relative z-10 py-24 md:py-32 overflow-hidden",
  inner: "mx-auto max-w-7xl px-6 md:px-8",
  carouselShell: "relative",
  carousel:
    "grid auto-cols-[minmax(280px,82vw)] grid-flow-col items-stretch gap-5 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-2 scrollbar-hide md:auto-cols-[minmax(340px,42vw)] xl:auto-cols-[minmax(360px,30vw)]",
  carouselItem: "h-full snap-start",
  cardButton: "block h-full w-full text-left",
  card: "flex h-full flex-col overflow-hidden p-0 text-left",
  cardMedia: "relative aspect-[4/3] shrink-0 overflow-hidden bg-black",
  cardImage: "object-cover object-center transition-transform duration-500 group-hover:scale-105",
  cardGradient:
    "absolute inset-0 opacity-40 mix-blend-screen",
  cardContent: "flex flex-1 flex-col p-5 md:p-6",
  cardSubtitle: "min-h-[1.1rem] text-xs uppercase tracking-[0.18em] text-subtle",
  cardTitle:
    "mt-2 line-clamp-2 min-h-[2.4em] font-display text-2xl font-semibold leading-tight text-foreground md:min-h-[2.16em] md:text-[1.8rem]",
  cardDescription:
    "mt-3 line-clamp-3 min-h-[4.5em] text-sm leading-relaxed text-muted md:min-h-[4.875em] md:text-base",
  cardTags: "mt-auto flex min-h-[2rem] flex-wrap content-start gap-2 pt-5",
  cardTag:
    "rounded-full bg-surface-hover px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-faint",
  arrowPrev:
    "absolute left-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-muted backdrop-blur-xl transition-colors hover:border-accent/40 hover:text-foreground disabled:opacity-30 md:flex",
  arrowNext:
    "absolute right-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-muted backdrop-blur-xl transition-colors hover:border-accent/40 hover:text-foreground disabled:opacity-30 md:flex",
  moreNote: "mt-8 text-center text-base font-medium italic text-foreground/80",
  modalOverlay: "absolute inset-0 bg-modal-overlay backdrop-blur-xl",
  modalShell:
    "relative z-10 flex w-full max-w-3xl max-h-[85vh] flex-col overflow-hidden rounded-3xl border border-border bg-modal-surface backdrop-blur-2xl",
  modalScroll:
    "overflow-y-auto overscroll-contain p-8 md:p-12 [scrollbar-gutter:stable]",
  modalClose:
    "absolute top-4 right-4 z-20 p-2 rounded-full border border-border bg-modal-surface/90 text-muted hover:text-foreground transition-colors backdrop-blur-sm",
  modal:
    "relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-border bg-modal-surface backdrop-blur-2xl p-8 md:p-12",
  modalSubtitle: "text-muted mt-1",
  modalBody: "text-muted mt-6 leading-relaxed",
  modalSectionTitle:
    "text-sm font-medium text-foreground/80 uppercase tracking-wider",
  modalListItem: "flex items-start gap-2 text-sm text-muted",
  modalBadge:
    "px-3 py-1 text-xs rounded-full border border-border text-muted",
  modalLink:
    "inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors",
} as const;
