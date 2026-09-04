"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations/variants";
import { useInViewAnimation } from "@/lib/hooks/useInViewAnimation";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { getRecommendationItems } from "@/lib/i18n/content";
import { cn } from "@/lib/utils/cn";
import { recommendationsStyles } from "./styles";

export function Recommendations() {
  const t = useTranslations();
  const { ref, inView } = useInViewAnimation({ threshold: 0.2 });
  const reducedMotion = useReducedMotion();
  const items = getRecommendationItems(t);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section
      id="recommendations"
      className={recommendationsStyles.section}
      aria-label={t("recommendations.ariaLabel")}
    >
      <div className={recommendationsStyles.inner}>
        <SectionTitle
          label={t("recommendations.label")}
          title={t("recommendations.title")}
          description={t("recommendations.description")}
          align="center"
        />

        <motion.div
          ref={ref}
          className={recommendationsStyles.grid}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {items.map((item, i) => (
            <motion.div key={item.id} variants={fadeInUp}>
              <motion.div
                className={cn(
                  recommendationsStyles.floatWrap,
                  i % 3 === 0
                    ? recommendationsStyles.floatA
                    : i % 3 === 1
                      ? recommendationsStyles.floatB
                      : recommendationsStyles.floatC,
                )}
                animate={
                  reducedMotion
                    ? undefined
                    : { y: i % 2 === 0 ? [0, -10, 0] : [0, 8, 0] }
                }
                transition={
                  reducedMotion
                    ? undefined
                    : {
                        duration: 6.2 + i * 0.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.45,
                      }
                }
              >
              <Card className={recommendationsStyles.card}>
                <div className={recommendationsStyles.header}>
                  <div className={recommendationsStyles.avatar}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className={recommendationsStyles.identity}>
                    <h3 className={recommendationsStyles.name}>{item.name}</h3>
                    <p className={recommendationsStyles.role}>{item.role}</p>
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={recommendationsStyles.linkedin}
                    >
                      LinkedIn
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <blockquote
                  className={cn(
                    recommendationsStyles.quote,
                    expandedId !== item.id && recommendationsStyles.quoteClamped,
                  )}
                >
                  {item.quote}
                </blockquote>
                <button
                  type="button"
                  className={recommendationsStyles.readMore}
                  aria-expanded={expandedId === item.id}
                  onClick={() =>
                    setExpandedId((current) =>
                      current === item.id ? null : item.id,
                    )
                  }
                >
                  {expandedId === item.id
                    ? t("recommendations.readLess")
                    : t("recommendations.readMore")}
                </button>
              </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
