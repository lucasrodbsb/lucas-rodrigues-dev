"use client";

import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "./useReducedMotion";

interface UseInViewAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useInViewAnimation(options: UseInViewAnimationOptions = {}) {
  const reducedMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: options.threshold ?? 0.15,
    triggerOnce: options.triggerOnce ?? true,
    rootMargin: options.rootMargin ?? "-50px",
  });

  return {
    ref,
    inView: reducedMotion ? true : inView,
    reducedMotion,
  };
}
