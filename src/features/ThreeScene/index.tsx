"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { useVisibilityPause } from "@/lib/hooks/useVisibilityPause";
import { GlowingSphere } from "./GlowingSphere";
import { ParticleField } from "./ParticleField";
import { WireframeGrid } from "./WireframeGrid";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#6366f1" />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#22d3ee" />
      <GlowingSphere />
      <WireframeGrid />
      <ParticleField />
    </>
  );
}

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const active = useVisibilityPause(containerRef, !reducedMotion);

  if (reducedMotion) return null;

  return (
    <div ref={containerRef} className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.25]}
        frameloop={active ? "always" : "never"}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
