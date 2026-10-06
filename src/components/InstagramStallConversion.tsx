'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram, QrCode, Sparkles, Send, Heart, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface InstagramStallConversionProps {
  onOpenOrderModal: () => void;
}

export default function InstagramStallConversion({ onOpenOrderModal }: InstagramStallConversionProps) {
  const [unboxed, setUnboxed] = useState(false);

  const triggerMagicUnbox = () => {
    setUnboxed(true);
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.7 },
        colors: ['#D97752', '#8B9E6E', '#F07073', '#DE9B26', '#187787'],
      });
    } catch {
      // Confetti fallback
    }
  };

  return (
    <section id="stall-experience" className="relative py-24 sm:py-32 bg-parchment-100 overflow-hidden border-t border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] bg-gradient-to-br from-espresso-900 to-espresso-800 text-white p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle warm blobs */}
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-terracotta/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-sage/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Stall Visitor & Digital Community */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-terracotta-light text-xs uppercase tracking-widest font-semibold">
                <QrCode className="h-3.5 w-3.5" />
                Live Exhibition Stall Experience
              </div>

              <h2 className="font-editorial-heading text-4xl sm:text-6xl font-light leading-[1.05] text-white">
                WEAVING HEARTS,
                <br />
                <span className="italic text-terracotta-light">ONE LOOP AT A TIME.</span>
              </h2>

              <p className="text-base sm:text-lg text-parchment-200/90 font-light leading-relaxed max-w-xl">
                Scanning from our college exhibition stall? You are holding the gateway to Kalapriti.
                Follow our creative journey on Instagram, explore behind-the-scenes hand-hooking videos, or commission a one-of-a-kind keepsake directly with founder <strong className="font-semibold text-white">Tisha Vaghasiya</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://instagram.com/kalapriti_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-terracotta via-coral to-terracotta-dark text-white font-semibold text-xs uppercase tracking-widest shadow-lg hover:opacity-95 transition-all"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Follow @kalapriti_</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <button
                  onClick={onOpenOrderModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 border border-white/20 text-white font-semibold text-xs uppercase tracking-widest hover:bg-white/25 transition-colors"
                >
                  <Sparkles className="h-4 w-4 text-terracotta-light" />
                  <span>Custom Commission Inquiry</span>
                </button>
              </div>

              {/* Instagram Handle & Founder Credits */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-parchment-300">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <span>Direct DM Response within 2 hours</span>
                </div>
                <span>•</span>
                <span>Founder: Tisha Vaghasiya</span>
                <span>•</span>
                <span>Worldwide Shipping</span>
              </div>
            </div>

            {/* Right Column: Interactive Unboxing Experience */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 text-center space-y-6 shadow-xl relative">
                <div className="relative h-20 w-20 mx-auto rounded-full overflow-hidden border-2 border-white/40 shadow-md">
                  <Image
                    src="/assets/logo.jpg"
                    alt="Kalapriti Logo"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-editorial-heading text-2xl font-bold text-white">
                    {unboxed ? 'Welcome to Kalapriti Family!' : 'Tap the Magic Thread Box'}
                  </h3>
                  <p className="mt-1 text-xs text-parchment-200">
                    {unboxed
                      ? 'Exclusive exhibition visitor perk: Free personalized message tag with every order!'
                      : 'Interactive stall visitor surprise. Tap below to unveil your special artisan memory.'}
                  </p>
                </div>

                {!unboxed ? (
                  <button
                    onClick={triggerMagicUnbox}
                    className="w-full py-3.5 rounded-2xl bg-white text-espresso-900 font-semibold text-xs uppercase tracking-wider hover:bg-parchment-100 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Sparkles className="h-4 w-4 text-terracotta" />
                    <span>Unbox Magic Experience</span>
                  </button>
                ) : (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-terracotta/20 border border-terracotta/30 text-xs text-parchment-100 flex items-center gap-2 justify-center">
                      <CheckCircle2 className="h-4 w-4 text-terracotta-light" />
                      <span>Code: <strong>LOOPSOFLOVE</strong> (10% Off)</span>
                    </div>
                    <button
                      onClick={onOpenOrderModal}
                      className="w-full py-3 rounded-2xl bg-terracotta text-white font-semibold text-xs uppercase tracking-wider hover:bg-terracotta-dark transition-colors"
                    >
                      Redeem & Commission Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
