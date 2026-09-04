"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations/variants";
import { useInViewAnimation } from "@/lib/hooks/useInViewAnimation";
import { cn } from "@/lib/utils/cn";
import type { SectionTitleProps } from "./types";

export function SectionTitle({
  label,
  title,
  description,
  align = "left",
  className,
  titleClassName,
  labelClassName,
}: SectionTitleProps) {
  const { ref, inView } = useInViewAnimation();

  return (
    <motion.div
      ref={ref}
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className ?? "mb-16 md:mb-24",
      )}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.span
        variants={fadeInUp}
        className={cn(
          "inline-block text-xs font-medium uppercase tracking-[0.3em] text-accent",
          labelClassName ?? "mb-4",
        )}
      >
        {label}
      </motion.span>
      <motion.h2
        variants={fadeInUp}
        className={cn(
          "font-display font-bold tracking-tight text-foreground",
          titleClassName ?? "text-4xl md:text-5xl lg:text-6xl",
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg text-muted max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
