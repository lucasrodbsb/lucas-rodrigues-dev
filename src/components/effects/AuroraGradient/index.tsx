"use client";

import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const blobBase =
  "absolute rounded-full will-change-transform motion-reduce:animate-none";

export function AuroraGradient() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`${blobBase} aurora-blob-1 -top-1/2 -left-1/4 h-[80vw] w-[80vw]`}
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)",
          opacity: "var(--aurora-opacity-1)",
        }}
      />
      <div
        className={`${blobBase} aurora-blob-2 -bottom-1/2 -right-1/4 h-[70vw] w-[70vw]`}
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 70%)",
          opacity: "var(--aurora-opacity-2)",
        }}
      />
      <div
        className={`${blobBase} aurora-blob-3 top-1/3 right-1/3 h-[50vw] w-[50vw]`}
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)",
          opacity: "var(--aurora-opacity-3)",
        }}
      />
    </div>
  );
}
