'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Sparkles, TrendingUp, ShoppingBag, HeartHandshake, Compass } from 'lucide-react';

export default function GrowthOpportunity() {
  const horizons = [
    {
      icon: Globe,
      number: '01',
      title: 'Global NRI & Diaspora Exports',
      desc: 'High demand in the US, UK, and UAE for authentic Indian spiritual idols (Jagannath, Ganesha) and traditional wedding favors with 3x-4x export pricing power.',
      growth: '350% higher AOV in global diaspora markets',
    },
    {
      icon: HeartHandshake,
      number: '02',
      title: 'Decentralized Artisan Guild Scaling',
      desc: 'Onboarding 200+ trained rural women artisans across Gujarat and Maharashtra through standardized pattern kits, digital payments, and quality certification.',
      growth: 'Capacity expansion to 1,500 monthly custom commissions',
    },
    {
      icon: ShoppingBag,
      number: '03',
      title: 'Corporate & High-End Wedding Favors',
      desc: 'Bespoke corporate gifting suites for ESG-conscious enterprises and destination weddings seeking memorable, sustainable artisan souvenirs.',
      growth: 'B2B bulk orders with ₹5,00,000+ single contract value',
    },
    {
      icon: Compass,
      number: '04',
      title: 'Digital Creator Economy & DIY Kits',
      desc: 'Monetizing proprietary pattern blueprints, instructional masterclasses, and curated beginner yarn boxes for the global crafting community.',
      growth: 'Pure software-like gross margin (>85%) on digital pattern IP',
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-parchment-200/50 overflow-hidden border-t border-parchment-300">
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
              Strategic Horizons
            </span>
            <h2 className="mt-3 font-editorial-heading text-4xl sm:text-6xl text-espresso-900 leading-[1.05] font-light">
              FUTURE HORIZONS &
              <br />
              <span className="italic text-terracotta-dark">EXPANSION ENGINE.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-espresso-700 font-light leading-relaxed">
              Where Kalapriti expands next: scaling from a boutique craft studio into an internationally recognized luxury artisanal house.
            </p>
          </motion.div>
        </div>

        {/* Horizons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {horizons.map((h, idx) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="p-7 rounded-3xl bg-parchment-50 border border-parchment-300 shadow-soft-lift flex flex-col justify-between hover:border-terracotta/40 transition-all hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-editorial-heading text-2xl font-bold text-espresso-600 group-hover:text-terracotta transition-colors">
                      {h.number}
                    </span>
                    <div className="h-10 w-10 rounded-2xl bg-parchment-100 flex items-center justify-center text-terracotta group-hover:bg-terracotta group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-editorial-heading text-xl font-semibold text-espresso-900 leading-snug">
                    {h.title}
                  </h3>
                  <p className="mt-3 text-xs text-espresso-700 font-light leading-relaxed">
                    {h.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-parchment-200">
                  <span className="text-[11px] font-semibold text-terracotta-dark block">
                    {h.growth}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
