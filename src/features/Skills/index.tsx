"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { fadeInUp } from "@/lib/animations/variants";
import { useInViewAnimation } from "@/lib/hooks/useInViewAnimation";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { ALL_SKILL_NAMES, getSpokenLanguages } from "@/lib/i18n/content";
import { SkillBrandIcon } from "./icons";
import { skillsStyles } from "./styles";

function SkillTile({ name }: { name: string }) {
  return (
    <div className={skillsStyles.tile}>
      <span className={skillsStyles.tileIcon}>
        <SkillBrandIcon name={name} />
      </span>
      <span className={skillsStyles.tileName}>{name}</span>
    </div>
  );
}

function MarqueeRow({ names }: { names: string[] }) {
  const duplicated = [...names, ...names, ...names];

  return (
    <div className={skillsStyles.row}>
      <div className={skillsStyles.track}>
        {duplicated.map((name, index) => (
          <SkillTile key={`${name}-${index}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const t = useTranslations();
  const { ref, inView } = useInViewAnimation();
  const reducedMotion = useReducedMotion();
  const languages = getSpokenLanguages(t);

  return (
    <section
      id="skills"
      className={skillsStyles.section}
      aria-label={t("skills.ariaLabel")}
    >
      <div className={skillsStyles.inner}>
        <SectionTitle
          label={t("skills.label")}
          title={t("skills.title")}
          description={t("skills.description")}
        />
      </div>

      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {reducedMotion ? (
          <div className={`${skillsStyles.inner} ${skillsStyles.staticGrid}`}>
            {ALL_SKILL_NAMES.map((name) => (
              <SkillTile key={name} name={name} />
            ))}
          </div>
        ) : (
          <>
            <ul className="sr-only">
              {ALL_SKILL_NAMES.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            <div className={skillsStyles.marqueeWrap} aria-hidden="true">
              <div className={skillsStyles.fadeLeft} />
              <div className={skillsStyles.fadeRight} />
              <MarqueeRow names={ALL_SKILL_NAMES} />
            </div>
          </>
        )}

        <div className={skillsStyles.languages}>
          {languages.map((lang) => (
            <span key={lang.name} className={skillsStyles.language}>
              <span className={skillsStyles.languageName}>{lang.name}</span>
              <span className={skillsStyles.languageLevel}>{lang.level}</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
