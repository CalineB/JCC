import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Diamond = ({theme}) => {
  const { scene } = useGLTF("/DiamondPng.glb");
  const ref = useRef();

  const color = theme === "dark" ? "#7fb0df" : "#ffdf89";

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshPhysicalMaterial({
        color:  new THREE.Color(color),
        metalness: 0,
        roughness: 0,
        transmission: 1,
        thickness: 1,
        clearcoat:3,
        clearcoatRoughness: 0,
        reflectivity: 2,
      });
    }
  });

  return (
    <group position={[0, -3.7, 0]} scale={0.2} ref={ref}>
        <primitive object={scene} />
    </group>
  );
};

export default Diamond;
