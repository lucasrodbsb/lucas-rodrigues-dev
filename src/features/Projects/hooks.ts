"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectItem } from "@/lib/types/content";

export function useProjectModal() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  const open = (project: ProjectItem) => setSelectedProject(project);
  const close = () => setSelectedProject(null);

  return { selectedProject, open, close };
}

export function useProjectCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 12);
    setCanNext(el.scrollLeft < max - 12);
  }, []);

  const scrollByCard = useCallback((direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;

    const item = el.querySelector<HTMLElement>("[data-carousel-item]");
    const gap = 20;
    const amount = item ? item.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const observer = new ResizeObserver(update);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, [update]);

  return { trackRef, canPrev, canNext, scrollByCard };
}
