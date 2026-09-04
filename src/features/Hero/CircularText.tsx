"use client";

import { cn } from "@/lib/utils/cn";

interface CircularTextProps {
  text: string;
  radius: number;
  fontSize?: number;
  letterSpacing?: number;
  className?: string;
  reverse?: boolean;
  duration?: number;
}

export function CircularText({
  text,
  radius,
  fontSize = 11,
  letterSpacing = 3.5,
  className,
  reverse = false,
  duration = 45,
}: CircularTextProps) {
  const size = radius * 2 + 40;
  const center = size / 2;
  const pathId = `circle-${radius}-${reverse ? "rev" : "fwd"}`;

  const pathD = `
    M ${center},${center}
    m -${radius},0
    a ${radius},${radius} 0 1,${reverse ? 0 : 1} ${radius * 2},0
    a ${radius},${radius} 0 1,${reverse ? 0 : 1} -${radius * 2},0
  `;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={cn("hero-circular-text absolute inset-0 h-full w-full", className)}
      style={{
        animationDuration: `${duration}s`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
      aria-hidden="true"
    >
      <defs>
        <path id={pathId} d={pathD} fill="none" />
      </defs>
      <text
        fill="currentColor"
        fontSize={fontSize}
        fontWeight={600}
        letterSpacing={letterSpacing}
        className="uppercase font-display"
      >
        <textPath href={`#${pathId}`} startOffset="0%">
          {text}
        </textPath>
      </text>
    </svg>
  );
}
