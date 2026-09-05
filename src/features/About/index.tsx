"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations/variants";
import { SITE } from "@/lib/constants/site";
import { useInViewAnimation } from "@/lib/hooks/useInViewAnimation";
import { getAboutStories } from "@/lib/i18n/content";
import { aboutStyles } from "./styles";

export function About() {
  const t = useTranslations();
  const { ref, inView } = useInViewAnimation();
  const stories = getAboutStories(t);

  return (
    <section
      id="about"
      className={aboutStyles.section}
      aria-label={t("about.ariaLabel")}
    >
      <div className={aboutStyles.inner}>
        <SectionTitle
          label={t("about.label")}
          title={t("about.title")}
          className={`${aboutStyles.heading} text-center md:text-left`}
          labelClassName="mb-2"
          titleClassName={aboutStyles.headingTitle}
        />

        <motion.div
          ref={ref}
          className={aboutStyles.layout}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className={aboutStyles.identity}>
            <div className={aboutStyles.photoShell}>
              <div className={aboutStyles.photoGlow} aria-hidden="true" />
              <div className={aboutStyles.photo}>
                <Image
                  src="/lucas-rodrigues.webp"
                  alt={SITE.name}
                  fill
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 144px, 288px"
                  className="object-cover object-[center_18%]"
                />
              </div>
            </div>

            <div className={aboutStyles.copyStack}>
              <div className={aboutStyles.intro}>
                <h3 className={aboutStyles.profileName}>
                  {SITE.name}
                  <span className={aboutStyles.profileNameMark}>.</span>
                </h3>
                <p className={aboutStyles.profileHeadline}>
                  {t("about.headline")}
                </p>
                <p className={aboutStyles.profileMeta}>
                  <MapPin
                    className={aboutStyles.locationIcon}
                    aria-hidden
                    strokeWidth={1.75}
                  />
                  {t("site.location")}
                </p>
              </div>

              <p className={aboutStyles.profileBio}>{t("about.bio")}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className={aboutStyles.stories}>
            {stories.map((item) => (
              <article key={item.title} className={aboutStyles.story}>
                <h3 className={aboutStyles.storyTitle}>{item.title}</h3>
                <p className={aboutStyles.storyDescription}>{item.description}</p>
              </article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
