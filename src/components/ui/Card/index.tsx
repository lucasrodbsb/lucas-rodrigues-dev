"use client";

import { motion } from "framer-motion";
import { cardStyles } from "./styles";
import type { CardProps } from "./types";
import { cn } from "@/lib/utils/cn";

export function Card({
  children,
  className,
  glow = true,
  hover = true,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        cardStyles.base,
        glow && cardStyles.glow,
        hover && cardStyles.hover,
        className,
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
