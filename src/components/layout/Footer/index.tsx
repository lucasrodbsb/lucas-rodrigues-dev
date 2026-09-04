"use client";

import { ArrowUp, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { getLenis } from "@/components/providers/SmoothScrollProvider";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { SITE, SOCIAL_LINKS } from "@/lib/constants/site";

function scrollToTop() {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(0, { duration: 0.8 });
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export const footerStyles = {
  base: "relative z-10 border-t border-border bg-footer backdrop-blur-xl",
  inner: "mx-auto max-w-7xl px-6 py-12 md:px-8",
  socialLink:
    "p-3 rounded-full border border-border text-muted hover:text-foreground hover:border-border-hover hover:bg-surface transition-all duration-300",
  divider: "mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4",
  copyright: "text-xs text-faint",
  backToTop: "text-xs text-faint hover:text-muted flex items-center gap-1 transition-colors cursor-pointer",
} as const;

const iconMap = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  mail: Mail,
} as const;

export function Footer() {
  const t = useTranslations("footer");
  const tSite = useTranslations("site");
  const tHero = useTranslations("hero");
  const year = new Date().getFullYear();

  return (
    <footer className={footerStyles.base}>
      <div className={footerStyles.inner}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-display text-2xl font-bold text-foreground">
              {SITE.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-2 text-sm text-subtle">
              {tHero("role")} · {tSite("location")}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={footerStyles.socialLink}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className={footerStyles.divider}>
          <p className={footerStyles.copyright}>
            © {year} {SITE.name}. {t("crafted")}
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className={footerStyles.backToTop}
          >
            {t("backToTop")}
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
