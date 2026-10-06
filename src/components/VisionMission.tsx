'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Compass, Users } from 'lucide-react';

export default function VisionMission() {
  return (
    <section id="vision" className="relative py-20 sm:py-28 bg-parchment-100 overflow-hidden border-t border-parchment-300">
      {/* Subtle yarn thread line running across */}
      <div className="absolute top-0 left-0 right-0 h-10 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1200 40" fill="none" preserveAspectRatio="none">
          <path
            d="M 0,20 Q 300,38 600,10 T 1200,25"
            stroke="#D97752"
            strokeWidth="2"
            strokeDasharray="5 5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-parchment-200 border border-parchment-300 text-terracotta-dark text-xs uppercase tracking-widest font-semibold mb-3">
              <Sparkles className="h-3.5 w-3.5 text-terracotta" />
              Our Purpose & Heart
            </div>
            <h2 className="font-editorial-heading text-3xl sm:text-5xl font-light text-espresso-900 leading-tight">
              WEAVING MEANING INTO
              <br />
              <span className="italic text-terracotta-dark">EVERYDAY LIFE.</span>
            </h2>
            <p className="font-handwritten text-xl sm:text-2xl text-terracotta mt-2">
              कलाप्रिति • Loops of love, from hands to heart
            </p>
          </motion.div>
        </div>

        {/* Two Soft Cards: Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Card 1: Vision */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-10 rounded-[32px] bg-parchment-50 border-2 border-parchment-300 shadow-soft-lift hover:shadow-xl hover:border-terracotta/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Top decorative badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="h-12 w-12 rounded-2xl bg-terracotta/10 text-terracotta flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Compass className="h-6 w-6" />
              </div>
              <span className="px-3.5 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-terracotta/10 text-terracotta border border-terracotta/20">
                Our Vision
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="font-editorial-heading text-2xl sm:text-3xl font-medium text-espresso-900">
                Handmade Art in Everyday Life
              </h3>
              <p className="text-base sm:text-lg text-espresso-800 font-light leading-relaxed">
                To weave handmade art into everyday life through meaningful, personalized creations that connect hearts with creativity and craft.
              </p>
            </div>

            {/* Yarn Motif Accent */}
            <div className="mt-8 pt-4 border-t border-parchment-200 flex items-center gap-2 text-xs text-terracotta font-medium">
              <span>🧶</span>
              <span>Creativity • Craftsmanship • Emotion</span>
            </div>
          </motion.div>

          {/* Card 2: Mission */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="p-8 sm:p-10 rounded-[32px] bg-parchment-50 border-2 border-parchment-300 shadow-soft-lift hover:shadow-xl hover:border-sage/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Top decorative badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="h-12 w-12 rounded-2xl bg-sage/20 text-sage-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-6 w-6" />
              </div>
              <span className="px-3.5 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-sage/20 text-sage-dark border border-sage/30">
                Our Mission
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="font-editorial-heading text-2xl sm:text-3xl font-medium text-espresso-900">
                Thoughtful Craft & Artisan Love
              </h3>
              <p className="text-base sm:text-lg text-espresso-800 font-light leading-relaxed">
                To handcraft heartfelt crochet gifts with meticulous love, celebrating authentic artistry and empowering women artisans.
              </p>
            </div>

            {/* Yarn Motif Accent */}
            <div className="mt-8 pt-4 border-t border-parchment-200 flex items-center gap-2 text-xs text-sage-dark font-medium">
              <span>🪡</span>
              <span>Celebrating Handmade • Empowering Women</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
