'use client';

import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ScrollThreadPath() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Modern CSS Scroll-Driven Top Header Thread Indicator */}
      <div
        aria-hidden="true"
        className="fixed top-0 inset-x-0 h-[3px] z-50 pointer-events-none bg-transparent"
      >
        <div className="scroll-driven-thread-indicator h-full w-full bg-gradient-to-r from-terracotta via-amber-400 to-coral shadow-[0_0_8px_rgba(217,119,82,0.6)]" />
      </div>

      {/* Living Vertical Thread on Desktop */}
      <div
        aria-hidden="true"
        className="fixed inset-y-0 right-2 sm:right-6 md:right-8 w-12 pointer-events-none z-30 hidden sm:flex flex-col items-center justify-between py-12"
      >
        {/* Background guideline */}
        <div className="absolute top-12 bottom-12 w-px bg-parchment-300/40" />

        {/* Living animated thread line */}
        <motion.div
          className="absolute top-12 w-0.5 bg-gradient-to-b from-terracotta via-coral to-terracotta-dark origin-top rounded-full shadow-[0_0_8px_rgba(217,119,82,0.4)]"
          style={{
            height: 'calc(100% - 96px)',
            scaleY: smoothProgress,
          }}
        />

        {/* Tiny Crochet Hook / Thread Needle Cursor at current scroll tip */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
          style={{
            top: useTransform(smoothProgress, [0, 1], ['48px', 'calc(100% - 64px)']),
          }}
        >
          <div className="relative group">
            <div className="h-6 w-6 rounded-full bg-parchment-50 border border-terracotta/40 shadow-md flex items-center justify-center text-xs text-terracotta animate-pulse">
              🪡
            </div>
            {/* Subtle trail sparkle */}
            <span className="absolute -top-1 -right-1 text-[9px] text-terracotta">✦</span>
          </div>
        </motion.div>
      </div>
    </>
  );
}
