import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Diamond = ({ theme }) => {
  const { scene } = useGLTF('/DiamondPng.glb');
  const ref = useRef();

  const [scale, setScale] = useState(0.2);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640; // breakpoint sm
      setScale(isMobile ? 0.13 : 0.2);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const color = theme === 'dark' ? '#7fb0df' : '#ffdf89';

  const material = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color),
    metalness: 0,
    roughness: 0,
    transmission: 1,
    thickness: 1,
    clearcoat: 3,
    clearcoatRoughness: 0,
    reflectivity: 2,
  }), [color]);

  // Appliquer le material une seule fois
  React.useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = material;
      }
    });
  }, [scene, material]);

  return (
    <group position={[0, -3.7, 0]} scale={scale} ref={ref}>
      <primitive object={scene} />
    </group>
  );
};

export default Diamond;
