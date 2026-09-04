import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ...Object.fromEntries(
      routing.locales.map((locale) => [locale, `${SITE.url}/${locale}`]),
    ),
    "x-default": `${SITE.url}/${SITE.localeDefault}`,
  };

  return routing.locales.map((locale) => ({
    url: `${SITE.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === SITE.localeDefault ? 1 : 0.9,
    alternates: { languages },
  }));
}
