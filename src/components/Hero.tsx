'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, TrendingUp, HeartHandshake } from 'lucide-react';
import InteractiveThreadCanvas from './InteractiveThreadCanvas';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export default function Hero({ onOpenOrderModal }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-tactile-pattern">
      {/* Background Thread Waves Animation */}
      <InteractiveThreadCanvas opacity={0.35} />

      {/* Ambient warm glows */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 h-96 w-96 rounded-full bg-sage/10 blur-3xl pointer-events-none" />

      {/* Top Editorial Eyebrow */}
      <div className="max-w-7xl mx-auto w-full pt-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-parchment-300/80 pb-4"
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-terracotta animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-espresso-700">
              MBA Capstone Presentation & Live Exhibition
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-espresso-600 tracking-wider">
            <span className="hidden sm:inline">FOUNDER: TISHA VAGHASIYA</span>
            <span className="hidden sm:inline">•</span>
            <span>HANDMADE IN INDIA</span>
            <span>•</span>
            <span className="text-terracotta font-semibold">@KALAPRITI_</span>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Stage */}
      <div className="max-w-7xl mx-auto w-full my-auto py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <span className="font-handwritten text-2xl sm:text-3xl text-terracotta block mb-2">
                कलाप्रिति • Loops of love, from hands to heart
              </span>
              <h1 className="font-editorial-heading text-5xl sm:text-7xl xl:text-8xl font-normal tracking-tight text-espresso-900 leading-[0.95]">
                ONE THREAD.
                <br />
                <span className="italic font-normal text-terracotta-dark">SACRED CRAFT.</span>
                <br />
                SCALABLE ENTERPRISE.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="text-base sm:text-lg text-espresso-700 max-w-xl font-light leading-relaxed"
            >
              Transforming traditional Indian crochet from a hobbyist craft into a high-margin,
              empowered direct-to-consumer artisanal enterprise. Weaving emotional memory, spiritual
              devotion, and sustainable slow fashion into timeless heirlooms.
            </motion.p>

            {/* Strategic Pillars Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="grid grid-cols-3 gap-3 pt-2 max-w-lg"
            >
              <div className="p-3 rounded-2xl bg-parchment-200/60 border border-parchment-300">
                <p className="text-[10px] uppercase tracking-widest text-espresso-600 font-semibold">CRAFT</p>
                <p className="font-editorial-heading text-base sm:text-lg font-semibold text-espresso-900">100% Handwoven</p>
                <p className="text-[11px] text-espresso-600">Pure zero-machine stitch</p>
              </div>
              <div className="p-3 rounded-2xl bg-parchment-200/60 border border-parchment-300">
                <p className="text-[10px] uppercase tracking-widest text-terracotta font-semibold">CULTURE</p>
                <p className="font-editorial-heading text-base sm:text-lg font-semibold text-espresso-900">Custom Keepsake</p>
                <p className="text-[11px] text-espresso-600">Polaroids to 3D dolls</p>
              </div>
              <div className="p-3 rounded-2xl bg-parchment-200/60 border border-parchment-300">
                <p className="text-[10px] uppercase tracking-widest text-sage-dark font-semibold">BUSINESS</p>
                <p className="font-editorial-heading text-base sm:text-lg font-semibold text-espresso-900">65%+ Margin</p>
                <p className="text-[11px] text-espresso-600">Zero dead inventory</p>
              </div>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-terracotta text-white font-medium text-xs uppercase tracking-widest shadow-md hover:bg-terracotta-dark transition-all duration-300 hover:shadow-glow-terracotta"
              >
                <Sparkles className="h-4 w-4" />
                <span>Commission Custom Memory</span>
              </button>

              <a
                href="#mba-strategy"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-parchment-200 border border-parchment-300 text-espresso-800 font-medium text-xs uppercase tracking-widest hover:bg-parchment-300 transition-colors"
              >
                <TrendingUp className="h-4 w-4 text-terracotta" />
                <span>Explore MBA Business Case</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Editorial Visual Composition */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="relative w-full max-w-md aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/80 bg-parchment-200"
            >
              {/* Primary Visual: Jagannath Trinity Dolls with intricate handmade crown */}
              <Image
                src="/assets/spiritual-jagannath.jpg"
                alt="Kalapriti Handcrafted Sacred Jagannath Trinity Amigurumi"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Editorial Badge Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-terracotta-light">
                  Spiritual Heirloom Series
                </span>
                <p className="font-editorial-heading text-2xl font-light mt-1">
                  The Jagannath Trinity
                </p>
                <p className="text-xs text-parchment-200/90 mt-1 line-clamp-2">
                  Hand-hooked with sacred micro-stitches, golden crown filigree, and authentic artisanal soul.
                </p>
              </div>

              {/* Floating Floating polaroid overlay for tactile depth */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-parchment-200 max-w-[150px] transform rotate-3 hover:rotate-0 transition-transform">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-1.5">
                  <Image
                    src="/assets/custom-father-child.jpg"
                    alt="Custom Father Child Portrait Doll"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[9px] font-bold text-espresso-900 uppercase tracking-wider text-center">
                  Photo to Doll
                </p>
                <p className="text-[8px] text-terracotta font-medium text-center">
                  100% Customization
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Exhibition Prompt */}
      <div className="max-w-7xl mx-auto w-full pt-4 border-t border-parchment-300/80 flex flex-wrap items-center justify-between text-xs text-espresso-600">
        <a
          href="#story"
          className="inline-flex items-center gap-2 text-espresso-700 hover:text-terracotta transition-colors group"
        >
          <ArrowDown className="h-4 w-4 animate-bounce text-terracotta" />
          <span className="uppercase tracking-widest font-semibold text-[11px]">
            Scroll to Experience the Story
          </span>
        </a>

        <div className="flex items-center gap-3">
          <HeartHandshake className="h-4 w-4 text-terracotta" />
          <span className="italic font-serif">
            "Loops of love, from hands to heart"
          </span>
        </div>
      </div>
    </section>
  );
}
