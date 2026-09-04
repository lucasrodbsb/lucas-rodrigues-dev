"use client";

import dynamic from "next/dynamic";
import { AuroraGradient } from "@/components/effects/AuroraGradient";
import { GridBackground } from "@/components/effects/GridBackground";
import { MouseSpotlight } from "@/components/effects/MouseSpotlight";
import { NoiseTexture } from "@/components/effects/NoiseTexture";

const FloatingParticles = dynamic(
  () =>
    import("@/features/Particles").then((mod) => mod.FloatingParticles),
  { ssr: false },
);

export function BackgroundEffects() {
  return (
    <>
      <AuroraGradient />
      <GridBackground />
      <NoiseTexture />
      <MouseSpotlight />
      <FloatingParticles />
    </>
  );
}
