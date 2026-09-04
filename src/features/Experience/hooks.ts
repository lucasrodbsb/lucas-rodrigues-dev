"use client";

import { useState } from "react";

export function useExperienceHover() {
  const [activeId, setActiveId] = useState<string | null>(null);
  return { activeId, setActiveId };
}
