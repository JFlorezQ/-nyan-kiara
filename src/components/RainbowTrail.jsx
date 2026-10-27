import React, { useEffect, useRef } from 'react';

const RAINBOW_COLORS = [
  '#FF0000', // Red
  '#FF9900', // Orange
  '#FFFF00', // Yellow
  '#33FF00', // Green
  '#0099FF', // Blue
  '#6633FF', // Purple
];

export default function RainbowTrail({ isHyperdrive }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let waveOffset = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const speed = isHyperdrive ? 0.35 : 0.16;
      waveOffset += speed;

      const stripeHeight = 15;
      const totalRainbowHeight = stripeHeight * RAINBOW_COLORS.length; // 90px
      const segmentWidth = 18; // Step width in pixels for retro feel
      const centerY = height / 2 - totalRainbowHeight / 2;

      // Draw each step column from 0 to width
      for (let x = 0; x < width; x += segmentWidth) {
        // Step wave calculation matching 8-bit Nyan effect
        const wave = Math.round(Math.sin((x / 60) - waveOffset) * 6);
        const colY = centerY + wave;

        RAINBOW_COLORS.forEach((color, i) => {
          ctx.fillStyle = color;
          ctx.fillRect(x, colY + i * stripeHeight, segmentWidth, stripeHeight);
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHyperdrive]);

  return (
    <canvas
      ref={canvasRef}
      className="wave-canvas"
      width={1200}
      height={220}
      style={{
        width: '1200px',
        height: '220px',
        pointerEvents: 'none',
      }}
    />
  );
}
