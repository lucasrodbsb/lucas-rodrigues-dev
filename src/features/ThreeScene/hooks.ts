"use client";

import { useTheme } from "next-themes";

export function useSceneTheme() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return {
    isDark,
    wireframe: {
      color: isDark ? "#22d3ee" : "#3730a3",
      opacity: isDark ? 0.15 : 0.42,
    },
    particles: {
      color: isDark ? "#6366f1" : "#4338ca",
      opacity: isDark ? 0.6 : 0.55,
      size: isDark ? 0.015 : 0.018,
    },
  };
}
