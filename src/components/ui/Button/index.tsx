"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { useMagneticButton } from "./hooks";
import type { ButtonProps } from "./types";
import { getButtonClassName } from "./utils";

export function Button({
  variant = "primary",
  size = "md",
  magnetic = false,
  href,
  className = "",
  children,
  disabled,
  type = "button",
  onClick,
}: ButtonProps) {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagneticButton(magnetic);
  const classNames = getButtonClassName({ variant, size, className });

  const content = (
    <motion.span
      className="relative z-10 flex items-center gap-2"
      style={magnetic ? { x, y } : undefined}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn("inline-block", className.includes("w-full") && "w-full")}
      >
        <Link href={href} className={cn(classNames, className.includes("w-full") && "w-full")}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={cn("inline-block", className.includes("w-full") && "w-full")}
    >
      <button
        type={type}
        className={cn(classNames, className.includes("w-full") && "w-full")}
        disabled={disabled}
        onClick={onClick}
      >
        {content}
      </button>
    </motion.div>
  );
}
