'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Sunset, Moon, Sparkles } from 'lucide-react';

export type AtmosphereMode = 'daylight' | 'golden' | 'fairylights';

export default function AtelierAtmosphereToggle() {
  const [mode, setMode] = useState<AtmosphereMode>('daylight');

  useEffect(() => {
    // Apply atmospheric classes or CSS variables to document root
    const root = document.documentElement;
    if (mode === 'golden') {
      root.style.setProperty('--background', '#F9EFE6');
      root.style.setProperty('--foreground', '#241610');
    } else if (mode === 'fairylights') {
      root.style.setProperty('--background', '#1F1714');
      root.style.setProperty('--foreground', '#FDFBF7');
    } else {
      root.style.setProperty('--background', '#FDFBF7');
      root.style.setProperty('--foreground', '#261B16');
    }
  }, [mode]);

  return (
    <>
      {/* Fairy Lights Garland (Visible when 'fairylights' or 'golden' active) */}
      {(mode === 'fairylights' || mode === 'golden') && (
        <div
          aria-hidden="true"
          className="fixed top-0 inset-x-0 h-10 pointer-events-none z-50 overflow-hidden flex items-start justify-between px-4 sm:px-12"
        >
          {/* Wire */}
          <div className="absolute top-2 inset-x-0 h-px bg-amber-900/40" />

          {/* Twinkling Bulbs */}
          {[...Array(14)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.55, 1, 0.6],
                scale: [0.9, 1.15, 0.95],
              }}
              transition={{
                duration: 1.6 + (i % 5) * 0.4,
                repeat: Infinity,
                delay: i * 0.18,
                ease: 'easeInOut',
              }}
              className="relative flex flex-col items-center"
            >
              <div className="w-1 h-2 bg-amber-800" />
              <div
                className="w-3 h-3.5 rounded-full shadow-[0_0_12px_#F59E0B]"
                style={{
                  backgroundColor: i % 2 === 0 ? '#FBBF24' : '#F472B6',
                }}
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Floating Atmosphere Controller Pill */}
      <div className="fixed top-20 right-4 sm:right-8 z-40">
        <div className="flex items-center gap-1 p-1 rounded-full bg-white/90 backdrop-blur-md border border-parchment-300 shadow-lg text-xs">
          <button
            onClick={() => setMode('daylight')}
            className={`p-1.5 rounded-full transition-all ${
              mode === 'daylight'
                ? 'bg-amber-100 text-amber-800 shadow-sm scale-110'
                : 'text-espresso-600 hover:text-espresso-900'
            }`}
            title="Daylight Atelier"
          >
            <Sun className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={() => setMode('golden')}
            className={`p-1.5 rounded-full transition-all ${
              mode === 'golden'
                ? 'bg-amber-500 text-white shadow-sm scale-110'
                : 'text-espresso-600 hover:text-espresso-900'
            }`}
            title="Golden Hour Amber"
          >
            <Sunset className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={() => setMode('fairylights')}
            className={`p-1.5 rounded-full transition-all ${
              mode === 'fairylights'
                ? 'bg-espresso-900 text-amber-300 shadow-sm scale-110'
                : 'text-espresso-600 hover:text-espresso-900'
            }`}
            title="Stall Fairy Lights"
          >
            <Moon className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </>
  );
}
