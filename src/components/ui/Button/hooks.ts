"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useCallback, useRef } from "react";

export function useMagneticButton(enabled: boolean) {
  const ref = useRef<HTMLDivElement & HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (!enabled || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((event.clientX - centerX) * 0.15);
      y.set((event.clientY - centerY) * 0.15);
    },
    [enabled, x, y],
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return {
    ref,
    x: enabled ? springX : 0,
    y: enabled ? springY : 0,
    handleMouseMove,
    handleMouseLeave,
  };
}
