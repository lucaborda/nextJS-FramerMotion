import { Text, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React from "react";
import { useRef } from "react";

const Model = () => {
  const mesh = useRef<any>(this);
  const { nodes, materials } = useGLTF("/medias/craneo.glb");
  const { viewport } = useThree();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.02;
      mesh.current.rotation.y += 0.01;
      mesh.current.material.transparent = true;
      mesh.current.material.opacity = 0.4;
    }
  });

  return (
    <group scale={viewport.width}>
      <Text fontSize={0.1} font={"font/AVGARDD_2.woff"}>
        Loose my head!
      </Text>
      <mesh
        ref={mesh}
        geometry={nodes.mesh_0.geometry}
        material={materials[""]}
      />
    </group>
  );
};

export default Model;
