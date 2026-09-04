"use client";

import { useEffect, useState, type RefObject } from "react";

/** Pauses animation loops when the element is off-screen or the tab is hidden. */
export function useVisibilityPause(
  ref: RefObject<Element | null>,
  enabled = true,
): boolean {
  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    if (!enabled) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "10% 0px", threshold: 0.05 },
    );
    observer.observe(el);

    const onVisibility = () => setPageVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [ref, enabled]);

  return enabled && inView && pageVisible;
}
