import React, { useEffect, useRef } from 'react';

export function LiquidCursor() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const tailRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const drawLiquidCursor = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update tail positions
      tailRef.current.unshift({
        x: mouseRef.current.x,
        y: mouseRef.current.y,
      });

      if (tailRef.current.length > 30) {
        tailRef.current.pop();
      }

      // Draw liquid trail
      tailRef.current.forEach((point, index) => {
        const opacity = (index / tailRef.current.length) * 0.6;
        const size = (1 - index / tailRef.current.length) * 8;

        // Gradient for liquid effect
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size);
        gradient.addColorStop(0, `rgba(0, 212, 255, ${opacity})`);
        gradient.addColorStop(0.7, `rgba(0, 132, 255, ${opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(0, 212, 255, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw main cursor
      const glowGradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        15
      );
      glowGradient.addColorStop(0, 'rgba(0, 212, 255, 0.8)');
      glowGradient.addColorStop(0.5, 'rgba(0, 132, 255, 0.4)');
      glowGradient.addColorStop(1, 'rgba(0, 212, 255, 0)');

      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 15, 0, Math.PI * 2);
      ctx.fill();

      // Inner circle
      ctx.fillStyle = 'rgba(0, 212, 255, 0.6)';
      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 4, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(drawLiquidCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    drawLiquidCursor();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        cursor: 'none',
      }}
    />
  );
}
