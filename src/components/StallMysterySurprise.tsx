'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Gift, Instagram, Check, Heart, ArrowRight, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { triggerHaptic } from '@/utils/haptics';
import { proceduralAudio } from '@/utils/proceduralAudio';
import { shareOrCopy } from '@/utils/webShare';
import { useToast } from './ModernToast';

interface StallMysterySurpriseProps {
  onOpenOrderModal: (category?: string, details?: string) => void;
}

export default function StallMysterySurprise({ onOpenOrderModal }: StallMysterySurpriseProps) {
  const [unraveled, setUnraveled] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const { showToast } = useToast();

  const handlePullThread = () => {
    if (unraveled) return;
    setIsPulling(true);
    triggerHaptic('medium');
    proceduralAudio.playYarnGlide();

    setTimeout(() => {
      setUnraveled(true);
      setIsPulling(false);
      triggerHaptic('celebration');
      proceduralAudio.playCraftChime(987.77);
      showToast('Stall Perk Unlocked! 🎉', 'Show code STALL-PERK for your free Daisy Charm', 'sparkle');
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#D97752', '#8B9E6E', '#F07073', '#DE9B26', '#187787'],
        });
      } catch {
        // Fallback gracefully
      }
    }, 700);
  };

  return (
    <div className="relative rounded-[36px] bg-gradient-to-br from-parchment-100 via-parchment-200 to-parchment-300 border-2 border-dashed border-terracotta/40 p-8 sm:p-12 overflow-hidden shadow-soft-lift my-12">
      {/* Handcrafted Stitch Accent */}
      <div className="washi-tape-tab" />

      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-terracotta/20 text-terracotta text-xs font-semibold uppercase tracking-wider">
          <Gift className="h-3.5 w-3.5" />
          Exhibition Stall Visitor Exclusive
        </div>

        <h3 className="font-editorial-heading text-3xl sm:text-5xl font-light text-espresso-900 leading-tight">
          PULL A THREAD FOR A <span className="italic text-terracotta font-normal">STALL SURPRISE.</span>
        </h3>

        <p className="text-sm sm:text-base text-espresso-700 font-light max-w-xl mx-auto">
          Scanning right from our college stall? Give the golden yarn ball a gentle pull to reveal an exhibition-only keepsake perk!
        </p>

        {/* Interactive Thread Pull Stage */}
        <div className="py-6 flex flex-col items-center justify-center">
          {!unraveled ? (
            <motion.div
              animate={{
                scale: isPulling ? [1, 1.15, 0.9, 1.1] : [1, 1.04, 1],
                rotate: isPulling ? [0, -10, 10, -5, 0] : [0, 2, -2, 0],
              }}
              transition={{
                duration: isPulling ? 0.7 : 4,
                repeat: isPulling ? 0 : Infinity,
                ease: 'easeInOut',
              }}
              onClick={handlePullThread}
              className="cursor-pointer group flex flex-col items-center select-none"
              role="button"
              tabIndex={0}
              aria-label="Pull the yarn thread"
            >
              {/* Yarn Ball Mascot Visual */}
              <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-terracotta via-coral to-terracotta-dark shadow-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                <span className="filter drop-shadow-md">🧶</span>
                {/* Dangling thread */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                  className="absolute -bottom-8 flex flex-col items-center"
                >
                  <div className="w-1 h-8 bg-terracotta rounded-full shadow" />
                  <span className="text-xs font-bold text-terracotta bg-white px-2 py-0.5 rounded-full shadow-md border border-terracotta/20">
                    PULL ME ↓
                  </span>
                </motion.div>
              </div>

              <span className="mt-12 text-xs font-semibold text-terracotta tracking-wider uppercase group-hover:underline">
                {isPulling ? 'Unspooling the loops...' : 'Tap the yarn to unravel your perk'}
              </span>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 260 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-terracotta/30 shadow-xl max-w-lg w-full text-left space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-terracotta font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="h-4 w-4" />
                  <span>Stall Perk Unlocked!</span>
                </div>
                <span className="craft-stamp px-2.5 py-0.5 text-[9px] font-bold text-sage-dark border-sage-dark">
                  Verified Stall Visitor
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1">
                <p className="font-editorial-heading text-lg font-bold text-espresso-900 leading-tight">
                  🌸 Complimentary Hand-Crocheted Daisy Charm + Custom Tag
                </p>
                <p className="text-xs text-espresso-700">
                  Show this screen to Tisha at the stall counter or mention <strong className="text-terracotta">"STALL-PERK"</strong> in your WhatsApp inquiry to claim with any custom order!
                </p>
              </div>

              <p className="font-handwritten text-lg text-terracotta italic text-center">
                “Every loop holds human warmth that no machine will ever copy.” — Tisha ♡
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <button
                  onClick={async () => {
                    triggerHaptic('medium');
                    const res = await shareOrCopy({
                      title: 'Kalapriti Exhibition Stall Perk Unlocked!',
                      text: 'I just unlocked a complimentary hand-crocheted Daisy Charm perk at the Kalapriti exhibition stall! Use code STALL-PERK',
                      url: window.location.href,
                    });
                    if (res.result === 'shared') {
                      showToast('Perk shared with friends!', undefined, 'share');
                    } else if (res.result === 'copied') {
                      showToast('Perk code copied to clipboard!', undefined, 'share');
                    }
                  }}
                  className="p-3 rounded-full border border-parchment-300 hover:bg-parchment-200 text-espresso-700 transition-colors flex items-center justify-center"
                  title="Share Stall Perk"
                  aria-label="Share Stall Perk"
                >
                  <Share2 className="h-4 w-4 text-terracotta" />
                </button>

                <button
                  onClick={() => {
                    triggerHaptic('light');
                    proceduralAudio.playWoodenHookClick();
                    onOpenOrderModal(
                      'Stall Exhibition Perk',
                      'Claimed Stall Visitor Perk: Complimentary Hand-Crocheted Daisy Charm (Code: STALL-PERK)'
                    );
                  }}
                  className="flex-1 py-3 px-4 rounded-full bg-terracotta text-white font-semibold text-xs uppercase tracking-wider hover:bg-terracotta-dark transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Claim Perk With Tisha</span>
                </button>

                <a
                  href="https://www.instagram.com/kalapriti_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => triggerHaptic('light')}
                  className="py-3 px-5 rounded-full bg-parchment-200 hover:bg-parchment-300 text-espresso-800 font-semibold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Instagram className="h-3.5 w-3.5 text-coral" />
                  <span>Follow @kalapriti_</span>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
