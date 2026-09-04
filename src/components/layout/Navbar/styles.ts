export const navbarStyles = {
  base: "fixed top-0 left-0 right-0 z-[110] pt-[env(safe-area-inset-top,0px)] transition-[opacity,background-color,border-color,backdrop-filter] duration-300 ease-out",
  open: "opacity-100 bg-navbar-scrolled backdrop-blur-md border-b border-border",
  atTop:
    "navbar-at-top opacity-[0.18] hover:opacity-100 max-md:opacity-50 max-md:hover:opacity-100",
  scrolled: "opacity-100 bg-navbar-scrolled backdrop-blur-md border-b border-border",
  transparent: "bg-transparent",
  inner:
    "mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-auto md:px-8 md:py-4",
  logo: "font-display text-lg font-bold tracking-tight text-foreground",
  link: "text-sm text-muted hover:text-foreground transition-colors duration-300 relative group",
  linkUnderline:
    "absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300",
  cta: "text-sm px-5 py-2 rounded-full border border-border bg-surface text-foreground hover:bg-surface-hover transition-all duration-300",
  mobileOverlay:
    "fixed inset-0 z-[100] flex flex-col bg-background md:hidden pt-[calc(env(safe-area-inset-top,0px)+3.5rem)]",
  mobileMenuList: "flex flex-1 flex-col items-center justify-center gap-7 px-6 pb-10",
  mobileLink: "text-2xl font-display text-foreground",
  menuButton:
    "flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-surface",
} as const;
