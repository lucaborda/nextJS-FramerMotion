"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

export const Scene = () => {
  return (
    <Canvas>
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Model />
    </Canvas>
  );
};

export default Scene;
