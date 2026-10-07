'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SmoothImage from './SmoothImage';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Check, ArrowRight, Eye } from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  categoryKey: string;
  image: string;
  description: string;
  highlights: string[];
}

interface ProductCategoriesProps {
  onOpenOrderModal: (category?: string, details?: string) => void;
}

export default function ProductCategories({ onOpenOrderModal }: ProductCategoriesProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);

  const categoriesList = [
    { key: 'all', label: 'All Creations' },
    { key: 'dolls', label: 'Crochet Dolls' },
    { key: 'flowers', label: 'Flowers & Bouquets' },
    { key: 'idols', label: 'Crochet Idols' },
    { key: 'accessories', label: 'Keychains & Accessories' },
    { key: 'baby', label: 'Baby Collection' },
    { key: 'festive', label: 'Festive & Gifting' },
  ];

  const products: ProductItem[] = [
    {
      id: 'p-1',
      name: 'Customized Couple & Portrait Dolls',
      category: 'Crochet Dolls',
      categoryKey: 'dolls',
      image: '/assets/custom-father-child.jpg',
      description: 'Customized couple dolls, character dolls, and personalized family portrait dolls crafted from your treasured photographs.',
      highlights: ['Custom attire & hairstyle matching', 'Mounted on natural timber or free-standing', '100% personalized keepsake'],
    },
    {
      id: 'p-2',
      name: 'Handmade Flowers & Everlasting Bouquets',
      category: 'Crochet Flowers & Bouquets',
      categoryKey: 'flowers',
      image: '/assets/bouquet-sunflower.jpg',
      description: 'Handmade sunflowers, lilies, and bouquets for gifting and special celebrations that never wilt, fade, or lose their charm.',
      highlights: ['Everlasting bloom durability', 'Bendable florist wire stems', 'Comes with mini hand-crocheted bee'],
    },
    {
      id: 'p-3',
      name: 'Lord Jagannath Trinity Idols',
      category: 'Crochet Idols',
      categoryKey: 'idols',
      image: '/assets/spiritual-jagannath.jpg',
      description: 'Handcrafted spiritual & decorative idols including Jagannath Trinity, Hanumanji, and Radha-Krishna creations.',
      highlights: ['Intricate micro-crochet mukuts (crowns)', 'Auspicious home altar decor', 'Soft premium cotton yarn'],
    },
    {
      id: 'p-4',
      name: 'Baby Ganesha On Golden Lotus',
      category: 'Crochet Idols',
      categoryKey: 'idols',
      image: '/assets/spiritual-ganesha.jpg',
      description: 'Vighnaharta Ganesha in vibrant saffron pitambar seated upon an intricately sculpted multi-petaled lotus with modak.',
      highlights: ['Handmade with reverence', 'Non-toxic organic cotton', 'Cherished housewarming gift'],
    },
    {
      id: 'p-5',
      name: 'Cute Keychains & Small Crochet Accessories',
      category: 'Keychains & Accessories',
      categoryKey: 'accessories',
      image: '/assets/decor-parrot.jpg',
      description: 'Cute personalized keychains, hanging bag charms, and small crochet accessories made to brighten your everyday style.',
      highlights: ['Durable high-twist stitching', 'Customizable color combinations', 'Ideal for return gifts & favors'],
    },
    {
      id: 'p-6',
      name: 'Hello Baby Organic Booties & Rompers',
      category: 'Baby Collection',
      categoryKey: 'baby',
      image: '/assets/baby-romper-1.jpg',
      description: 'Ultra-gentle baby booties, rompers, bonnets, and handmade nursery items designed safely for delicate newborn skin.',
      highlights: ['100% skin-friendly organic cotton', 'Natural non-toxic wood buttons', 'Thoughtful baby shower heirloom'],
    },
    {
      id: 'p-7',
      name: 'Celestial Nursery Crib Mobile',
      category: 'Baby Collection',
      categoryKey: 'baby',
      image: '/assets/baby-mobile.jpg',
      description: 'Handcrafted stars, clouds, and gentle animals suspended to create a dreamy nursery sanctuary for newborns.',
      highlights: ['Calm pastel nursery colors', 'Zero plastic synthetic edges', 'Handcrafted with motherly love'],
    },
    {
      id: 'p-8',
      name: 'Festive Hampers & Personalized Gifting',
      category: 'Festive & Gifting',
      categoryKey: 'festive',
      image: '/assets/spiritual-radha-krishna.jpg',
      description: 'Handmade Rakhis, festive products, celebration hampers, corporate gifting sets, and customized bulk orders.',
      highlights: ['Bespoke packaging available', 'Personalized greeting tags', 'Bulk orders accepted for festivities'],
    },
  ];

  const filtered = selectedFilter === 'all'
    ? products
    : products.filter((p) => p.categoryKey === selectedFilter);

  return (
    <section id="creations" className="relative py-24 sm:py-32 bg-parchment-100 overflow-hidden border-t border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading strictly from brief */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-parchment-200 border border-parchment-300 text-terracotta-dark text-xs uppercase tracking-widest font-semibold mb-3">
              <Sparkles className="h-3.5 w-3.5 text-terracotta" />
              Handcrafted Product Highlights
            </div>
            <h2 className="font-editorial-heading text-4xl sm:text-6xl text-espresso-900 leading-[1.05] font-light">
              A LITTLE OF WHAT
              <br />
              <span className="italic text-terracotta-dark">WE CREATE.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-espresso-700 font-light leading-relaxed">
              From personalized character dolls to spiritual idols and everlasting bouquets,
              every creation carries the patience and heart of human hands.
            </p>
          </motion.div>
        </div>

        {/* Custom Orders Available Banner (from brief requirement) */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-peach/30 border border-terracotta/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-9 w-9 rounded-xl bg-terracotta text-white flex items-center justify-center text-lg shadow-sm">
              ✨
            </span>
            <div>
              <p className="text-sm font-semibold text-espresso-900">
                Custom Orders Available
              </p>
              <p className="text-xs text-espresso-700">
                Have a unique design or photo in mind? We customize size, colors, attire, and details just for you.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenOrderModal()}
            className="px-5 py-2.5 rounded-full bg-terracotta text-white text-xs font-semibold uppercase tracking-wider hover:bg-terracotta-dark shadow-sm transition-all whitespace-nowrap"
          >
            Custom Inquiry
          </button>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 no-scrollbar border-b border-parchment-300 mb-10">
          {categoriesList.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedFilter(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedFilter === cat.key
                  ? 'bg-espresso-900 text-white shadow-sm'
                  : 'bg-parchment-50 text-espresso-700 hover:bg-parchment-200 border border-parchment-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Clean 2-column mobile grid / 4-column desktop grid (from brief) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px 60px 0px' }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.08 }}
              onClick={() => setActiveProduct(item)}
              className="group cursor-pointer rounded-3xl bg-parchment-50 border border-parchment-300 overflow-hidden shadow-soft-lift hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-parchment-200">
                <SmoothImage
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-espresso-900/80 backdrop-blur-md text-white">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-espresso-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-white/90 text-espresso-900 flex items-center justify-center shadow-lg">
                    <Eye className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-editorial-heading text-base sm:text-lg font-semibold text-espresso-900 leading-snug line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-espresso-600 line-clamp-2 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-parchment-200 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-medium text-terracotta">
                    Custom Made
                  </span>
                  <span className="text-[11px] font-semibold text-espresso-800 group-hover:text-terracotta flex items-center gap-1">
                    Details <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Inspection & Inquiry Lightbox Modal */}
      <AnimatePresence>
        {activeProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProduct(null)}
              className="fixed inset-0 bg-espresso-900/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-[32px] bg-parchment-50 overflow-hidden shadow-2xl border border-parchment-300 grid grid-cols-1 md:grid-cols-2 text-espresso-900"
            >
              <div className="relative aspect-[4/5] md:aspect-auto md:h-full bg-parchment-200">
                <SmoothImage
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-5">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-terracotta/10 text-terracotta-dark border border-terracotta/20">
                    {activeProduct.category}
                  </span>
                  <h3 className="mt-2 font-editorial-heading text-2xl font-semibold text-espresso-900">
                    {activeProduct.name}
                  </h3>
                  <p className="mt-2 text-sm text-espresso-700 font-light leading-relaxed">
                    {activeProduct.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    {activeProduct.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-espresso-800">
                        <Check className="h-3.5 w-3.5 text-sage-dark flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-parchment-200 space-y-3">
                  <button
                    onClick={() => {
                      const itemCat = activeProduct.category;
                      const itemName = activeProduct.name;
                      setActiveProduct(null);
                      onOpenOrderModal(itemCat, `Inquiry about: ${itemName}`);
                    }}
                    className="w-full py-3 rounded-xl bg-terracotta text-white text-xs font-semibold uppercase tracking-wider hover:bg-terracotta-dark transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <Sparkles className="h-4 w-4" /> Request Custom Creation
                  </button>
                  <button
                    onClick={() => setActiveProduct(null)}
                    className="w-full py-2.5 rounded-xl border border-parchment-300 text-espresso-700 text-xs font-medium hover:bg-parchment-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
