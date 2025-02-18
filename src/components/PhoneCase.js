import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";

const PhoneCase = ({ textureUrl }) => {
  const { nodes, materials } = useGLTF("/iPhone16.glb");

  console.log("Nodes:", nodes);
  console.log("Materials:", materials);

  const texture = useMemo(
    () => new TextureLoader().load(textureUrl),
    [textureUrl]
  );

  return (
    <group>
      <mesh geometry={nodes.Mesh001?.geometry} material={materials.Front}>
        <meshStandardMaterial map={texture} />
      </mesh>

      <mesh geometry={nodes.Mesh001_1?.geometry} material={materials.Back}>
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
};

export default PhoneCase;
