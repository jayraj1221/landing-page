'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles, Clock } from 'lucide-react';

interface Era {
  id: string;
  stage: string;
  title: string;
  era: string;
  description: string;
  businessImplication: string;
  image: string;
  tag: string;
}

export default function EvolutionTimeline() {
  const eras: Era[] = [
    {
      id: '01',
      stage: 'TRADITION',
      title: 'Matriarchal Heirloom & Delicate Lacework',
      era: '19th Century – Origins',
      description:
        'Crochet begins as an intimate domestic practice. Women hand-spun cotton and fine linen into delicate lace collar trims, alter cloths, and doilies passed down through generations.',
      businessImplication: 'Heirloom value established; techniques preserved through informal family apprenticeship.',
      image: '/assets/baby-mobile.jpg',
      tag: 'Heritage Roots',
    },
    {
      id: '02',
      stage: 'CRAFT',
      title: 'The Counter-Culture Granny Square',
      era: '1960s – 1970s',
      description:
        'Crochet emerges as a bold artistic statement of self-sufficiency. The colorful granny square becomes an icon of individuality, breaking away from sterile industrialized consumerism.',
      businessImplication: 'Crochet identified as the anti-factory textile medium of choice.',
      image: '/assets/fashion-tote-bag.jpg',
      tag: 'Artistic Rebellion',
    },
    {
      id: '03',
      stage: 'CULTURE',
      title: 'Amigurumi & Spiritual Devotion',
      era: '2000s – 2010s',
      description:
        'Japanese amigurumi (stuffed yarn sculpture) sweeps the globe. In India, artisans begin hand-sculpting sacred idols (Ganesha, Jagannath, Krishna), embedding faith into tactile fiber.',
      businessImplication: 'Shift from flat 2D textile to high-value 3D character sculpting and emotional connection.',
      image: '/assets/spiritual-ganesha.jpg',
      tag: 'Sacred Iconography',
    },
    {
      id: '04',
      stage: 'FASHION',
      title: 'High Luxury & Runway Domination',
      era: '2020 – 2024',
      description:
        'Major couture houses (Loewe, Jacquemus, Prada) send hand-crocheted garments down Paris and Milan runways. Handcrafted texture becomes the supreme signifier of authentic luxury.',
      businessImplication: 'Consumer perception shifts from "cheap homemade hobby" to "high-fashion artisanal luxury".',
      image: '/assets/bouquet-lily.jpg',
      tag: 'Couture Elevation',
    },
    {
      id: '05',
      stage: 'BUSINESS',
      title: 'DTC Personalization & Kalapriti Enterprise',
      era: '2025 – Present',
      description:
        'Direct-to-consumer social commerce allows brands like Kalapriti to bypass traditional wholesale middle-men. Personalized memorial dolls, bridal bouquets, and nursery sets command premium value-based pricing.',
      businessImplication: 'High gross margins (65%+), zero dead stock on made-to-order commissions, and direct customer intimacy.',
      image: '/assets/custom-father-child.jpg',
      tag: 'DTC Transformation',
    },
    {
      id: '06',
      stage: 'FUTURE MARKET',
      title: 'The Global Conscious Artisan Economy',
      era: '2026 & Beyond',
      description:
        'The global handmade craft market approaches $1.2 Trillion. Consumers reject AI-generated plastic uniformity in favor of human-made touch, ethical female artisan empowerment, and zero-waste slow fashion.',
      businessImplication: 'Scalable artisan aggregator networks bridging rural Indian craftswomen to affluent global buyers.',
      image: '/assets/spiritual-jagannath.jpg',
      tag: 'Market Expansion',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(4); // Default to current Business stage

  const currentEra = eras[activeIndex];

  return (
    <section id="evolution" className="relative py-24 sm:py-32 bg-parchment-200/50 overflow-hidden border-t border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
              <Clock className="h-3.5 w-3.5" /> Evolutionary Timeline
            </span>
            <h2 className="mt-2 font-editorial-heading text-4xl sm:text-6xl text-espresso-900 font-light leading-tight">
              FROM HEIRLOOM ROOTS TO
              <br />
              <span className="italic text-terracotta-dark">GLOBAL LUXURY</span> ENTERPRISE.
            </h2>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous Era"
              className="p-3 rounded-full border border-parchment-300 bg-white text-espresso-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-parchment-100 transition-colors shadow-sm"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <span className="text-xs uppercase tracking-widest font-semibold text-espresso-600 px-2">
              0{activeIndex + 1} / 0{eras.length}
            </span>
            <button
              onClick={() => setActiveIndex((prev) => Math.min(eras.length - 1, prev + 1))}
              disabled={activeIndex === eras.length - 1}
              aria-label="Next Era"
              className="p-3 rounded-full border border-parchment-300 bg-white text-espresso-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-parchment-100 transition-colors shadow-sm"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Stage Navigator Bar */}
        <div className="relative mb-12 pb-4 overflow-x-auto no-scrollbar border-b border-parchment-300">
          <div className="flex items-center gap-3 min-w-max">
            {eras.map((era, idx) => (
              <button
                key={era.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  idx === activeIndex
                    ? 'bg-espresso-900 text-white shadow-md'
                    : 'bg-parchment-100 text-espresso-700 hover:bg-parchment-200 border border-parchment-300'
                }`}
              >
                <span className={`text-[10px] ${idx === activeIndex ? 'text-terracotta-light' : 'text-espresso-600'}`}>
                  {era.id}
                </span>
                <span>{era.stage}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Stage Display Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentEra.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-parchment-50 rounded-[32px] p-8 sm:p-12 border border-parchment-300 shadow-soft-lift"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wider font-semibold bg-terracotta/10 text-terracotta-dark border border-terracotta/20">
                  {currentEra.era}
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold text-espresso-600">
                  {currentEra.tag}
                </span>
              </div>

              <h3 className="font-editorial-heading text-3xl sm:text-5xl font-medium text-espresso-900 leading-tight">
                {currentEra.title}
              </h3>

              <p className="text-base sm:text-lg text-espresso-700 font-light leading-relaxed">
                {currentEra.description}
              </p>

              {/* MBA Strategic Implication Highlight */}
              <div className="p-5 rounded-2xl bg-parchment-100 border-l-4 border-sage shadow-sm">
                <p className="text-[11px] uppercase tracking-wider font-bold text-sage-dark mb-1">
                  MBA Strategic Impact & Market Dynamics:
                </p>
                <p className="text-sm text-espresso-800 font-medium">
                  {currentEra.businessImplication}
                </p>
              </div>
            </div>

            {/* Right Editorial Photography */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/4.5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-parchment-200">
                <Image
                  src={currentEra.image}
                  alt={currentEra.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-espresso-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-white uppercase tracking-wider font-medium">
                  Era Exhibit {currentEra.id}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
