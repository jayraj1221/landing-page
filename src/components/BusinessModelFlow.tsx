'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Palette, Users, Sparkles, Smartphone, HeartHandshake, CircleDollarSign, ArrowRight } from 'lucide-react';

interface Stage {
  number: string;
  name: string;
  role: string;
  description: string;
  kpi: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function BusinessModelFlow() {
  const [activeStage, setActiveStage] = useState(0);

  const stages: Stage[] = [
    {
      number: '01',
      name: 'Raw Material Sourcing',
      role: 'UPSTREAM SUPPLY CHAIN',
      description: 'Bulk sourcing of organic Indian cotton and mercerized yarns directly from ethical domestic mills, bypassing retail markups.',
      kpi: '35% lower input cost vs retail yarn stores',
      icon: Package,
    },
    {
      number: '02',
      name: 'Creative Direction & Patterning',
      role: 'CENTRALIZED DESIGN IP',
      description: 'Founder Tisha Vaghasiya engineers proprietary stitch blueprints and photo-translation algorithms ensuring anatomical perfection.',
      kpi: '100+ standardized amigurumi templates in library',
      icon: Palette,
    },
    {
      number: '03',
      name: 'Decentralized Artisan Guild',
      role: 'DISTRIBUTED PRODUCTION',
      description: 'Yarn kits dispatched to verified home-based women artisans. Fair piece-rate wages distributed digitally, providing dignified financial independence.',
      kpi: 'Flexible work-from-home model for rural women',
      icon: Users,
    },
    {
      number: '04',
      name: 'Curated Luxury Finishing',
      role: 'QUALITY CONTROL & BRANDING',
      description: 'Finished pieces arrive at Kalapriti hub for rigorous inspection, loop-tag attachment, and eco-friendly gift box presentation.',
      kpi: '100% QA check before seal closure',
      icon: Sparkles,
    },
    {
      number: '05',
      name: 'DTC Social Commerce & Stall QR',
      role: 'LOW-CAC ACQUISITION',
      description: 'Exhibition QR activations, Instagram reels, and word-of-mouth generate high intent inbound commission leads without paid ad burn.',
      kpi: '85% organic inbound referral share',
      icon: Smartphone,
    },
    {
      number: '06',
      name: 'Emotional Customer Experience',
      role: 'CLIENT INTIMACY',
      description: 'Clients receive progress previews during making. Emotional unboxing reactions drive organic user-generated content and repeat orders.',
      kpi: '42% repeat purchase or referral rate within 6 months',
      icon: HeartHandshake,
    },
    {
      number: '07',
      name: 'High-Margin Revenue & Reinvestment',
      role: 'SUSTAINABLE CAPITAL FLYWHEEL',
      description: 'Prepaid cash flow model generates positive working capital, funding artisan training scholarships and seasonal collections.',
      kpi: 'Zero debt, self-sustaining unit economics',
      icon: CircleDollarSign,
    },
  ];

  return (
    <section id="business-model" className="relative py-24 sm:py-32 bg-parchment-50 overflow-hidden border-t border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
              The Value Chain Flywheel
            </span>
            <h2 className="mt-3 font-editorial-heading text-4xl sm:text-6xl text-espresso-900 leading-[1.05] font-light">
              THE KALAPRITI
              <br />
              <span className="italic text-terracotta-dark">BUSINESS MODEL</span> FLOW.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-espresso-700 font-light leading-relaxed">
              How Kalapriti bridges decentralized craft production with direct-to-consumer luxury retail.
            </p>
          </motion.div>
        </div>

        {/* 7-Step Horizontal / Responsive Interactive Chain */}
        <div className="space-y-6">
          {/* Stage Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-parchment-300">
            {stages.map((stage, idx) => (
              <button
                key={stage.number}
                onClick={() => setActiveStage(idx)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 ${
                  activeStage === idx
                    ? 'bg-espresso-900 text-white shadow-sm'
                    : 'bg-parchment-100 text-espresso-700 hover:bg-parchment-200 border border-parchment-300'
                }`}
              >
                <span className="text-[10px] text-terracotta">{stage.number}</span>
                <span>{stage.name}</span>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed Card */}
          <div className="p-8 sm:p-12 rounded-[32px] bg-parchment-100 border border-parchment-300 shadow-soft-lift grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-terracotta tracking-widest uppercase">
                  Stage {stages[activeStage].number} of 07
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-espresso-600">
                  {stages[activeStage].role}
                </span>
              </div>

              <h3 className="font-editorial-heading text-3xl sm:text-4xl font-medium text-espresso-900">
                {stages[activeStage].name}
              </h3>

              <p className="text-base text-espresso-700 font-light leading-relaxed">
                {stages[activeStage].description}
              </p>

              <div className="pt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-parchment-200 border border-parchment-300 text-xs font-medium text-espresso-800">
                <span className="h-2 w-2 rounded-full bg-sage" />
                <strong>Key Performance Driver:</strong> {stages[activeStage].kpi}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-parchment-300 text-center space-y-4 shadow-sm">
              <div className="h-16 w-16 rounded-2xl bg-terracotta/15 flex items-center justify-center text-terracotta">
                {React.createElement(stages[activeStage].icon, { className: 'h-8 w-8' })}
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-espresso-600 font-semibold">Step Status</p>
                <p className="font-editorial-heading text-xl font-bold text-espresso-900">Active Pipeline</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                  disabled={activeStage === 0}
                  className="px-3 py-1.5 rounded-lg border border-parchment-300 text-xs disabled:opacity-30 hover:bg-parchment-100"
                >
                  Prev
                </button>
                <button
                  onClick={() => setActiveStage((prev) => Math.min(stages.length - 1, prev + 1))}
                  disabled={activeStage === stages.length - 1}
                  className="px-3 py-1.5 rounded-lg bg-terracotta text-white text-xs disabled:opacity-30 hover:bg-terracotta-dark"
                >
                  Next Stage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
