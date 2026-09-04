"use client";

import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { SPHERE_COLOR } from "./constants";

export function GlowingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1.2, 32, 32]}>
        <MeshDistortMaterial
          color={SPHERE_COLOR}
          attach="material"
          distort={0.25}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
}
