"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const media = window.matchMedia("(min-width: 768px)");
    if (!media.matches) return;

    const el = cursorRef.current;
    if (!el) return;

    let rafId = 0;
    let x = 0;
    let y = 0;
    let visible = false;

    const flush = () => {
      rafId = 0;
      el.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`;
      el.style.opacity = visible ? "1" : "0";
    };

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      visible = true;
      if (!rafId) rafId = requestAnimationFrame(flush);
    };

    const hide = () => {
      visible = false;
      if (!rafId) rafId = requestAnimationFrame(flush);
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", hide);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[200] hidden md:block dark:mix-blend-difference"
      style={{ opacity: 0, willChange: "transform" }}
      aria-hidden="true"
    >
      <div className="h-3 w-3 rounded-full cursor-dot" />
    </div>
  );
}
