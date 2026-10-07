'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCrochetCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth lagging spring physics for trailing yarn tip
  const springX = useSpring(mouseX, { stiffness: 350, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 350, damping: 28 });

  const yarnTailX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const yarnTailY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    // Disable on touch devices to preserve pristine mobile performance
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('button') ||
          target.closest('a') ||
          target.closest('[role="button"]') ||
          target.closest('input') ||
          target.closest('textarea'))
      ) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Trailing Yarn Strand */}
      <motion.div
        style={{
          x: yarnTailX,
          y: yarnTailY,
        }}
        className="absolute -top-1 -left-1 h-3 w-3 rounded-full bg-terracotta/40 blur-[1px] transition-transform duration-75"
      />

      {/* Main Crochet Hook Tip */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHoveringClickable ? 1.35 : 1,
          rotate: isHoveringClickable ? -20 : -10,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="absolute -top-3 -left-3 flex items-center justify-center select-none"
      >
        <span className="text-xl filter drop-shadow-[0_2px_4px_rgba(217,119,82,0.3)]">
          {isHoveringClickable ? '🧶' : '🪡'}
        </span>
      </motion.div>
    </div>
  );
}
