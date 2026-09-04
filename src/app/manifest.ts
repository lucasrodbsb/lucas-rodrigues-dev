import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description:
      "Portfolio de Lucas Rodrigues — engenheiro de software focado em React, Next.js, React Native e TypeScript.",
    start_url: `/${SITE.localeDefault}`,
    scope: "/",
    display: "standalone",
    background_color: SITE.themeColor.dark,
    theme_color: SITE.brand.accent,
    lang: "pt-BR",
    categories: ["portfolio", "productivity", "business"],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
