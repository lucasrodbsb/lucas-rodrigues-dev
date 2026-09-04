"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useSceneTheme } from "./hooks";

export function WireframeGrid() {
  const ref = useRef<THREE.LineSegments>(null);
  const { wireframe } = useSceneTheme();

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2.5, 2);
    return new THREE.WireframeGeometry(geo);
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.08;
    ref.current.rotation.y = state.clock.elapsedTime * 0.12;
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial
        color={wireframe.color}
        transparent
        opacity={wireframe.opacity}
      />
    </lineSegments>
  );
}
