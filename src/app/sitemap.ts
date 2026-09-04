import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE, getSiteUrl } from "@/lib/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const languages = {
    ...Object.fromEntries(
      routing.locales.map((locale) => [locale, `${siteUrl}/${locale}`]),
    ),
    "x-default": `${siteUrl}/${SITE.localeDefault}`,
  };

  return routing.locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === SITE.localeDefault ? 1 : 0.9,
    alternates: { languages },
  }));
}
