'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Sparkles, MessageCircle, X } from 'lucide-react';
import SmoothImage from './SmoothImage';

interface FloatingStallDockProps {
  onOpenOrderModal: () => void;
}

export default function FloatingStallDock({ onOpenOrderModal }: FloatingStallDockProps) {
  const [showDock, setShowDock] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show once scrolled past 400px
      if (window.scrollY > 400 && !dismissed) {
        setShowDock(true);
      } else {
        setShowDock(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {showDock && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 25 }}
          className="fixed bottom-4 inset-x-4 max-w-md mx-auto z-40 sm:bottom-6"
        >
          <div className="relative rounded-full bg-espresso-900/90 backdrop-blur-md text-white p-2 pl-3.5 pr-2.5 shadow-2xl border border-white/15 flex items-center justify-between gap-3 transform-gpu">
            {/* Stall Presence Indicator */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative h-9 w-9 rounded-full overflow-hidden border border-white/20 bg-white flex-shrink-0">
                <SmoothImage
                  src="/assets/logo.jpg"
                  alt="Kalapriti"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <span className="text-[11px] font-semibold text-parchment-100 truncate">
                    Kalapriti Stall
                  </span>
                </div>
                <span className="text-[9px] text-parchment-300 truncate">
                  Loops of Love
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <a
                href="https://www.instagram.com/kalapriti_/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 px-3 rounded-full bg-white/15 hover:bg-white/25 border border-white/10 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white transition-colors"
                aria-label="Follow Kalapriti on Instagram"
              >
                <Instagram className="h-3 w-3 text-coral-light" />
                <span>Follow</span>
              </a>

              <button
                onClick={onOpenOrderModal}
                className="h-8 px-3.5 rounded-full bg-gradient-to-r from-terracotta to-coral hover:opacity-95 text-white flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider shadow-sm transition-transform active:scale-95"
                aria-label="Custom Order Inquiry"
              >
                <Sparkles className="h-3 w-3" />
                <span>Inquire</span>
              </button>

              {/* Gentle Dismiss button */}
              <button
                onClick={() => setDismissed(true)}
                className="h-7 w-7 rounded-full text-parchment-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Dismiss quick dock"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
