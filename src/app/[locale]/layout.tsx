import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter, Space_Grotesk } from "next/font/google";
import { BackgroundEffects } from "@/components/effects/BackgroundEffects";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { routing, type Locale } from "@/i18n/routing";
import { SITE, SITE_LOCALES } from "@/lib/constants/site";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: SITE.themeColor.light },
    { media: "(prefers-color-scheme: dark)", color: SITE.themeColor.dark },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = (routing.locales.includes(locale as Locale)
    ? locale
    : SITE.localeDefault) as Locale;
  const tMeta = await getTranslations({ locale: safeLocale, namespace: "metadata" });
  const localeMeta = SITE_LOCALES[safeLocale];
  const canonical = `${SITE.url}${localeMeta.path}`;
  const title = tMeta("title");
  const description = tMeta("description");
  const ogImageAlt = tMeta("ogImageAlt");

  const languages = {
    ...Object.fromEntries(
      routing.locales.map((item) => [item, `${SITE.url}/${item}`]),
    ),
    "x-default": `${SITE.url}/${SITE.localeDefault}`,
  };

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: title,
      template: `%s | ${SITE.name}`,
    },
    description,
    applicationName: SITE.name,
    keywords: tMeta("keywords").split(", "),
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "technology",
    classification: "Portfolio",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical,
      languages,
      types: {
        "application/xml": `${SITE.url}/sitemap.xml`,
        "text/plain": `${SITE.url}/llms.txt`,
      },
    },
    openGraph: {
      type: "profile",
      locale: localeMeta.openGraph,
      alternateLocale: routing.locales
        .filter((item) => item !== safeLocale)
        .map((item) => SITE_LOCALES[item].openGraph),
      url: canonical,
      title,
      description,
      siteName: SITE.name,
      firstName: "Lucas",
      lastName: "Rodrigues",
      username: "lucasrodbsb",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: ogImageAlt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: "/twitter-image",
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "llm:txt": `${SITE.url}/llms.txt`,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const safeLocale = locale as Locale;
  setRequestLocale(safeLocale);
  const messages = await getMessages();
  const tHero = await getTranslations({ locale: safeLocale, namespace: "hero" });
  const tMeta = await getTranslations({ locale: safeLocale, namespace: "metadata" });
  const localeMeta = SITE_LOCALES[safeLocale];
  const pageUrl = `${SITE.url}${localeMeta.path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: tMeta("description"),
        inLanguage: [SITE_LOCALES.pt.html, SITE_LOCALES.en.html],
        publisher: { "@id": `${SITE.url}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}/#profilepage`,
        url: pageUrl,
        name: tMeta("title"),
        description: tMeta("description"),
        inLanguage: localeMeta.html,
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": `${SITE.url}/#person` },
        mainEntity: { "@id": `${SITE.url}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${SITE.url}/#person`,
        name: SITE.name,
        url: pageUrl,
        image: `${SITE.url}/lucas-rodrigues.webp`,
        jobTitle: tHero("role"),
        email: SITE.email,
        description: tMeta("description"),
        address: {
          "@type": "PostalAddress",
          addressRegion: "Distrito Federal",
          addressCountry: "BR",
        },
        sameAs: [SITE.linkedin, SITE.github, SITE.whatsapp],
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "React Native",
          "Expo",
          "Node.js",
          "Frontend Engineering",
          "Mobile Engineering",
        ],
      },
    ],
  };

  return (
    <html
      lang={localeMeta.html}
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
        <link rel="alternate" type="text/plain" href="/llm.txt" title="llm.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-400">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <SmoothScrollProvider>
              <CustomCursor />
              <BackgroundEffects />
              <Navbar />
              <main className="relative z-10 flex-1 overflow-x-clip">{children}</main>
              <WhatsAppFloat />
              <Footer />
            </SmoothScrollProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
