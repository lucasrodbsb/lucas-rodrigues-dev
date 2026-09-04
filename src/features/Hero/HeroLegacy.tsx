"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer, textReveal } from "@/lib/animations/variants";
import { HERO_BADGES } from "@/lib/i18n/content";
import { SOCIAL_LINKS } from "@/lib/constants/site";
import { heroLegacyStyles } from "./constants";

const HeroScene = dynamic(
  () => import("@/features/ThreeScene").then((mod) => mod.HeroScene),
  { ssr: false },
);

const socialIcons = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  mail: Mail,
} as const;

/** Original hero with Three.js scene — kept as legacy variant. */
export function HeroLegacy() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className={heroLegacyStyles.section}
      aria-label={t("ariaLabel")}
    >
      <HeroScene />

      <div className={heroLegacyStyles.content}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeInUp} className={heroLegacyStyles.greeting}>
            {t("greeting")}
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1 variants={textReveal} className={heroLegacyStyles.title}>
              {t("nameLine1")}
              <br />
              <span className="text-gradient-hero">{t("nameLine2")}</span>
            </motion.h1>
          </div>

          <motion.p variants={fadeInUp} className={heroLegacyStyles.role}>
            {t("role")}
          </motion.p>

          <motion.p variants={fadeInUp} className={heroLegacyStyles.subtitle}>
            {t("tagline")}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#projects" size="lg" magnetic>
              {t("viewProjects")}
            </Button>
            <Button href="#contact" variant="secondary" size="lg" magnetic>
              {t("getInTouch")}
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex items-center gap-3"
          >
            {SOCIAL_LINKS.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={heroLegacyStyles.socialLink}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-16 flex flex-wrap gap-3"
          >
            {HERO_BADGES.map((badge, i) => (
              <Badge key={badge} delay={0.8 + i * 0.1}>
                {badge}
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <a
            href="#about"
            aria-label={t("scrollToAbout")}
            className={heroLegacyStyles.scrollHint}
          >
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
