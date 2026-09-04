"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/constants/site";
import { NAV_SECTIONS } from "@/lib/i18n/content";
import { cn } from "@/lib/utils/cn";
import { useNavbarScroll } from "./hooks";
import { navbarStyles } from "./styles";

export function Navbar() {
  const t = useTranslations("nav");
  const { scrolled, atTop, mobileOpen, setMobileOpen } = useNavbarScroll();
  const fadedAtTop = atTop && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={cn(
          navbarStyles.base,
          mobileOpen && navbarStyles.open,
          scrolled || mobileOpen
            ? navbarStyles.scrolled
            : fadedAtTop
              ? navbarStyles.atTop
              : navbarStyles.transparent,
        )}
      >
        <nav className={navbarStyles.inner} aria-label={t("mainNavigation")}>
          <Link href="/" className={navbarStyles.logo}>
            {SITE.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </Link>

          <ul className="hidden md:flex items-center gap-4 lg:gap-8">
            {NAV_SECTIONS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={navbarStyles.link}>
                  {t(link.key)}
                  <span className={navbarStyles.linkUnderline} />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <a href="#contact" className={cn(navbarStyles.cta, "hidden lg:inline-flex")}>
              {t("letsTalk")}
            </a>
          </div>

          <div className="flex md:hidden items-center gap-1.5">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              className={navbarStyles.menuButton}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={navbarStyles.mobileOverlay}
            role="dialog"
            aria-modal="true"
            aria-label={t("mainNavigation")}
          >
            <ul className={navbarStyles.mobileMenuList}>
              {NAV_SECTIONS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <a
                    href={link.href}
                    className={navbarStyles.mobileLink}
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(link.key)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
