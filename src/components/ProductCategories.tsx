'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  subtitle: string;
  headline: string;
  editorialCopy: string;
  image: string;
  highlights: string[];
  priceRange: string;
}

interface ProductCategoriesProps {
  onOpenOrderModal: () => void;
}

export default function ProductCategories({ onOpenOrderModal }: ProductCategoriesProps) {
  const categories: Category[] = [
    {
      id: 'spiritual',
      name: 'Spiritual Amigurumi',
      subtitle: 'SACRED DEVOTION',
      headline: 'Deities Reimagined with Pure Handcrafted Reverence',
      editorialCopy:
        'Bridging millennial Indian spiritual aesthetics with timeless devotion. Features our acclaimed Jagannath Trinity, Baby Ganesha with lotus pedestal, and Hanumanji with sacred gada. Ideal for modern temple altars and auspicious housewarmings.',
      image: '/assets/spiritual-jagannath.jpg',
      highlights: ['Intricate micro-crochet mukuts (crowns)', 'Hypoallergenic premium cotton yarn', 'Non-fade colorfast vegetable dyes'],
      priceRange: '₹1,899 – ₹4,499',
    },
    {
      id: 'keepsakes',
      name: 'Personalized Keepsakes',
      subtitle: 'EMOTIONAL HEIRLOOMS',
      headline: 'Turning Precious Memories into 3D Tactile Sculptures',
      editorialCopy:
        'Commissioned directly from your cherished photos. Whether it is a father giving his toddler a piggyback ride, grandparents holding a newborn on natural wood, or a loyal pet tribute, we craft your most sacred relationships into forever keepsakes.',
      image: '/assets/custom-father-child.jpg',
      highlights: ['Custom matching of attire & hairstyles', 'Optional natural polished timber mounting', 'Hand-stitched personal message tag'],
      priceRange: '₹2,499 – ₹5,999',
    },
    {
      id: 'botanicals',
      name: 'Everlasting Florals',
      subtitle: 'ETERNAL BLOOMS',
      headline: 'Bouquets that Never Wither, Fade, or Discard',
      editorialCopy:
        'A conscious, zero-waste alternative to fresh cut flowers that die in days. Our signature Sunflowers with handcrafted bumblebees, pastel lilies, and daisy sprays bring everlasting radiance to homes, desks, and bridal ceremonies.',
      image: '/assets/bouquet-sunflower.jpg',
      highlights: ['Zero watering or maintenance required', 'Durable bendable florist armature stems', 'Sustainable wedding & anniversary gifts'],
      priceRange: '₹1,299 – ₹2,999',
    },
    {
      id: 'fashion',
      name: 'Haute Wearables & Bags',
      subtitle: 'EDITORIAL SLOW FASHION',
      headline: 'Architectural Geometric Weaves for the Conscious Wardrobe',
      editorialCopy:
        'Statement luxury totes featuring precision granny squares, ribbed textures, and reinforced artisan handles. Each piece proves that traditional hand-hooking belongs in high-fashion editorial closets.',
      image: '/assets/fashion-tote-bag.jpg',
      highlights: ['High-tensile double-crochet handles', 'Spacious everyday tote proportions', 'Handmade in small batches'],
      priceRange: '₹2,199 – ₹4,299',
    },
    {
      id: 'nursery',
      name: 'Hello Baby Collection',
      subtitle: 'ORGANIC NEWBORN HEIRLOOMS',
      headline: 'Gentle, Pure Organic Cotton for the Littlest Humans',
      editorialCopy:
        'Ultra-soft ribbed rompers with polished wooden buttons, matching bear bonnets, and celestial nursery mobiles that sway gently above cribs. Designed with zero synthetic irritation for sensitive infant skin.',
      image: '/assets/baby-romper-1.jpg',
      highlights: ['100% GOTS-certified organic cotton', 'Natural non-toxic wood buttons', 'Cherished first-birthday gifts'],
      priceRange: '₹1,499 – ₹3,499',
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const current = categories[activeTab];

  return (
    <section id="lines" className="relative py-24 sm:py-32 bg-parchment-100 overflow-hidden border-t border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
              Editorial Product Spectrum
            </span>
            <h2 className="mt-3 font-editorial-heading text-4xl sm:text-6xl text-espresso-900 leading-[1.05] font-light">
              CURATED ARTISAN
              <br />
              <span className="italic text-terracotta-dark">COLLECTIONS.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-espresso-700 font-light leading-relaxed">
              Every category is conceived as an editorial fashion release, combining structural integrity with deeply personal emotional storytelling.
            </p>
          </motion.div>
        </div>

        {/* Minimal Editorial Category Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar border-b border-parchment-300 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap ${
                activeTab === idx
                  ? 'bg-espresso-900 text-white shadow-sm'
                  : 'bg-parchment-50 text-espresso-700 hover:bg-parchment-200 border border-parchment-300'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Big Editorial Split Feature */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-parchment-50 rounded-[36px] p-8 sm:p-12 border border-parchment-300 shadow-soft-lift"
          >
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-parchment-200">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-espresso-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] text-white uppercase tracking-wider font-medium">
                  {current.subtitle}
                </div>
              </div>
            </div>

            {/* Right Editorial Copy & Commission CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-terracotta">
                  {current.subtitle}
                </span>
                <h3 className="mt-1 font-editorial-heading text-3xl sm:text-4xl font-normal text-espresso-900 leading-snug">
                  {current.headline}
                </h3>
              </div>

              <p className="text-base text-espresso-700 font-light leading-relaxed">
                {current.editorialCopy}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 pt-2">
                {current.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5 text-xs text-espresso-800">
                    <span className="h-5 w-5 rounded-full bg-sage/20 text-sage-dark flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Price & Action */}
              <div className="pt-6 border-t border-parchment-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-espresso-600 block">
                    Commission Range
                  </span>
                  <span className="font-editorial-heading text-2xl font-bold text-espresso-900">
                    {current.priceRange}
                  </span>
                </div>

                <button
                  onClick={onOpenOrderModal}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-terracotta text-white text-xs font-semibold uppercase tracking-wider hover:bg-terracotta-dark shadow-sm transition-all hover:shadow-glow-terracotta"
                >
                  <Sparkles className="h-4 w-4" /> Commission in this Line
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
