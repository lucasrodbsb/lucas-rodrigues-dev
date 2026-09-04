import { PARTICLE_SCENE_COUNT } from "./constants";

function createParticlePositions(): Float32Array {
  const pos = new Float32Array(PARTICLE_SCENE_COUNT * 3);
  for (let i = 0; i < PARTICLE_SCENE_COUNT; i++) {
    const radius = 3 + Math.random() * 4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = radius * Math.cos(phi);
  }
  return pos;
}

const particlePositions = createParticlePositions();

export { particlePositions };
