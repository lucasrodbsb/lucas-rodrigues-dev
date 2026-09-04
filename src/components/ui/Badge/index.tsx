"use client";

import { motion } from "framer-motion";
import { badgeStyles } from "./styles";
import type { BadgeProps } from "./types";
import { cn } from "@/lib/utils/cn";

export function Badge({ children, className, delay = 0, animated = true }: BadgeProps) {
  if (!animated) {
    return (
      <span className={cn(badgeStyles.base, className)}>
        {children}
      </span>
    );
  }

  return (
    <motion.span
      className={cn(badgeStyles.base, className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2, scale: 1.05 }}
    >
      {children}
    </motion.span>
  );
}
