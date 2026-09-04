"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function MouseSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const media = window.matchMedia("(min-width: 768px)");
    if (!media.matches) return;

    const el = spotRef.current;
    if (!el) return;

    let rafId = 0;
    let x = 0;
    let y = 0;

    const flush = () => {
      rafId = 0;
      el.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
    };

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!rafId) rafId = requestAnimationFrame(flush);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", move);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      aria-hidden="true"
    >
      <div
        ref={spotRef}
        className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.45) 0%, transparent 70%)",
          opacity: "var(--spotlight-opacity)",
        }}
      />
    </div>
  );
}
