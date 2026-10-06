'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, Award, ShieldAlert, Sparkles, PieChart, BarChart3, CheckCircle } from 'lucide-react';

export default function MbaBusinessSection() {
  const [activeTab, setActiveTab] = useState<'market' | 'economics' | 'moat'>('market');

  const marketMetrics = [
    {
      value: '$1.29T',
      label: 'Global Handicraft Market by 2032',
      detail: 'Growing from $752B at an 8.9% CAGR as consumers reject mass-produced plastic in favor of authentic human craft.',
      accent: 'text-terracotta',
    },
    {
      value: '$84B',
      label: 'Indian Personalized Gifting Sector',
      detail: 'Surging demand for non-perishable sentimental keepsakes (weddings, anniversaries, newborn milestones).',
      accent: 'text-sage-dark',
    },
    {
      value: '7M+',
      label: 'Indian Artisans (56% Women)',
      detail: 'Untapped decentralized home-based talent pool ready for organized aggregation, design direction, and fair wages.',
      accent: 'text-ochre',
    },
    {
      value: '68%+',
      label: 'Gross Profit Margin on DTC Commissions',
      detail: 'High emotional utility enables value-based pricing rather than cost-plus commoditization.',
      accent: 'text-terracotta-dark',
    },
  ];

  return (
    <section id="mba-strategy" className="relative py-24 sm:py-32 bg-parchment-200/60 overflow-hidden border-t border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terracotta/10 border border-terracotta/20 text-terracotta-dark text-xs uppercase tracking-widest font-semibold mb-3">
              <TrendingUp className="h-3.5 w-3.5" />
              MBA Capstone Business Strategy
            </div>
            <h2 className="font-editorial-heading text-4xl sm:text-6xl text-espresso-900 leading-[1.05] font-light">
              FROM HANDMADE CRAFT TO
              <br />
              <span className="italic text-terracotta-dark">SCALABLE MARKET</span> OPPORTUNITY.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-espresso-700 font-light leading-relaxed">
              Evaluating the structural unit economics, TAM/SAM/SOM market sizing, and competitive moats
              that position Kalapriti as a resilient, high-margin artisan brand.
            </p>
          </motion.div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-parchment-300 pb-4">
          <button
            onClick={() => setActiveTab('market')}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
              activeTab === 'market'
                ? 'bg-espresso-900 text-white shadow-sm'
                : 'bg-parchment-100 text-espresso-700 hover:bg-parchment-200'
            }`}
          >
            01. Market Sizing & Macro Trends
          </button>
          <button
            onClick={() => setActiveTab('economics')}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
              activeTab === 'economics'
                ? 'bg-espresso-900 text-white shadow-sm'
                : 'bg-parchment-100 text-espresso-700 hover:bg-parchment-200'
            }`}
          >
            02. Unit Economics & Pricing Power
          </button>
          <button
            onClick={() => setActiveTab('moat')}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
              activeTab === 'moat'
                ? 'bg-espresso-900 text-white shadow-sm'
                : 'bg-parchment-100 text-espresso-700 hover:bg-parchment-200'
            }`}
          >
            03. The Un-Copyable Competitive Moat
          </button>
        </div>

        {/* Tab Content 1: Market Sizing */}
        {activeTab === 'market' && (
          <div className="space-y-10">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketMetrics.map((m, idx) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-3xl p-6 bg-parchment-50 border border-parchment-300 shadow-soft-lift flex flex-col justify-between"
                >
                  <div>
                    <span className={`font-editorial-heading text-4xl sm:text-5xl font-bold ${m.accent}`}>
                      {m.value}
                    </span>
                    <h3 className="mt-2 text-sm uppercase tracking-wider font-semibold text-espresso-900">
                      {m.label}
                    </h3>
                  </div>
                  <p className="mt-4 text-xs text-espresso-600 font-light leading-relaxed border-t border-parchment-200 pt-3">
                    {m.detail}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Strategic Analysis Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div className="rounded-3xl p-8 bg-parchment-50 border border-parchment-300 shadow-soft-lift space-y-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-terracotta block">
                  MACRO SHIFT • CONSUMER BEHAVIOR
                </span>
                <h4 className="font-editorial-heading text-2xl font-semibold text-espresso-900">
                  The Rejection of "Fast Souvenirs"
                </h4>
                <p className="text-sm text-espresso-700 leading-relaxed font-light">
                  Modern urban consumers exhibit acute gifting fatigue with disposable merchandise.
                  A customized, hand-stitched doll of a child with their pet holds near-infinite emotional retention.
                  This shifts Kalapriti from an optional decorative expense to an indispensable personal treasure.
                </p>
                <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-parchment-100 border border-parchment-300">
                    <span className="font-semibold text-espresso-900 block">Mass Plastic Gift</span>
                    <span className="text-espresso-600">Thrown out or forgotten within 60 days</span>
                  </div>
                  <div className="p-3 rounded-xl bg-terracotta/10 border border-terracotta/20">
                    <span className="font-semibold text-terracotta-dark block">Kalapriti Heirloom</span>
                    <span className="text-espresso-700">Display life: 20+ years on living room mantel</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl p-8 bg-parchment-50 border border-parchment-300 shadow-soft-lift space-y-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-sage-dark block">
                  TAM / SAM / SOM DISCOVERY
                </span>
                <h4 className="font-editorial-heading text-2xl font-semibold text-espresso-900">
                  Addressable Market Capture
                </h4>
                <div className="space-y-3 text-xs text-espresso-700">
                  <div className="p-3 rounded-2xl bg-parchment-100 border border-parchment-300">
                    <strong className="text-espresso-900 block text-sm">TAM (Total Addressable Market): $84 Billion</strong>
                    Indian luxury gifting, wedding favors, spiritual iconography, and home decor.
                  </div>
                  <div className="p-3 rounded-2xl bg-parchment-100 border border-parchment-300">
                    <strong className="text-espresso-900 block text-sm">SAM (Serviceable Available Market): ₹3,200 Crores ($380M)</strong>
                    Urban Tier-1 and Tier-2 middle-to-high income households seeking bespoke artisan gifts.
                  </div>
                  <div className="p-3 rounded-2xl bg-parchment-100 border border-parchment-300">
                    <strong className="text-espresso-900 block text-sm">SOM (Serviceable Obtainable Market): ₹25–40 Crores ($3–5M)</strong>
                    Direct-to-consumer digital channels and exhibition activations captured by Kalapriti in years 1–3.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Unit Economics */}
        {activeTab === 'economics' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 rounded-3xl p-8 bg-parchment-50 border border-parchment-300 shadow-soft-lift space-y-6">
              <span className="text-[10px] uppercase tracking-widest font-bold text-terracotta block">
                UNIT ECONOMICS BREAKDOWN (REPRESENTATIVE COMMISSION)
              </span>
              <h3 className="font-editorial-heading text-3xl font-semibold text-espresso-900">
                Custom Portrait Doll (AOV: ₹3,200)
              </h3>

              {/* Progress Bar of Unit Economics */}
              <div className="space-y-3">
                <div className="h-6 w-full rounded-full bg-parchment-200 overflow-hidden flex text-[10px] font-bold text-white text-center leading-6">
                  <div style={{ width: '14%' }} className="bg-espresso-700" title="Raw Materials 14%">14% Mat</div>
                  <div style={{ width: '22%' }} className="bg-sage" title="Artisan Fair Wage 22%">22% Labor</div>
                  <div style={{ width: '10%' }} className="bg-ochre" title="Packaging & Ship 10%">10% Pack</div>
                  <div style={{ width: '54%' }} className="bg-terracotta" title="Net Contribution 54%">54% Net Margin</div>
                </div>
                <div className="flex flex-wrap items-center justify-between text-xs text-espresso-700">
                  <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-espresso-700" /> Materials: ₹450 (14%)</span>
                  <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-sage" /> Artisan Wage: ₹700 (22%)</span>
                  <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-ochre" /> Packaging: ₹320 (10%)</span>
                  <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-terracotta" /> Net Contribution: ₹1,730 (54%)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-parchment-100 border border-parchment-300 text-xs text-espresso-800 space-y-2">
                <p className="font-semibold text-espresso-900">Why These Margins Are Structurally Defensible:</p>
                <ul className="list-disc pl-5 space-y-1 text-espresso-700">
                  <li><strong>Zero Finished Goods Inventory:</strong> Every custom piece is made upon receiving a 50% prepayment. Zero working capital locked in unsellable stock.</li>
                  <li><strong>High Perceived Sentimental Value:</strong> Customers are paying for a sacred memory or wedding tribute, rendering the purchase virtually price-inelastic.</li>
                  <li><strong>Low Capital Expenditure (CapEx):</strong> No heavy factories or injection molding tooling required. Hooks and yarn are lightweight and infinitely flexible.</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl p-8 bg-parchment-50 border border-parchment-300 shadow-soft-lift space-y-5">
              <span className="text-[10px] uppercase tracking-widest font-bold text-sage-dark block">
                CATEGORY COMPARISON & GROSS MARGINS
              </span>
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-white border border-parchment-300 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-espresso-900 text-sm">Custom Portrait Dolls</h5>
                    <p className="text-[11px] text-espresso-600">AOV: ₹2,499 – ₹4,999</p>
                  </div>
                  <span className="font-editorial-heading text-lg font-bold text-terracotta">71% Margin</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-parchment-300 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-espresso-900 text-sm">Spiritual Amigurumi Idols</h5>
                    <p className="text-[11px] text-espresso-600">AOV: ₹1,899 – ₹3,499</p>
                  </div>
                  <span className="font-editorial-heading text-lg font-bold text-terracotta">66% Margin</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-parchment-300 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-espresso-900 text-sm">Everlasting Floral Bouquets</h5>
                    <p className="text-[11px] text-espresso-600">AOV: ₹1,299 – ₹2,799</p>
                  </div>
                  <span className="font-editorial-heading text-lg font-bold text-terracotta">64% Margin</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-parchment-300 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-espresso-900 text-sm">Haute Bags & Wearables</h5>
                    <p className="text-[11px] text-espresso-600">AOV: ₹2,199 – ₹3,999</p>
                  </div>
                  <span className="font-editorial-heading text-lg font-bold text-terracotta">68% Margin</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: Competitive Moat */}
        {activeTab === 'moat' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-parchment-50 border border-parchment-300 shadow-soft-lift space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-terracotta/15 flex items-center justify-center text-terracotta">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <h4 className="font-editorial-heading text-2xl font-semibold text-espresso-900">
                1. The Automation Immunity Moat
              </h4>
              <p className="text-sm text-espresso-700 leading-relaxed font-light">
                Industrial textile giants cannot buy a machine that knits crochet. Because every loop requires manual hand-tension and loop traversal, factory automation cannot undercut Kalapriti.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-parchment-50 border border-parchment-300 shadow-soft-lift space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-sage/20 flex items-center justify-center text-sage-dark">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="font-editorial-heading text-2xl font-semibold text-espresso-900">
                2. Decentralized Artisan Guild
              </h4>
              <p className="text-sm text-espresso-700 leading-relaxed font-light">
                India possesses millions of stay-at-home women with generational crochet aptitude. Kalapriti provides standardized patterns, raw yarn kits, quality control, and dignified work-from-home compensation.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-parchment-50 border border-parchment-300 shadow-soft-lift space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-ochre/20 flex items-center justify-center text-ochre-dark">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="font-editorial-heading text-2xl font-semibold text-espresso-900">
                3. High Switching Cost & Affinity
              </h4>
              <p className="text-sm text-espresso-700 leading-relaxed font-light">
                Clients form a deep bond with founder Tisha Vaghasiya during custom commission iterations. Once Kalapriti crafts a family's heirloom doll or bridal bouquet, they return for every subsequent life milestone.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
