'use client';

import React from 'react';
import Image from 'next/image';
import SmoothImage from './SmoothImage';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Quote, ArrowRight } from 'lucide-react';

export default function StoryIntro() {
  const journeySteps = [
    { label: 'Yarn', icon: '🧶', desc: 'Pure natural cotton' },
    { label: 'Hands', icon: '🤲', desc: 'Patient human touch' },
    { label: 'Craft', icon: '🪡', desc: 'Loop by loop devotion' },
    { label: 'Emotion', icon: '✨', desc: 'Memories that endure' },
    { label: 'Kalapriti', icon: '🤍', desc: 'Loops of love' },
  ];

  return (
    <section id="story" className="relative py-24 sm:py-32 bg-parchment-50 overflow-hidden border-t border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story Copy strictly from brief */}
          <div className="lg:col-span-7 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-parchment-200 border border-parchment-300 text-terracotta-dark text-xs uppercase tracking-widest font-semibold mb-3">
                <Sparkles className="h-3.5 w-3.5 text-terracotta" />
                The Kalapriti Story
              </div>
              <h2 className="font-editorial-heading text-4xl sm:text-6xl text-espresso-900 leading-[1.08] font-light">
                How Kalapriti <span className="italic font-normal text-terracotta">Began.</span>
              </h2>
            </motion.div>

            {/* Exact Paragraphs from description.txt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-4 text-espresso-800 text-base sm:text-lg font-light leading-relaxed"
            >
              <p>
                <strong className="font-semibold text-espresso-900">Kalapriti</strong> was born from a simple love for handmade art — the belief that something made by hand carries a feeling that mass-produced products cannot replace.
              </p>
              <p>
                What started with yarn, a crochet hook, and countless little loops grew into a world of handmade dolls, flowers, idols, keychains, gifts, and personalized creations.
              </p>
              <p>
                Every Kalapriti creation is made patiently, thoughtfully, and with love — because a handmade gift is not just a product; it becomes a memory.
              </p>
              <p className="font-normal text-espresso-900">
                From one special gift to bulk orders and celebrations, Kalapriti brings creativity from our hands to your heart.
              </p>
            </motion.div>

            {/* Visual Timeline Flow from brief: Yarn → Hands → Craft → Emotion → Kalapriti */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="pt-6 border-t border-parchment-300"
            >
              <span className="text-[11px] uppercase tracking-widest font-bold text-terracotta block mb-3">
                The Creative Journey:
              </span>
              <div className="grid grid-cols-5 gap-2 sm:gap-3 text-center">
                {journeySteps.map((step, idx) => (
                  <div
                    key={step.label}
                    className="p-2 sm:p-3 rounded-2xl bg-parchment-100 border border-parchment-200 flex flex-col items-center justify-between shadow-xs hover:border-terracotta/40 transition-colors"
                  >
                    <span className="text-xl sm:text-2xl mb-1">{step.icon}</span>
                    <span className="text-xs sm:text-sm font-editorial-heading font-semibold text-espresso-900">
                      {step.label}
                    </span>
                    <span className="hidden sm:inline-block text-[10px] text-espresso-600 mt-0.5">
                      {step.desc}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Founder Note */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="p-5 rounded-2xl bg-parchment-100 border-l-4 border-terracotta flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-espresso-600 font-semibold">Founder & Creator</p>
                <p className="font-editorial-heading text-lg font-semibold text-espresso-900">Tisha Vaghasiya</p>
              </div>
              <span className="font-handwritten text-xl text-terracotta font-medium">
                कलाप्रिति • Loops of Love
              </span>
            </motion.div>
          </div>

          {/* Right Column: Layered Handcrafted Photography */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px 60px 0px' }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-parchment-200"
            >
              <SmoothImage
                src="/assets/custom-grandparents.jpg"
                alt="Kalapriti Handcrafted Custom Keepsake - Three Generations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-xs uppercase tracking-widest text-terracotta-light font-semibold">
                  Personalized Keepsake
                </span>
                <p className="font-editorial-heading text-2xl font-light mt-1">
                  Three Generations in Loops of Love
                </p>
                <p className="text-xs text-parchment-200 mt-1 max-w-sm">
                  Handcrafted from family memories into a timeless heirloom.
                </p>
              </div>
            </motion.div>

            {/* Overlapping secondary photo */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '0px 0px 60px 0px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="hidden sm:block absolute -bottom-8 -left-8 w-44 sm:w-52 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-parchment-200"
            >
              <SmoothImage
                src="/assets/bouquet-sunflower.jpg"
                alt="Handcrafted Sunflower Bouquet"
                fill
                className="object-cover"
                sizes="208px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-espresso-900/80 p-2 text-center">
                <p className="text-[10px] text-white font-medium uppercase tracking-wider">
                  Handmade Blooms
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
