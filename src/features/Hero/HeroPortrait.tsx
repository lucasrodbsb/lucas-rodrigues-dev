"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  fadeInUp,
  heroOrbitIn,
  heroOrbitInstant,
  heroTextContainer,
  heroTextInstant,
} from "@/lib/animations/variants";
import { HERO_BADGES } from "@/lib/i18n/content";
import { SOCIAL_LINKS } from "@/lib/constants/site";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils/cn";
import { CircularText } from "./CircularText";
import { heroPortraitStyles } from "./constants";
import { ORBIT_METRICS, useHeroBreakpoint, type HeroBreakpoint } from "./useHeroBreakpoint";

const socialIcons = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  mail: Mail,
} as const;

interface HeroOrbitProps {
  outerRing: string;
  innerRing: string;
  portraitAlt: string;
  reducedMotion: boolean;
  size?: HeroBreakpoint;
}

function HeroOrbit({
  outerRing,
  innerRing,
  portraitAlt,
  reducedMotion,
  size = "desktop",
}: HeroOrbitProps) {
  const metrics = ORBIT_METRICS[size];

  return (
    <div className={heroPortraitStyles.orbit}>
      <CircularText
        text={outerRing}
        radius={metrics.outer}
        fontSize={metrics.outerFs}
        letterSpacing={metrics.outerLs}
        duration={55}
        className={cn(
          "hero-circular-text-outer",
          reducedMotion && "[animation-play-state:paused]",
        )}
      />
      <CircularText
        text={innerRing}
        radius={metrics.inner}
        fontSize={metrics.innerFs}
        letterSpacing={metrics.innerLs}
        reverse
        duration={38}
        className={cn(
          heroPortraitStyles.innerRing,
          reducedMotion && "[animation-play-state:paused]",
        )}
      />

      <div className={heroPortraitStyles.ringOuter} aria-hidden="true" />
      <div className={heroPortraitStyles.ringInner} aria-hidden="true" />
      <div className={heroPortraitStyles.ringAccent} aria-hidden="true" />

      <div className={heroPortraitStyles.photoFrame}>
        <div className={heroPortraitStyles.photoGlow} aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/lucas-rodrigues-hero-masked.png"
          alt={portraitAlt}
          width={741}
          height={899}
          decoding="async"
          fetchPriority="high"
          className={heroPortraitStyles.photo}
        />
      </div>
    </div>
  );
}

function HeroSocials({ desktop = false }: { desktop?: boolean }) {
  return (
    <div
      className={
        desktop ? heroPortraitStyles.socialsDesktop : heroPortraitStyles.socials
      }
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
            className={heroPortraitStyles.socialLink}
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className="h-5 w-5" />
          </motion.a>
        );
      })}
    </div>
  );
}

export function HeroPortrait() {
  const t = useTranslations("hero");
  const reducedMotion = useReducedMotion();
  const heroBreakpoint = useHeroBreakpoint();

  const outerRing = `${t("circularOuter")} ${t("separator")} `.repeat(2);
  const innerRing = `${t("circularInner")} ${t("separator")} `.repeat(3);
  const textStagger = reducedMotion ? heroTextInstant : heroTextContainer;
  const orbitReveal = reducedMotion ? heroOrbitInstant : heroOrbitIn;

  return (
    <section
      id="hero"
      className={heroPortraitStyles.section}
      aria-label={t("ariaLabel")}
    >
      <div className={heroPortraitStyles.glowPrimary} aria-hidden="true" />
      <div className={heroPortraitStyles.glowSecondary} aria-hidden="true" />

      <div className={heroPortraitStyles.content}>
        {/* Mobile — círculo em destaque, textos mínimos */}
        <div
          className={heroPortraitStyles.mobileLayout}
          inert={heroBreakpoint !== "mobile" ? true : undefined}
          aria-hidden={heroBreakpoint !== "mobile"}
        >
          <motion.div
            variants={orbitReveal}
            initial="hidden"
            animate="visible"
            className={heroPortraitStyles.mobileOrbitWrap}
          >
            <HeroOrbit
              outerRing={outerRing}
              innerRing={innerRing}
              portraitAlt={t("portraitAlt")}
              reducedMotion={reducedMotion}
              size="mobile"
            />
          </motion.div>

          <motion.div
            variants={textStagger}
            initial="hidden"
            animate="visible"
            className={heroPortraitStyles.mobileTextGroup}
          >
            <motion.div variants={fadeInUp} className={heroPortraitStyles.nameBlock}>
              <h1 className={heroPortraitStyles.title}>
                {t("nameLine1")}
                <br />
                <span className="text-gradient-hero">{" "}{t("nameLine2")}</span>
              </h1>
            </motion.div>

            <motion.p variants={fadeInUp} className={heroPortraitStyles.role}>
              {t("role")}
            </motion.p>

            <motion.div variants={fadeInUp} className={heroPortraitStyles.actions}>
              <Button href="#projects" size="md" magnetic className="w-full">
                {t("viewProjects")}
              </Button>
              <Button href="#contact" variant="secondary" size="md" magnetic className="w-full">
                {t("getInTouch")}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop — 3 colunas: nome | círculo | detalhes */}
        <div
          className={heroPortraitStyles.desktopLayout}
          inert={heroBreakpoint === "mobile" ? true : undefined}
          aria-hidden={heroBreakpoint === "mobile"}
        >
          <motion.div
            variants={textStagger}
            initial="hidden"
            animate="visible"
            className={heroPortraitStyles.leftPanel}
          >
            <motion.p variants={fadeInUp} className={heroPortraitStyles.greetingDesktop}>
              {t("greeting")}
            </motion.p>
            <motion.div variants={fadeInUp} className={heroPortraitStyles.nameBlock}>
              <h1 className={heroPortraitStyles.titleDesktop}>
                {t("nameLine1")}
                <br />
                <span className="text-gradient-hero">{" "}{t("nameLine2")}</span>
              </h1>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className={heroPortraitStyles.roleDivider}
              aria-hidden="true"
            />
            <motion.p variants={fadeInUp} className={heroPortraitStyles.roleDesktop}>
              {t("role")}
            </motion.p>
          </motion.div>

          <motion.div
            variants={orbitReveal}
            initial="hidden"
            animate="visible"
            className={heroPortraitStyles.centerPanel}
          >
            <HeroOrbit
              outerRing={outerRing}
              innerRing={innerRing}
              portraitAlt={t("portraitAlt")}
              reducedMotion={reducedMotion}
              size={heroBreakpoint === "desktop" ? "desktop" : "tablet"}
            />
          </motion.div>

          <motion.div
            variants={textStagger}
            initial="hidden"
            animate="visible"
            className={heroPortraitStyles.rightPanel}
          >
            <motion.p variants={fadeInUp} className={heroPortraitStyles.taglineDesktop}>
              {t("tagline")}
            </motion.p>

            <motion.div variants={fadeInUp} className={heroPortraitStyles.badgesDesktop}>
              {HERO_BADGES.map((badge) => (
                <Badge key={badge} animated={false}>
                  {badge}
                </Badge>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className={heroPortraitStyles.actionsDesktop}>
              <Button href="#projects" size="md" magnetic>
                {t("viewProjects")}
              </Button>
              <Button href="#contact" variant="secondary" size="md" magnetic>
                {t("getInTouch")}
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <HeroSocials desktop />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className={heroPortraitStyles.scrollWrap}
          animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <a
            href="#about"
            aria-label={t("scrollToAbout")}
            className={heroPortraitStyles.scrollHint}
          >
            <ArrowDown size={24} strokeWidth={1.75} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
