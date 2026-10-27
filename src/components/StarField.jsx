import React, { useEffect, useRef } from 'react';

export default function StarField({ isHyperdrive }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create 8-bit star sprites (cross, small diamond, dot)
    const starCount = 65;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.floor(Math.random() * 3) + 1, // 1 to 3
      speed: Math.random() * 1.5 + 0.8,
      type: Math.floor(Math.random() * 3), // 0: dot, 1: plus/cross, 2: 4-pixel diamond
      phase: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const speedMultiplier = isHyperdrive ? 3.5 : 1.0;

      stars.forEach((star) => {
        // Move star to left
        star.x -= star.speed * speedMultiplier * 2.5;
        if (star.x < -30) {
          star.x = width + 20;
          star.y = Math.random() * height;
        }

        star.phase += 0.08;
        const opacity = 0.5 + Math.sin(star.phase) * 0.45;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.2, opacity)})`;

        // Render pixel-art stars
        const px = Math.floor(star.x);
        const py = Math.floor(star.y);

        if (star.type === 0) {
          // 2x2 dot
          ctx.fillRect(px, py, 4, 4);
        } else if (star.type === 1) {
          // Plus/Cross star (+)
          ctx.fillRect(px, py - 4, 3, 11);
          ctx.fillRect(px - 4, py, 11, 3);
        } else {
          // Sparkling large diamond
          ctx.fillRect(px, py - 6, 4, 16);
          ctx.fillRect(px - 6, py, 16, 4);
          ctx.fillRect(px - 2, py - 2, 8, 8);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isHyperdrive]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 10,
      }}
    />
  );
}
