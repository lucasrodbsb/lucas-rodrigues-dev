"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations/variants";
import { useInViewAnimation } from "@/lib/hooks/useInViewAnimation";
import { getExperienceItems } from "@/lib/i18n/content";
import { cn } from "@/lib/utils/cn";
import { useExperienceHover } from "./hooks";
import { experienceStyles } from "./styles";

export function Experience() {
  const t = useTranslations();
  const { ref, inView } = useInViewAnimation();
  const { activeId, setActiveId } = useExperienceHover();
  const items = getExperienceItems(t, (key) => t.raw(key));

  return (
    <section
      id="experience"
      className={experienceStyles.section}
      aria-label={t("experience.ariaLabel")}
    >
      <div className={experienceStyles.inner}>
        <SectionTitle
          label={t("experience.label")}
          title={t("experience.title")}
          description={t("experience.description")}
        />

        <motion.div
          ref={ref}
          className={experienceStyles.list}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className={cn(
                  experienceStyles.item,
                  isActive && experienceStyles.itemActive,
                )}
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() => setActiveId(isActive ? null : item.id)}
              >
                <div className={experienceStyles.header}>
                  <span
                    className={experienceStyles.accentDot}
                    style={{ backgroundColor: item.color }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className={experienceStyles.company}>
                      {item.company}
                    </h3>
                    <p className={experienceStyles.role}>{item.role}</p>
                  </div>
                  <div className="text-right">
                    <p className={experienceStyles.location}>
                      {item.location}
                    </p>
                  </div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className={experienceStyles.details}>
                        <p className="text-muted leading-relaxed">
                          {item.description}
                        </p>

                        <div className={experienceStyles.tech}>
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={experienceStyles.techBadge}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 space-y-2">
                          {item.achievements.map((achievement) => (
                            <div
                              key={achievement}
                              className={experienceStyles.achievement}
                            >
                              <Check
                                size={14}
                                className="text-accent mt-0.5 shrink-0"
                              />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
