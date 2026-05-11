import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticles() {
  const particlesRef = useRef(null);
  const particleCount = 100;

  useEffect(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });

    if (particlesRef.current) {
      particlesRef.current.geometry = geometry;
      particlesRef.current.material = material;
    }
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0002;
      particlesRef.current.rotation.y += 0.0003;
      particlesRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial />
    </points>
  );
}

function AnimatedSphere() {
  const sphereRef = useRef(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.001;
      sphereRef.current.rotation.y += 0.002;
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2, 4]} />
      <meshPhongMaterial
        color={0x00d4ff}
        emissive={0x0066ff}
        wireframe={true}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function BackgroundGradient() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      const width = (canvasRef.current.width = window.innerWidth);
      const height = (canvasRef.current.height = window.innerHeight);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#0a0e27');
      gradient.addColorStop(0.5, '#16213e');
      gradient.addColorStop(1, '#0f3460');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
    />
  );
}

export function HeroScene() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', background: '#0a0e27' }}>
      <BackgroundGradient />
      <Canvas
        style={{ position: 'absolute', top: 0, left: 0 }}
        camera={{ position: [0, 0, 8], fov: 75 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color={0x00d4ff} />
        <pointLight position={[-10, -10, 10]} intensity={0.5} color={0x0084ff} />
        <AnimatedSphere />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
