"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const instance = new Lenis({
      lerp: 0.16,
      duration: 0.8,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisInstance = instance;

    let rafId: number;
    const raf = (time: number) => {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      lenisInstance = null;
    };
  }, [reducedMotion]);

  return children;
}
