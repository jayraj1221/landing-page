'use client';

import React from 'react';
import Image from 'next/image';
import SmoothImage from './SmoothImage';
import { motion } from 'framer-motion';
import { Leaf, RefreshCw, Feather, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function ModernSustainability() {
  const pillars = [
    {
      icon: Feather,
      title: 'Zero Industrial Emissions',
      desc: 'Crochet requires no smokestacks, no steam boilers, and zero electrical runtime during fabrication. Just human focus, a small steel hook, and pure fiber.',
    },
    {
      icon: RefreshCw,
      title: 'Zero Cut-Waste Philosophy',
      desc: 'In conventional garment sewing, 15% of fabric is cut and discarded as scraps. In crochet, exactly zero thread is wasted—the yarn strand is worked continuously to completion.',
    },
    {
      icon: Leaf,
      title: 'Biodegradable Natural Yarns',
      desc: 'We prioritize 100% natural Indian cotton and bamboo fibers that naturally decompose back into the earth, preventing microplastic ocean runoff.',
    },
    {
      icon: HeartHandshake,
      title: 'Multi-Decade Longevity',
      desc: 'Because high-density crochet knots do not unravel when snagged, each piece survives decades of handling, directly opposing the disposable fast-fashion crisis.',
    },
  ];

  return (
    <section id="sustainability" className="relative py-24 sm:py-32 bg-parchment-50 overflow-hidden border-t border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 border border-sage/30 text-sage-dark text-xs uppercase tracking-widest font-semibold mb-3">
                <Leaf className="h-3.5 w-3.5" />
                Conscious Craft & Sustainability
              </div>
              <h2 className="font-editorial-heading text-4xl sm:text-6xl text-espresso-900 leading-[1.05] font-light">
                CRAFT THAT
                <br />
                <span className="italic text-terracotta">SLOWS DOWN.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-espresso-700 font-light leading-relaxed">
                In a world drowning in synthetic polyester fast-fashion and landfill waste,
                Kalapriti stands as an uncompromising counter-weight. We champion intentional,
                zero-waste handmade items crafted to endure for generations.
              </p>
            </motion.div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-parchment-100 border border-parchment-300 space-y-2.5"
                  >
                    <div className="h-9 w-9 rounded-xl bg-sage/20 text-sage-dark flex items-center justify-center">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-editorial-heading text-lg font-semibold text-espresso-900">
                      {p.title}
                    </h3>
                    <p className="text-xs text-espresso-700 font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Image Composition: Baby Romper & Natural Wood elements */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-parchment-200 transform-gpu">
              <SmoothImage
                src="/assets/baby-romper-2.jpg"
                alt="Kalapriti 100% Organic Cotton Baby Romper with wooden buttons"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-widest text-sage-light font-medium">
                  Zero Synthetic Touch
                </span>
                <p className="font-editorial-heading text-2xl font-light mt-1">
                  Gentle on Skin, Gentle on Earth
                </p>
                <p className="text-xs text-parchment-200 mt-1">
                  Pure combed Indian cotton, hand-finished with non-toxic botanical dyes and sustainably sourced wooden trims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
