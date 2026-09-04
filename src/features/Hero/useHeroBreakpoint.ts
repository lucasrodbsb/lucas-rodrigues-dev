"use client";

import { useEffect, useState } from "react";

export type HeroBreakpoint = "mobile" | "tablet" | "desktop";

function resolveBreakpoint(width: number): HeroBreakpoint {
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

export function useHeroBreakpoint(): HeroBreakpoint {
  const [breakpoint, setBreakpoint] = useState<HeroBreakpoint>("desktop");

  useEffect(() => {
    const update = () => setBreakpoint(resolveBreakpoint(window.innerWidth));
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return breakpoint;
}

export const ORBIT_METRICS = {
  mobile: { outer: 168, inner: 138, outerFs: 10, innerFs: 9, outerLs: 3.8, innerLs: 3 },
  tablet: { outer: 188, inner: 154, outerFs: 11, innerFs: 9.5, outerLs: 4, innerLs: 3.2 },
  desktop: { outer: 228, inner: 192, outerFs: 13, innerFs: 11, outerLs: 4.5, innerLs: 3.5 },
} as const;
