export const SITE = {
  name: "Lucas Rodrigues",
  shortName: "Lucas.",
  url: "https://lucasrodrigues.dev",
  email: "lucas.rodd61@gmail.com",
  linkedin: "https://linkedin.com/in/lucas-rodrigues-515358223",
  github: "https://github.com/lucasrodbsb",
  whatsapp: "https://wa.me/5561982789687",
  localeDefault: "pt",
  themeColor: {
    light: "#f8f9fc",
    dark: "#000000",
  },
  brand: {
    background: "#0a0a0b",
    foreground: "#fafafa",
    muted: "rgba(250, 250, 250, 0.55)",
    accent: "#6366f1",
    accentCyan: "#22d3ee",
  },
} as const;

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: SITE.linkedin,
    icon: "linkedin" as const,
  },
  {
    label: "GitHub",
    href: SITE.github,
    icon: "github" as const,
  },
  {
    label: "Email",
    href: `mailto:${SITE.email}`,
    icon: "mail" as const,
  },
] as const;

export const SITE_LOCALES = {
  pt: {
    html: "pt-BR",
    openGraph: "pt_BR",
    path: "/pt",
  },
  en: {
    html: "en",
    openGraph: "en_US",
    path: "/en",
  },
} as const;
