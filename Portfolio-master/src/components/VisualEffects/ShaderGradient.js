import React, { useRef, useEffect } from 'react';

export function ShaderGradient({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawShaderGradient = () => {
      time += 0.01;

      // Create animated mesh gradient using canvas
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const pixelIndex = i / 4;
        const x = pixelIndex % canvas.width;
        const y = Math.floor(pixelIndex / canvas.width);

        // Create flowing noise-based gradient
        const nx = x / canvas.width;
        const ny = y / canvas.height;

        // Sine wave based colors
        const r = Math.sin(nx * 3 + time) * 127.5 + 127.5;
        const g = Math.sin(ny * 3 + time + 2) * 127.5 + 127.5;
        const b = Math.sin((nx + ny) * 3 + time + 4) * 127.5 + 127.5;

        // Apply Perlin-like noise simulation
        const noise = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time);
        const finalR = Math.max(0, Math.min(255, r + noise * 50));
        const finalG = Math.max(0, Math.min(255, g + noise * 50));
        const finalB = Math.max(0, Math.min(255, b + noise * 50));

        data[i] = finalR;
        data[i + 1] = finalG;
        data[i + 2] = finalB;
        data[i + 3] = 255;
      }

      ctx.putImageData(imageData, 0, 0);
      animationFrameId = requestAnimationFrame(drawShaderGradient);
    };

    drawShaderGradient();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.3,
      }}
    />
  );
}
