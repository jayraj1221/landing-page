'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Pin, Sparkles, Heart, RotateCcw } from 'lucide-react';

interface PolaroidNote {
  id: string;
  image: string;
  title: string;
  date: string;
  rotateDeg: number;
  frontTag: string;
  handwrittenBack: string;
  craftSecret: string;
}

const POLAROIDS: PolaroidNote[] = [
  {
    id: 'p-1',
    image: '/assets/spiritual-jagannath.jpg',
    title: 'Sacred Jagannath Trinity',
    date: 'Puri Darshan Collection • 2026',
    rotateDeg: -2.5,
    frontTag: 'Lord of the Universe',
    handwrittenBack:
      'Finished at 2:30 AM after three days of micro-hooking with gold zari thread. The sacred lotus eyes needed pure devotion to capture divine warmth. Blessed to create this.',
    craftSecret: '1.25mm hook • 38 crafting hours',
  },
  {
    id: 'p-2',
    image: '/assets/custom-father-child.jpg',
    title: 'Father & Child Polaroid Doll',
    date: 'Anniversary Keepsake • 2026',
    rotateDeg: 2,
    frontTag: 'Reconstructed from 1994 Photo',
    handwrittenBack:
      'The client sent me a faded polaroid of her father giving her a piggyback ride 30 years ago. When she opened the heirloom box, she cried tears of pure nostalgia.',
    craftSecret: 'Tailored armature • 42 crafting hours',
  },
  {
    id: 'p-3',
    image: '/assets/bouquet-sunflower.jpg',
    title: 'Everlasting Sunflower Bloom',
    date: 'First Bouquet Drop • 2026',
    rotateDeg: -1.8,
    frontTag: 'Never Withers or Wilts',
    handwrittenBack:
      'Why give flowers that die in 5 days? We crafted these golden petals so that every time you look at your bedside table, you remember the person who gifted it to you.',
    craftSecret: 'Popcorn stitch core • 14 crafting hours',
  },
  {
    id: 'p-4',
    image: '/assets/spiritual-ganesha.jpg',
    title: 'Baby Ganesha On Golden Lotus',
    date: 'Housewarming Blessing • 2026',
    rotateDeg: 2.8,
    frontTag: 'Auspicious Altar Keepsake',
    handwrittenBack:
      'Sculpted with joyful rounded cheeks, a tiny golden modak, and multi-layered lotus petals. Placed in a quiet home to bring sweet peace and prosperity.',
    craftSecret: 'Organic combed cotton • 28 crafting hours',
  },
];

export default function PolaroidScrapbook() {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  const toggleFlip = (id: string) => {
    setFlippedId(flippedId === id ? null : id);
  };

  return (
    <div className="my-16 relative">
      {/* Jute Twine Line running across */}
      <div className="absolute top-6 inset-x-0 h-1 bg-[#B58B5E]/50 shadow-sm z-10 pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="craft-stamp px-3 py-1 text-[9px] font-bold text-terracotta border-terracotta">
          Stall Corkboard & Polaroids
        </span>
        <h3 className="font-editorial-heading text-2xl sm:text-4xl font-light text-espresso-900 mt-2">
          FOUNDER’S SCRAPBOOK: <span className="italic text-terracotta font-normal">BEHIND THE LOOPS</span>
        </h3>
        <p className="text-xs sm:text-sm text-espresso-600 mt-1">
          Tap any Polaroid to flip it over and read Tisha’s personal journal notes written after finishing the piece.
        </p>
      </div>

      {/* Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
        {POLAROIDS.map((p) => {
          const isFlipped = flippedId === p.id;
          return (
            <div
              key={p.id}
              onClick={() => toggleFlip(p.id)}
              className="relative cursor-pointer group select-none pt-4"
              style={{ transform: `rotate(${p.rotateDeg}deg)` }}
            >
              {/* Wooden Clothespin Graphic holding photo to string */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                <div className="w-3.5 h-7 rounded-sm bg-[#D2A06E] border border-[#8C6239] shadow-md flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#593E22]" />
                </div>
              </div>

              {/* 3D Flip Card Container */}
              <div
                className="relative w-full aspect-[4/5] transition-transform duration-700 transform-gpu"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* FRONT: Classic Polaroid Style */}
                <div
                  className="absolute inset-0 rounded-2xl bg-white p-3.5 pb-5 shadow-xl border border-parchment-300 flex flex-col justify-between"
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-parchment-200">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 280px"
                    />
                    <div className="absolute bottom-2 left-2 bg-espresso-900/80 backdrop-blur-sm text-white text-[9px] px-2 py-0.5 rounded-full">
                      {p.frontTag}
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <p className="font-editorial-heading text-base font-bold text-espresso-900 leading-tight">
                      {p.title}
                    </p>
                    <p className="font-handwritten text-xs text-terracotta mt-0.5">
                      {p.date}
                    </p>
                    <span className="text-[9px] text-espresso-500 uppercase tracking-widest mt-1 block group-hover:text-terracotta">
                      Tap to read journal ⟲
                    </span>
                  </div>
                </div>

                {/* BACK: Handwritten Journal Page */}
                <div
                  className="absolute inset-0 rounded-2xl bg-[#FFFDF9] p-5 shadow-2xl border-2 border-dashed border-terracotta/30 flex flex-col justify-between text-left"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-parchment-300">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta">
                        Journal Entry
                      </span>
                      <RotateCcw className="h-3 w-3 text-espresso-500" />
                    </div>

                    <p className="font-handwritten text-base sm:text-lg text-espresso-900 leading-snug mt-3 italic">
                      “{p.handwrittenBack}”
                    </p>
                  </div>

                  <div className="pt-3 border-t border-parchment-200">
                    <p className="text-[10px] text-espresso-600 font-semibold uppercase tracking-wider">
                      {p.craftSecret}
                    </p>
                    <p className="font-handwritten text-sm text-terracotta mt-0.5">
                      — Tisha Vaghasiya ♡
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
