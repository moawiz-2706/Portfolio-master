import { useEffect, useState } from 'react';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      // Throttle updates using requestAnimationFrame
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return position;
};

export const useSmoothMousePosition = (smoothness = 0.1) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Smooth animation loop
    let animationFrameId;
    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * smoothness,
        y: prev.y + (targetPosition.y - prev.y) * smoothness
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [smoothness, targetPosition]);

  return position;
};
