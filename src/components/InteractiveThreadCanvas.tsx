'use client';

import React, { useEffect, useRef } from 'react';

interface InteractiveThreadCanvasProps {
  className?: string;
  color?: string;
  opacity?: number;
}

export default function InteractiveThreadCanvas({
  className = '',
  color = '#D97752',
  opacity = 0.28,
}: InteractiveThreadCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const newWidth = canvas.parentElement.clientWidth;
      const newHeight = canvas.parentElement.clientHeight;
      // On mobile browsers, scrolling down collapses the URL bar, firing a resize event with ~50-60px height change.
      // Re-assigning canvas.width/height clears the entire canvas buffer, causing a harsh screen flicker.
      // Only resize if width changed (screen rotation) or height changed drastically (> 120px).
      if (Math.abs(newWidth - width) > 4 || Math.abs(newHeight - height) > 120) {
        width = canvas.width = newWidth;
        height = canvas.height = newHeight;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Yarn strands simulation
    const strands = [
      { amp: 40, freq: 0.003, speed: 0.012, offset: 0, color: '#D97752', width: 2.2 },
      { amp: 65, freq: 0.002, speed: 0.008, offset: 2, color: '#8B9E6E', width: 1.6 },
      { amp: 30, freq: 0.004, speed: 0.015, offset: 4, color: '#F07073', width: 1.8 },
      { amp: 50, freq: 0.0025, speed: 0.01, offset: 1.2, color: '#DE9B26', width: 1.2 },
    ];

    let t = 0;

    const render = () => {
      t += 1;
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      strands.forEach((strand) => {
        ctx.beginPath();
        ctx.lineWidth = strand.width;
        ctx.strokeStyle = strand.color;
        ctx.globalAlpha = opacity;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const baseHeight = height * 0.5;
        const mouseInfluence = (mouseY - baseHeight) * 0.2;

        for (let x = 0; x <= width; x += 8) {
          const wave =
            Math.sin(x * strand.freq + t * strand.speed + strand.offset) * strand.amp +
            Math.cos(x * 0.001 + t * 0.005) * 15;
          
          // Distance from mouse for interactive ripple
          const distToMouse = Math.abs(x - mouseX);
          const push = Math.exp(-Math.pow(distToMouse / 120, 2)) * mouseInfluence;

          const y = baseHeight + wave + push;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full transform-gpu ${className}`}
      style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
      aria-hidden="true"
    />
  );
}
