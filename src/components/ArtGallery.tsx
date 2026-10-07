'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SmoothImage from './SmoothImage';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, X, Heart, ExternalLink } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
  colSpan: string;
  description: string;
  materials: string;
  hours: string;
}

interface ArtGalleryProps {
  onOpenOrderModal: (category?: string, details?: string) => void;
}

export default function ArtGallery({ onOpenOrderModal }: ArtGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      title: 'Sacred Jagannath Trinity Heirloom',
      category: 'Spiritual Amigurumi',
      image: '/assets/spiritual-jagannath.jpg',
      aspect: 'aspect-[4/5]',
      colSpan: 'lg:col-span-4',
      description:
        'Lord Jagannath, Balabhadra, and Subhadra intricately sculpted with micro-crochet crowns, sacred hand-embroidered lotus eyes, and ceremonial ornaments.',
      materials: 'Mercerized Cotton, Gold Metallic Lurex, Hypoallergenic Fiberfill',
      hours: '38 Crafting Hours',
    },
    {
      id: 'g-2',
      title: 'Father & Child Polaroid Portrait Doll',
      category: 'Custom Photo Keepsake',
      image: '/assets/custom-father-child.jpg',
      aspect: 'aspect-[4/5]',
      colSpan: 'lg:col-span-4',
      description:
        'A beloved memory brought to three-dimensional tactile life. Reconstructed directly from a nostalgic Polaroid photograph showing a father giving his child a piggyback ride.',
      materials: '100% Combed Cotton Yarn, Wire Armature, Bespoke Miniature Fabric',
      hours: '42 Crafting Hours',
    },
    {
      id: 'g-3',
      title: 'Baby Ganesha On Golden Lotus',
      category: 'Spiritual Amigurumi',
      image: '/assets/spiritual-ganesha.jpg',
      aspect: 'aspect-[4/5]',
      colSpan: 'lg:col-span-4',
      description:
        'Vighnaharta Ganesha in vibrant saffron pitambar seated upon an intricately sculpted multi-petaled golden lotus with handcrafted modak and pearl beads.',
      materials: 'Organic Milk Cotton, Seed Beads, Golden Zari Thread',
      hours: '28 Crafting Hours',
    },
    {
      id: 'g-4',
      title: 'Everlasting Sunflower Bloom & Bee',
      category: 'Everlasting Florals',
      image: '/assets/bouquet-sunflower.jpg',
      aspect: 'aspect-[1/1]',
      colSpan: 'lg:col-span-3',
      description:
        'Sunflowers that never wither. Handcrafted petals with textured seed disk, accompanied by a miniature bumblebee and authentic Kalapriti brand tag.',
      materials: 'Anti-Pilling Cotton Acrylic Blend, Florist Stems',
      hours: '14 Crafting Hours',
    },
    {
      id: 'g-5',
      title: 'Haute Couture Granny Square Tote',
      category: 'Luxury Fashion',
      image: '/assets/fashion-tote-bag.jpg',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      description:
        'Architectural black, cream, and olive granny squares joined seamlessly with reinforced double-crochet handles. Built for durable, high-fashion statement daily wear.',
      materials: 'Heavy Gauge Organic Cotton, Linen Reinforcement',
      hours: '32 Crafting Hours',
    },
    {
      id: 'g-6',
      title: 'Generations Mounted On Natural Wood',
      category: 'Custom Photo Keepsake',
      image: '/assets/custom-grandparents.jpg',
      aspect: 'aspect-[1/1]',
      colSpan: 'lg:col-span-3',
      description:
        'Grandparents holding their newborn grandchild, permanently mounted on a genuine polished timber slice as a treasured living room centerpiece.',
      materials: 'Micro-crochet Cotton, Polished Teakwood Slice, Non-Toxic Finish',
      hours: '50 Crafting Hours',
    },
    {
      id: 'g-7',
      title: 'Devotee Hanumanji with Sacred Gada',
      category: 'Spiritual Amigurumi',
      image: '/assets/spiritual-hanuman.jpg',
      aspect: 'aspect-[4/5]',
      colSpan: 'lg:col-span-3',
      description:
        'Sankat Mochan Hanumanji with hand-sculpted golden mace (gada), saffron tilak, and blessing gesture (abhayamudra).',
      materials: 'High-Twist Cotton, Metallic Gold Gada, Embellished Mukut',
      hours: '26 Crafting Hours',
    },
    {
      id: 'g-8',
      title: 'Pastel Blue & Lavender Lily Stem',
      category: 'Everlasting Florals',
      image: '/assets/bouquet-lily.jpg',
      aspect: 'aspect-[4/5]',
      colSpan: 'lg:col-span-3',
      description:
        'Delicate pastel lily bells in ombre hues, ideal for eco-friendly wedding bouquets, housewarmings, and permanent table decor.',
      materials: 'Soft Pastel Cotton, Flexible Wire Stems',
      hours: '18 Crafting Hours',
    },
    {
      id: 'g-9',
      title: 'Hello Baby Heirloom Romper Set',
      category: 'Organic Babywear',
      image: '/assets/baby-romper-1.jpg',
      aspect: 'aspect-[4/5]',
      colSpan: 'lg:col-span-3',
      description:
        'Breathable, ultra-gentle ribbed baby romper with natural wooden buttons and hand-embroidered bear bonnet. Zero synthetics, completely safe for newborn skin.',
      materials: '100% GOTS-Certified Organic Baby Cotton',
      hours: '22 Crafting Hours',
    },
    {
      id: 'g-10',
      title: 'Beloved Pet Memorial Doll',
      category: 'Custom Photo Keepsake',
      image: '/assets/custom-pet-dog.jpg',
      aspect: 'aspect-[4/5]',
      colSpan: 'lg:col-span-3',
      description:
        'Custom tribute to a four-legged family member, capturing distinct ear folds, fur color gradients, and crowned with a delicate flower ring.',
      materials: 'Textured Brushed Cotton, Safety Glass Eyes',
      hours: '24 Crafting Hours',
    },
  ];

  return (
    <section id="collections" className="relative py-24 sm:py-32 bg-parchment-100 overflow-hidden border-t border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
              The Curated Archive
            </span>
            <h2 className="mt-3 font-editorial-heading text-4xl sm:text-6xl text-espresso-900 leading-[1.05] font-light">
              MADE BY HAND.
              <br />
              <span className="italic text-terracotta-dark">DEFINED BY DETAIL.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-espresso-700 font-light leading-relaxed">
              Explore the craftsmanship of Kalapriti. Every piece is an original human creation
              imbued with hundreds of careful stitches, emotional resonance, and permanent durability.
            </p>
          </motion.div>
        </div>

        {/* Masonry / Magazine Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px 80px 0px' }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
              onClick={() => setSelectedItem(item)}
              className={`${item.colSpan} group cursor-pointer relative rounded-3xl overflow-hidden bg-parchment-200 border-2 border-white shadow-tactile transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 transform-gpu`}
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                <SmoothImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/80 via-espresso-900/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white pointer-events-none">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                      {item.category}
                    </span>
                    <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="h-4 w-4" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-parchment-300 font-medium">
                      {item.hours}
                    </span>
                    <h3 className="font-editorial-heading text-xl sm:text-2xl font-normal leading-snug mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Inspection Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-espresso-900/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl rounded-[32px] bg-parchment-50 overflow-hidden shadow-2xl border border-parchment-300 grid grid-cols-1 md:grid-cols-2 text-espresso-900"
            >
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-md text-espresso-800 hover:bg-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[4/5] md:aspect-auto md:h-full bg-parchment-200">
                <SmoothImage
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-terracotta/10 text-terracotta-dark border border-terracotta/20">
                    {selectedItem.category}
                  </span>
                  <h3 className="mt-3 font-editorial-heading text-2xl sm:text-3xl font-medium text-espresso-900 leading-tight">
                    {selectedItem.title}
                  </h3>
                  <p className="mt-3 text-sm text-espresso-700 font-light leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-parchment-200 text-xs">
                  <div>
                    <span className="font-semibold uppercase tracking-wider text-espresso-600 block">
                      Materials & Fiber:
                    </span>
                    <span className="text-espresso-800">{selectedItem.materials}</span>
                  </div>
                  <div>
                    <span className="font-semibold uppercase tracking-wider text-espresso-600 block">
                      Handcraft Labor:
                    </span>
                    <span className="text-espresso-800 font-medium">{selectedItem.hours}</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    onClick={() => {
                      const itemCat = selectedItem.category;
                      const itemTitle = selectedItem.title;
                      setSelectedItem(null);
                      onOpenOrderModal(itemCat, `Commission inquiry for: ${itemTitle}`);
                    }}
                    className="flex-1 py-3 rounded-xl bg-terracotta text-white text-xs font-semibold uppercase tracking-wider hover:bg-terracotta-dark transition-colors shadow-sm"
                  >
                    Commission Similar Piece
                  </button>
                  <a
                    href="https://instagram.com/kalapriti_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-parchment-300 hover:bg-parchment-200 text-espresso-800 transition-colors"
                    title="View on Instagram"
                  >
                    <ExternalLink className="h-4 w-4 text-terracotta" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
