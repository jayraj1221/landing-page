'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles, Instagram, Heart, DoorOpen, Compass } from 'lucide-react';
import InteractiveThreadCanvas from './InteractiveThreadCanvas';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export default function Hero({ onOpenOrderModal }: HeroProps) {
  const [doorOpen, setDoorOpen] = useState(false);

  return (
    <section
      id="welcome"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-10 px-4 sm:px-6 lg:px-8 bg-tactile-pattern"
    >
      {/* Background Thread Waves Animation */}
      <InteractiveThreadCanvas opacity={0.3} />

      {/* Ambient warm glows */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-peach/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 h-96 w-96 rounded-full bg-sage/20 blur-3xl pointer-events-none" />

      {/* Top Friendly Context Bar */}
      <div className="max-w-7xl mx-auto w-full pt-2">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-between gap-3 border-b border-parchment-300/80 pb-3 text-xs"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parchment-200/80 border border-parchment-300 text-espresso-800 font-medium">
            <span className="h-2 w-2 rounded-full bg-terracotta animate-pulse" />
            <span className="uppercase tracking-wider text-[11px] font-semibold text-terracotta-dark">
              College Exhibition Stall Experience
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-medium text-espresso-600 tracking-wider">
            <span className="hidden sm:inline">FOUNDER: TISHA VAGHASIYA</span>
            <span className="hidden sm:inline">•</span>
            <span>100% HANDMADE IN INDIA</span>
            <span>•</span>
            <a
              href="https://www.instagram.com/kalapriti_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta hover:text-terracotta-dark font-semibold transition-colors"
            >
              @KALAPRITI_
            </a>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Stage */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Emblem, Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Prominent Logo Presentation - Not a tiny icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-4 sm:gap-6"
            >
              <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-3xl overflow-hidden border-2 border-terracotta/30 shadow-tactile ring-4 ring-terracotta/10 bg-white flex-shrink-0 group hover:scale-105 transition-transform duration-300">
                <Image
                  src="/assets/logo.jpg"
                  alt="Kalapriti Handcrafted Brand Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-handwritten text-xl sm:text-2xl md:text-3xl text-terracotta leading-tight">
                  कलाप्रिति • Loops of love
                </span>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-espresso-600 mt-1">
                  Handcrafted Crochet & Personalized Gifting
                </span>
              </div>
            </motion.div>

            {/* Exact Headline Copy from brief */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <h1 className="font-editorial-heading text-4xl sm:text-6xl xl:text-7xl font-normal tracking-tight text-espresso-900 leading-[1.05]">
                WELCOME TO <span className="text-terracotta-dark">KALAPRITI</span>
              </h1>
              <p className="font-handwritten text-2xl sm:text-3xl md:text-4xl text-terracotta mt-2 sm:mt-3 leading-snug">
                “loops of love, from hands to heart”
              </p>
            </motion.div>

            {/* Story Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-base sm:text-lg text-espresso-700 max-w-xl font-light leading-relaxed"
            >
              Step into our tiny handmade world where yarn balls, crochet hooks, and craft elements come alive.
              Every Kalapriti creation is hand-stitched patiently, thoughtfully, and with love — because a handmade gift isn’t just a product; it becomes a cherished memory.
            </motion.p>

            {/* Brand Pillars (Warm, Craft-focused, No business numbers) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-1 max-w-lg"
            >
              <div className="p-3.5 rounded-2xl bg-parchment-100/90 border border-parchment-300">
                <p className="text-[10px] uppercase tracking-wider text-terracotta font-semibold">100% Pure</p>
                <p className="font-editorial-heading text-sm sm:text-base font-semibold text-espresso-900">Hand-Hooked</p>
                <p className="text-[11px] text-espresso-600 mt-0.5">Zero machine stitch</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-parchment-100/90 border border-parchment-300">
                <p className="text-[10px] uppercase tracking-wider text-sage-dark font-semibold">Bespoke</p>
                <p className="font-editorial-heading text-sm sm:text-base font-semibold text-espresso-900">Custom Made</p>
                <p className="text-[11px] text-espresso-600 mt-0.5">Photo to 3D keepsake</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-parchment-100/90 border border-parchment-300">
                <p className="text-[10px] uppercase tracking-wider text-espresso-700 font-semibold">Conscious</p>
                <p className="font-editorial-heading text-sm sm:text-base font-semibold text-espresso-900">Natural Cotton</p>
                <p className="text-[11px] text-espresso-600 mt-0.5">Eco-friendly & durable</p>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#magic-door"
                onClick={() => setDoorOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-terracotta text-white font-medium text-xs uppercase tracking-widest shadow-md hover:bg-terracotta-dark transition-all duration-300 hover:shadow-glow-terracotta"
              >
                <Sparkles className="h-4 w-4" />
                <span>Come Inside ↓</span>
              </a>

              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-parchment-200 border border-parchment-300 text-espresso-800 font-medium text-xs uppercase tracking-widest hover:bg-parchment-300 transition-colors"
              >
                <Heart className="h-4 w-4 text-terracotta" />
                <span>Custom Order Inquiry</span>
              </button>

              <a
                href="https://www.instagram.com/kalapriti_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-espresso-700 hover:text-terracotta text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Instagram className="h-4 w-4 text-coral" />
                <span>@kalapriti_</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: The Magic Door Scene (Interactive Handmade World) */}
          <div className="lg:col-span-5 relative flex justify-center" id="magic-door">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative w-full max-w-md aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-parchment-100 via-parchment-200 to-parchment-300 p-6 flex flex-col justify-between items-center text-center select-none"
            >
              {/* Magic Door Header */}
              <div className="w-full flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/80 backdrop-blur-md text-terracotta border border-terracotta/20">
                  Interactive Door
                </span>
                <span className="text-[11px] text-espresso-600 font-medium italic font-serif">
                  Tap door to open ✦
                </span>
              </div>

              {/* The Door Visual Stage */}
              <div
                onClick={() => setDoorOpen(!doorOpen)}
                className="relative w-64 h-80 my-auto cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Background Interior Glow (Visible when door opens) */}
                <div className="absolute inset-x-4 inset-y-2 rounded-t-full bg-gradient-to-b from-amber-100 via-peach/40 to-terracotta/30 shadow-inner flex flex-col items-center justify-center p-4 overflow-hidden border-2 border-dashed border-terracotta/30">
                  <div className="relative w-36 h-36 rounded-2xl overflow-hidden shadow-md mb-2">
                    <Image
                      src="/assets/spiritual-jagannath.jpg"
                      alt="Kalapriti Amigurumi Creations"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-editorial-heading text-sm font-semibold text-espresso-900 leading-tight">
                    Welcome to Kalapriti World!
                  </span>
                  <span className="text-[10px] text-espresso-700 font-medium">
                    Handmade with endless love ♡
                  </span>
                </div>

                {/* Left Door Leaf */}
                <motion.div
                  animate={{ rotateY: doorOpen ? -75 : 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: 'left center' }}
                  className="absolute inset-y-0 left-0 w-1/2 rounded-tl-full bg-[#E8DAC8] border-2 border-[#8B5A3E]/40 shadow-xl flex flex-col justify-center items-end pr-2 overflow-hidden"
                >
                  {/* Wood & Craft Texture details */}
                  <div className="w-full h-full p-2 flex flex-col justify-between items-start opacity-70">
                    <div className="w-6 h-6 rounded-full border border-terracotta/40 mt-12 ml-2" />
                    <div className="w-4 h-12 border-r border-[#8B5A3E]/30 mr-2" />
                    <div className="w-full border-t border-[#8B5A3E]/30 mb-6" />
                  </div>
                  {/* Door Handle */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-2 rounded-full bg-terracotta-dark shadow" />
                </motion.div>

                {/* Right Door Leaf */}
                <motion.div
                  animate={{ rotateY: doorOpen ? 75 : 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: 'right center' }}
                  className="absolute inset-y-0 right-0 w-1/2 rounded-tr-full bg-[#E5D7C5] border-2 border-[#8B5A3E]/40 shadow-xl flex flex-col justify-center items-start pl-2 overflow-hidden"
                >
                  <div className="w-full h-full p-2 flex flex-col justify-between items-end opacity-70">
                    <div className="w-6 h-6 rounded-full border border-sage/40 mt-12 mr-2" />
                    <div className="w-4 h-12 border-l border-[#8B5A3E]/30 ml-2" />
                    <div className="w-full border-t border-[#8B5A3E]/30 mb-6" />
                  </div>
                  {/* Door Handle */}
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-2 rounded-full bg-terracotta-dark shadow" />
                </motion.div>

                {/* Door Frame Wreath with Crochet Flowers */}
                <div className="absolute -top-3 inset-x-8 h-8 flex items-center justify-center gap-1.5 pointer-events-none">
                  <span className="h-5 w-5 rounded-full bg-peach flex items-center justify-center text-[10px] shadow">🌸</span>
                  <span className="h-6 w-6 rounded-full bg-terracotta text-white flex items-center justify-center text-[11px] shadow">🧵</span>
                  <span className="h-5 w-5 rounded-full bg-sage flex items-center justify-center text-[10px] shadow">🌼</span>
                </div>
              </div>

              {/* Cute Yarn Character 1 (Left - Waving Little Yarn Ball) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
                className="absolute bottom-4 left-3 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-lg border border-parchment-200 flex items-center gap-2 max-w-[155px]"
              >
                <div className="w-8 h-8 rounded-full bg-peach-dark flex items-center justify-center text-white text-base shadow flex-shrink-0 animate-bounce">
                  🧶
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[10px] font-bold text-espresso-900">Yarny Waves!</p>
                  <p className="text-[9px] text-terracotta font-medium">"Welcome friend!"</p>
                </div>
              </motion.div>

              {/* Cute Yarn Character 2 (Right - Little Crochet Hook Character) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut', delay: 0.3 }}
                className="absolute bottom-4 right-3 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-lg border border-parchment-200 flex items-center gap-2 max-w-[155px]"
              >
                <div className="w-8 h-8 rounded-full bg-sage-dark flex items-center justify-center text-white text-base shadow flex-shrink-0 animate-pulse">
                  🪡
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[10px] font-bold text-espresso-900">Hooked Joy</p>
                  <p className="text-[9px] text-sage-dark font-medium">"100% Handmade"</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Brief Tagline */}
      <div className="max-w-7xl mx-auto w-full pt-3 border-t border-parchment-300/80 flex flex-wrap items-center justify-between text-xs text-espresso-600">
        <a
          href="#vision"
          className="inline-flex items-center gap-2 text-espresso-700 hover:text-terracotta transition-colors group"
        >
          <ArrowDown className="h-4 w-4 animate-bounce text-terracotta" />
          <span className="uppercase tracking-widest font-semibold text-[11px]">
            Scroll to explore the handmade story
          </span>
        </a>

        <div className="flex items-center gap-2">
          <Heart className="h-3.5 w-3.5 text-terracotta fill-terracotta" />
          <span className="font-serif italic text-espresso-800">
            “loops of love, from hands to heart”
          </span>
        </div>
      </div>
    </section>
  );
}
