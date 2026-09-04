"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import {
  PARTICLE_COLORS_DARK,
  PARTICLE_COLORS_LIGHT,
  PARTICLE_COUNT,
} from "./constants";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const media = window.matchMedia("(min-width: 768px)");
    if (!media.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const isDark = resolvedTheme === "dark";
    const colors = isDark ? PARTICLE_COLORS_DARK : PARTICLE_COLORS_LIGHT;

    let animationId = 0;
    let particles: Particle[] = [];
    let pageVisible = document.visibilityState === "visible";

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const animate = () => {
      if (!pageVisible) {
        animationId = 0;
        return;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    const start = () => {
      if (!animationId && pageVisible) {
        animationId = requestAnimationFrame(animate);
      }
    };

    const onVisibility = () => {
      pageVisible = document.visibilityState === "visible";
      if (pageVisible) start();
    };

    resize();
    init();
    start();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      pageVisible = false;
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [resolvedTheme, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      style={{ opacity: "var(--particle-opacity)" }}
      aria-hidden="true"
    />
  );
}
