"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { fadeInUp } from "@/lib/animations/variants";
import { useInViewAnimation } from "@/lib/hooks/useInViewAnimation";
import { CLIENT_LOGOS, type ClientLogo } from "./constants";
import { clientsStyles } from "./styles";

function LogoCard({ logo }: { logo: ClientLogo }) {
  const isSvg = logo.src.endsWith(".svg");

  return (
    <div className={clientsStyles.card}>
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        className={clientsStyles.logo}
        unoptimized={isSvg}
      />
    </div>
  );
}

function MarqueeRow({
  logos,
  reverse = false,
}: {
  logos: ClientLogo[];
  reverse?: boolean;
}) {
  // Duplicate so the CSS loop stays seamless
  const duplicated = [...logos, ...logos];

  return (
    <div className="overflow-hidden py-2">
      <div
        className={clientsStyles.track}
        style={{
          animationDirection: reverse ? "reverse" : "normal",
          animationDuration: reverse ? "45s" : "40s",
        }}
      >
        {duplicated.map((logo, index) => (
          <LogoCard key={`${logo.id}-${index}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

export function Clients() {
  const t = useTranslations("clients");
  const { ref, inView } = useInViewAnimation();

  const firstRow = CLIENT_LOGOS.slice(0, 4);
  const secondRow = CLIENT_LOGOS.slice(4);

  return (
    <section
      id="clients"
      className={clientsStyles.section}
      aria-label={t("ariaLabel")}
    >
      <div className={clientsStyles.inner}>
        <motion.div
          ref={ref}
          className={clientsStyles.header}
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className={clientsStyles.label}>{t("label")}</span>
          <h2 className={clientsStyles.title}>{t("title")}</h2>
          <p className={clientsStyles.description}>{t("description")}</p>
        </motion.div>
      </div>

      <div className={clientsStyles.marqueeWrap}>
        <div className={clientsStyles.fadeLeft} aria-hidden="true" />
        <div className={clientsStyles.fadeRight} aria-hidden="true" />

        <MarqueeRow logos={firstRow} />
        <MarqueeRow logos={secondRow} reverse />
      </div>
    </section>
  );
}
