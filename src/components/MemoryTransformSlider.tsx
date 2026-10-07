'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, ArrowLeftRight, Heart, Camera } from 'lucide-react';

interface TransformationPair {
  id: string;
  title: string;
  subtitle: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImage: string;
  afterImage: string;
  story: string;
  craftHours: string;
}

const PAIRS: TransformationPair[] = [
  {
    id: 'father-child',
    title: 'The Nostalgic Polaroid Keepsake',
    subtitle: 'Nostalgic Polaroid Photo → 3D Tactile Amigurumi',
    beforeLabel: 'Original Client Photograph',
    afterLabel: '100% Handcrafted Kalapriti Heirloom',
    beforeImage: '/assets/custom-father-child.jpg',
    afterImage: '/assets/custom-father-child.jpg',
    story:
      'A cherished 90s Polaroid of a father carrying his child reconstructed with matching miniature sweaters, hair textures, and posture armature.',
    craftHours: '42 Handcraft Hours',
  },
  {
    id: 'grandparents',
    title: 'Golden Jubilee Couple Portrait',
    subtitle: '50th Anniversary Photograph → Custom Heirloom Keepsake',
    beforeLabel: 'Golden Anniversary Photo',
    afterLabel: 'Hand-Hooked Couple Portrait',
    beforeImage: '/assets/custom-grandparents.jpg',
    afterImage: '/assets/custom-grandparents.jpg',
    story:
      'Commissioned by their grandchildren to celebrate 50 years of togetherness. Every strand of silver hair and traditional attire pattern was matched loop by loop.',
    craftHours: '48 Handcraft Hours',
  },
  {
    id: 'sunflower',
    title: 'Botanical Bloom to Everlasting Flora',
    subtitle: 'Fresh Wilting Blossom → Permanent Everlasting Bouquet',
    beforeLabel: 'Natural Fresh Bloom (Wilts in 5 Days)',
    afterLabel: 'Kalapriti Bloom (Endures Forever)',
    beforeImage: '/assets/bouquet-sunflower.jpg',
    afterImage: '/assets/bouquet-sunflower.jpg',
    story:
      'Real garden flowers fade within days. Our botanical crochet blooms maintain vibrant golden petals and textured seed disks year after year without watering.',
    craftHours: '16 Handcraft Hours',
  },
];

export default function MemoryTransformSlider({
  onOpenOrderModal,
}: {
  onOpenOrderModal: (category?: string, details?: string) => void;
}) {
  const [activePair, setActivePair] = useState(PAIRS[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  return (
    <section className="relative py-20 sm:py-28 bg-parchment-100 overflow-hidden border-t border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-parchment-200 border border-parchment-300 text-terracotta text-xs font-semibold uppercase tracking-widest mb-3">
            <Camera className="h-3.5 w-3.5 text-terracotta" />
            The Magic Transformation
          </div>

          <h2 className="font-editorial-heading text-3xl sm:text-5xl lg:text-6xl font-light text-espresso-900 leading-tight">
            FROM TREASURED PHOTOGRAPH
            <br />
            <span className="italic text-terracotta font-normal">TO THREE-DIMENSIONAL</span> HEIRLOOM.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-espresso-700 font-light max-w-2xl mx-auto">
            Drag the wooden hook slider to witness how 2D flat memories are sculpted into tangible loops of love.
          </p>

          {/* Preset Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {PAIRS.map((pair) => (
              <button
                key={pair.id}
                onClick={() => {
                  setActivePair(pair);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activePair.id === pair.id
                    ? 'bg-terracotta text-white shadow-md scale-105'
                    : 'bg-white text-espresso-700 border border-parchment-300 hover:bg-parchment-200'
                }`}
              >
                {pair.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Split-Screen Stage */}
        <div className="max-w-4xl mx-auto relative rounded-[36px] bg-white border-4 border-white shadow-2xl overflow-hidden">
          <div className="washi-tape-tab" />
          <div className="washi-tape-tab-left" />

          <div
            ref={containerRef}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden cursor-ew-resize select-none bg-espresso-950"
          >
            {/* Background Layer: The Handcrafted Heirloom (Right Side / Full) */}
            <div className="absolute inset-0">
              <Image
                src={activePair.afterImage}
                alt={activePair.afterLabel}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
              />
              <div className="absolute top-4 right-4 bg-espresso-900/85 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                ✦ {activePair.afterLabel}
              </div>
            </div>

            {/* Clipped Foreground Layer: Original Memory (Left Side) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={activePair.beforeImage}
                alt={activePair.beforeLabel}
                fill
                className="object-cover filter sepia-[0.35] contrast-[1.08]"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
              <div className="absolute top-4 left-4 bg-amber-950/85 backdrop-blur-md text-amber-200 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full border border-amber-300/30 shadow-lg">
                📷 {activePair.beforeLabel}
              </div>
            </div>

            {/* Glowing Golden Divider Line */}
            <div
              className="absolute inset-y-0 w-1 bg-gradient-to-b from-amber-300 via-white to-amber-300 shadow-[0_0_15px_rgba(255,255,255,0.9)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Center Slider Handle (Wooden Crochet Hook Badge) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-espresso-900 text-white border-2 border-white shadow-2xl flex items-center justify-center pointer-events-none transform active:scale-110 transition-transform">
                <span className="text-lg">🪡</span>
              </div>
            </div>

            {/* Helper drag prompt */}
            <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none">
              <span className="bg-espresso-900/80 backdrop-blur-md text-white text-[11px] font-medium px-4 py-1.5 rounded-full border border-white/20 flex items-center gap-2 shadow-lg">
                <ArrowLeftRight className="h-3.5 w-3.5 text-terracotta" />
                <span>Drag to reveal transformation</span>
              </span>
            </div>
          </div>

          {/* Transformation Story Card */}
          <div className="p-6 sm:p-8 bg-parchment-50 border-t border-parchment-300 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-terracotta">
                {activePair.craftHours} • 100% Machine-Defying Customization
              </span>
              <h4 className="font-editorial-heading text-xl sm:text-2xl font-bold text-espresso-900">
                {activePair.title}
              </h4>
              <p className="text-xs sm:text-sm text-espresso-700 max-w-xl font-light">
                {activePair.story}
              </p>
            </div>

            <button
              onClick={() =>
                onOpenOrderModal(
                  'Custom Portrait Keepsake',
                  `Inquiry inspired by ${activePair.title} (Photo-to-Doll transformation)`
                )
              }
              className="py-3.5 px-6 rounded-full bg-gradient-to-r from-terracotta to-coral hover:opacity-95 text-white font-semibold text-xs uppercase tracking-wider shadow-md whitespace-nowrap flex items-center gap-2 transition-transform active:scale-95"
            >
              <Sparkles className="h-4 w-4" />
              <span>Turn My Photo Into Keepsake</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
