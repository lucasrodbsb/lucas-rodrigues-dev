"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useSceneTheme } from "./hooks";
import { particlePositions } from "./particlePositions";

export function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { particles } = useSceneTheme();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    ref.current.rotation.x =
      mouse.current.y * 0.1 + Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    ref.current.rotation.z = mouse.current.x * 0.05;
  });

  return (
    <points
      ref={ref}
      onPointerMove={(e) => {
        mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      }}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlePositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={particles.size}
        color={particles.color}
        transparent
        opacity={particles.opacity}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
