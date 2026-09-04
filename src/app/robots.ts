import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "ClaudeBot",
  "Anthropic-AI",
  "PerplexityBot",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: AI_CRAWLERS,
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
