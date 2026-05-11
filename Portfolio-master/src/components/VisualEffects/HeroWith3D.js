import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Floating particles component
const FloatingParticles = () => {
  const meshRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const geometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 2000;
      positions[i + 1] = (Math.random() - 0.5) * 2000;
      positions[i + 2] = (Math.random() - 0.5) * 2000;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });

    const points = new THREE.Points(geometry, material);
    if (particlesRef.current) {
      particlesRef.current.add(points);
    }

    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0001;
      particlesRef.current.rotation.y += 0.0002;
    }
  });

  return <group ref={particlesRef} />;
};

// Animated sphere with wireframe
const AnimatedSphere = () => {
  const sphereRef = useRef(null);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.0005;
      sphereRef.current.rotation.y += 0.0008;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, 0]}>
      <meshPhongMaterial
        color={0x0084ff}
        emissive={0x0055ff}
        emissiveIntensity={0.2}
        wireframe={false}
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
};

// Wireframe sphere overlay
const WireframeSphere = () => {
  const wireRef = useRef(null);

  useFrame(() => {
    if (wireRef.current) {
      wireRef.current.rotation.x -= 0.0003;
      wireRef.current.rotation.y -= 0.0005;
    }
  });

  return (
    <Sphere ref={wireRef} args={[1.1, 16, 16]} position={[0, 0, 0]}>
      <meshBasicMaterial wireframe color={0x00d4ff} transparent opacity={0.3} />
    </Sphere>
  );
};

// 3D Scene
const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.5], fov: 50 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 2.5]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color={0x0084ff} />
      
      <Suspense fallback={null}>
        <FloatingParticles />
        <AnimatedSphere />
        <WireframeSphere />
      </Suspense>
    </Canvas>
  );
};

export const HeroWith3D = ({ children }) => {
  return (
    <motion.div
      className="hero-3d-wrapper"
      style={{ position: 'relative', width: '100%', minHeight: '100vh' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-3d-canvas">
        <HeroScene />
      </div>
      <div className="hero-3d-content" style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>
    </motion.div>
  );
};

export default HeroWith3D;
