'use client';

import React from 'react';
import Image from 'next/image';
import SmoothImage from './SmoothImage';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Sparkles, Infinity, Fingerprint } from 'lucide-react';

export default function WhatIsCrochet() {
  const cards = [
    {
      icon: Cpu,
      title: 'Machine-Defying Geometry',
      subtitle: 'The Automation Paradox',
      description:
        'Unlike knitting, which is mass-produced on industrial flatbed machines, true crochet CANNOT be replicated by machines. Every genuine crochet piece in the world is 100% handmade by human hands.',
      badge: 'Un-Automatable',
    },
    {
      icon: Infinity,
      title: 'A Single Live Loop',
      subtitle: 'Sculptural Micro-Stitching',
      description:
        'Using a single slender hook and one continuous thread, the artisan builds 3D amigurumi volumes, granny square architecture, and intricate spiritual adornments one stitch at a time.',
      badge: 'Infinite Form',
    },
    {
      icon: Fingerprint,
      title: 'Artisan DNA in Every Knot',
      subtitle: 'Heirloom Uniqueness',
      description:
        'No two loops carry identical tension. Each creator imparts their unique biological rhythm into the fiber, transforming raw cotton into an unforgeable, tactile work of art.',
      badge: 'Irreplaceable',
    },
  ];

  return (
    <section id="craft" className="relative py-24 sm:py-32 bg-parchment-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
              The Fundamental Craft
            </span>
            <h2 className="mt-3 font-editorial-heading text-4xl sm:text-6xl text-espresso-900 leading-[1.05] font-light">
              ONE CONTINUOUS THREAD.
              <br />
              <span className="italic text-terracotta-dark">ENDLESS SCULPTURAL</span> POSSIBILITIES.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-espresso-700 font-light leading-relaxed">
              Crochet (derived from the French word <em>croc</em>, meaning hook) is not merely a textile technique.
              In an age of AI and mechanical speed, it stands as one of the last remaining purely handmade human frontiers.
            </p>
          </motion.div>
        </div>

        {/* 3 Pillars Grid with Editorial Visual */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 3 Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="p-6 sm:p-7 rounded-3xl bg-parchment-100 border border-parchment-300 hover:border-terracotta/40 transition-all hover:shadow-soft-lift group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-parchment-200 flex items-center justify-center text-terracotta group-hover:bg-terracotta group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-espresso-600">
                          {card.subtitle}
                        </span>
                        <h3 className="text-lg sm:text-xl font-editorial-heading font-semibold text-espresso-900">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-parchment-200 text-espresso-700 border border-parchment-300">
                      {card.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-espresso-700 font-light leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Editorial Image: Haute Couture Granny Square Bag Closeup */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px 60px 0px' }}
              transition={{ duration: 0.8 }}
              className="relative h-full min-h-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-parchment-200"
            >
              <SmoothImage
                src="/assets/fashion-tote-bag.jpg"
                alt="Haute Couture Hand-Crocheted Designer Tote Bag with intricate geometric granny square motifs"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-terracotta-light font-medium">
                  Structural Mastery
                </span>
                <p className="font-editorial-heading text-2xl font-light mt-1">
                  Haute Couture Meets Heritage Weave
                </p>
                <p className="text-xs text-parchment-200 mt-1">
                  Every granny square is hand-blocked and joined seamlessly to form a durable, statement luxury silhouette.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
