'use client';

import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, Eye, Sparkles } from 'lucide-react';
import { triggerHaptic } from '@/utils/haptics';
import { proceduralAudio } from '@/utils/proceduralAudio';

interface StitchMagnifierLoupeProps {
  imageSrc: string;
  alt: string;
  zoomLevel?: number;
  lensSize?: number;
  className?: string;
  caption?: string;
}

export default function StitchMagnifierLoupe({
  imageSrc,
  alt,
  zoomLevel = 2.5,
  lensSize = 140,
  className = '',
  caption = '100% Hand-Hooked Yarn Weave',
}: StitchMagnifierLoupeProps) {
  const [isActive, setIsActive] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [bgPos, setBgPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const lastHapticTime = useRef(0);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      if (
        clientX < rect.left ||
        clientX > rect.right ||
        clientY < rect.top ||
        clientY > rect.bottom
      ) {
        setIsActive(false);
        return;
      }

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      setLensPos({ x, y });

      const bgX = (x / rect.width) * 100;
      const bgY = (y / rect.height) * 100;
      setBgPos({ x: bgX, y: bgY });

      // Throttle haptic & sound feedback
      const now = Date.now();
      if (now - lastHapticTime.current > 120) {
        lastHapticTime.current = now;
        triggerHaptic('selection');
        proceduralAudio.playYarnGlide();
      }
    },
    []
  );

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsActive(true);
    triggerHaptic('light');
    proceduralAudio.playWoodenHookClick(1.2);
    handlePointerMove(e);
  };

  const handlePointerLeave = () => {
    setIsActive(false);
  };

  return (
    <div
      ref={containerRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative overflow-hidden cursor-crosshair select-none group rounded-2xl ${className}`}
    >
      {/* Base Image */}
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        loading="lazy"
        draggable={false}
      />

      {/* Floating Macro Inspection Badge */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-parchment-100/90 backdrop-blur-md border border-parchment-300 text-espresso-800 text-xs shadow-sm transition-opacity group-hover:opacity-90">
        <ZoomIn className="w-3.5 h-3.5 text-terracotta animate-pulse" />
        <span className="font-medium text-[11px] tracking-wide">Macro Stitch Loupe</span>
      </div>

      {/* Magnifier Lens Loupe */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              left: `${lensPos.x - lensSize / 2}px`,
              top: `${lensPos.y - lensSize / 2}px`,
              width: `${lensSize}px`,
              height: `${lensSize}px`,
              pointerEvents: 'none',
              zIndex: 30,
            }}
            className="rounded-full shadow-2xl border-2 border-terracotta/80 overflow-hidden ring-4 ring-parchment-100/60"
          >
            {/* Magnified Image Background */}
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
                backgroundSize: `${zoomLevel * 100}%`,
                backgroundRepeat: 'no-repeat',
              }}
            />

            {/* Subtle Artisanal Thread Grid Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #000 1px, transparent 1px), radial-gradient(circle, #D97752 1px, transparent 1px)',
                backgroundSize: '8px 8px',
                backgroundPosition: '0 0, 4px 4px',
              }}
            />

            {/* Brass Crosshair Center Indicator */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-3 h-3 rounded-full border border-terracotta/60" />
            </div>

            {/* Lens Bottom Micro Caption */}
            <div className="absolute bottom-1 inset-x-0 text-center">
              <span className="text-[9px] uppercase tracking-wider font-semibold text-parchment-100 bg-espresso-900/80 px-2 py-0.5 rounded-full backdrop-blur-sm shadow-sm">
                {caption}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
