"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeInUp, staggerContainer } from "@/lib/animations/variants";
import { useInViewAnimation } from "@/lib/hooks/useInViewAnimation";
import { getTimelineItems } from "@/lib/i18n/content";
import { timelineStyles } from "./styles";

export function Timeline() {
  const t = useTranslations();
  const { ref, inView } = useInViewAnimation();
  const items = getTimelineItems(t);

  return (
    <section className="relative z-10 py-24 md:py-32" aria-label={t("timeline.ariaLabel")}>
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          {t("timeline.title")}
        </h2>
        <p className="text-subtle text-center mb-8">
          {t("timeline.description")}
        </p>
        <div className={timelineStyles.container}>
          <div className={timelineStyles.line} aria-hidden="true" />

          <motion.div
            ref={ref}
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className={timelineStyles.dot} />
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <span className="text-xs font-medium text-accent tracking-wider">
                    {item.marker}
                  </span>
                  <h4 className="font-display text-lg font-semibold text-foreground mt-1">
                    {item.title}
                  </h4>
                  <p className="text-subtle text-sm mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
