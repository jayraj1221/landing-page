'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Sparkles, ZoomIn, Info, Check } from 'lucide-react';
import Image from 'next/image';

interface InspectableItem {
  id: string;
  name: string;
  category: string;
  image: string;
  gauge: string;
  stitchCount: string;
  craftSecret: string;
}

interface StitchInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItemId?: string;
  onCommission: (category: string, details: string) => void;
}

const INSPECTABLE_ITEMS: InspectableItem[] = [
  {
    id: 'jagannath',
    name: 'Sacred Jagannath Trinity Heirloom',
    category: 'Spiritual Amigurumi',
    image: '/assets/spiritual-jagannath.jpg',
    gauge: '1.25mm Micro-Hook',
    stitchCount: '14,200+ hand stitches',
    craftSecret:
      'The ceremonial mukuts (crowns) feature gold lurex micro-crochet interwoven with mercerized cotton. Every single sacred eye is individually hand-embroidered to achieve divine symmetry.',
  },
  {
    id: 'ganesha',
    name: 'Baby Ganesha On Golden Lotus',
    category: 'Spiritual Amigurumi',
    image: '/assets/spiritual-ganesha.jpg',
    gauge: '1.75mm Ergonomic Hook',
    stitchCount: '9,800+ hand stitches',
    craftSecret:
      'The golden multi-petaled lotus base uses progressive single-crochet increases to sculpt free-standing architectural curve tension without plastic inserts.',
  },
  {
    id: 'father-child',
    name: 'Father & Child Keepsake Doll',
    category: 'Personalized Photo Keepsake',
    image: '/assets/custom-father-child.jpg',
    gauge: '2.0mm Soft-Grip Hook',
    stitchCount: '11,500+ hand stitches',
    craftSecret:
      'Miniature clothing is tailored with micro-stitches directly onto the body armature to reproduce authentic folds and posture from the customer’s original family photo.',
  },
  {
    id: 'sunflower',
    name: 'Everlasting Sunflower Bloom',
    category: 'Everlasting Florals',
    image: '/assets/bouquet-sunflower.jpg',
    gauge: '2.5mm Natural Wood Hook',
    stitchCount: '4,600+ hand stitches',
    craftSecret:
      'The central seed disk is hooked using textured popcorn/puff stitches to simulate the tactile depth of real botanical flora that will never wilt.',
  },
];

export default function StitchInspectorModal({
  isOpen,
  onClose,
  initialItemId = 'jagannath',
  onCommission,
}: StitchInspectorModalProps) {
  const [selectedItem, setSelectedItem] = useState<InspectableItem>(
    INSPECTABLE_ITEMS.find((it) => it.id === initialItemId) || INSPECTABLE_ITEMS[0]
  );
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setZoomPos({ x, y });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current || !e.touches[0]) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100));
    setZoomPos({ x, y });
    setIsHovering(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-espresso-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-parchment-50 rounded-[32px] sm:rounded-[40px] shadow-2xl border-2 border-parchment-300 overflow-hidden z-10 my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 sm:p-8 border-b border-parchment-200 bg-parchment-100/60">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-terracotta/10 text-terracotta flex items-center justify-center">
                <ZoomIn className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-editorial-heading text-xl sm:text-2xl font-bold text-espresso-900 leading-tight">
                  Stitch Inspector • Macro Loupe
                </h3>
                <p className="text-xs text-espresso-600 font-medium">
                  Hover or drag across the image to inspect machine-defying hand tension
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="h-10 w-10 rounded-full bg-parchment-200 hover:bg-parchment-300 text-espresso-800 flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Quick Item Selector */}
          <div className="px-6 py-3 bg-parchment-200/50 border-b border-parchment-200 flex items-center gap-2 overflow-x-auto">
            {INSPECTABLE_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedItem.id === item.id
                    ? 'bg-terracotta text-white shadow-sm'
                    : 'bg-white/80 text-espresso-700 hover:bg-white border border-parchment-300'
                }`}
              >
                {item.name.split(' ')[0]} {item.name.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Main Inspection Stage */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Inspection Canvas */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div
                ref={imageContainerRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onTouchMove={handleTouchMove}
                onTouchStart={() => setIsHovering(true)}
                className="relative w-full aspect-square max-w-md rounded-3xl overflow-hidden border-4 border-white shadow-xl cursor-crosshair group select-none bg-parchment-200"
              >
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                />

                {/* Loupe Lens Overlay */}
                {isHovering && (
                  <div
                    className="absolute pointer-events-none rounded-full border-4 border-amber-300 shadow-[0_0_25px_rgba(0,0,0,0.5)] overflow-hidden hidden sm:block"
                    style={{
                      width: '140px',
                      height: '140px',
                      left: `${zoomPos.x}%`,
                      top: `${zoomPos.y}%`,
                      transform: 'translate(-50%, -50%)',
                      backgroundImage: `url(${selectedItem.image})`,
                      backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                      backgroundSize: '350%',
                    }}
                  >
                    {/* Crosshair ring */}
                    <div className="absolute inset-0 rounded-full border border-white/60" />
                    <span className="absolute bottom-1 inset-x-0 text-center text-[9px] font-bold text-white bg-black/50 py-0.5">
                      3.5x MACRO
                    </span>
                  </div>
                )}

                {/* Helper prompt overlay */}
                {!isHovering && (
                  <div className="absolute bottom-3 inset-x-4 bg-espresso-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-center text-xs flex items-center justify-center gap-1.5 pointer-events-none">
                    <Search className="h-3.5 w-3.5 text-terracotta-light" />
                    <span>Move cursor / drag finger to magnify loops</span>
                  </div>
                )}
              </div>

              {/* Mobile Live Loupe Preview for Touch Screens */}
              <div className="sm:hidden w-full mt-3 p-3 rounded-2xl bg-parchment-100 border border-parchment-300 flex items-center gap-3">
                <div
                  className="w-16 h-16 rounded-xl border-2 border-terracotta flex-shrink-0 shadow-inner"
                  style={{
                    backgroundImage: `url(${selectedItem.image})`,
                    backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                    backgroundSize: '300%',
                  }}
                />
                <div className="text-xs text-espresso-800">
                  <p className="font-bold text-terracotta">Real-Time Macro View</p>
                  <p className="text-[11px] text-espresso-600">Drag image above to explore stitch topology</p>
                </div>
              </div>
            </div>

            {/* Right: Technical Handcraft Specifications */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-terracotta/10 text-terracotta border border-terracotta/20">
                  {selectedItem.category}
                </span>
                <h4 className="font-editorial-heading text-2xl font-bold text-espresso-900 mt-2">
                  {selectedItem.name}
                </h4>
              </div>

              {/* Craft Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-parchment-100 border border-parchment-300">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-espresso-600 block">
                    Hook Gauge
                  </span>
                  <span className="text-sm font-bold text-espresso-900">{selectedItem.gauge}</span>
                </div>
                <div className="p-3 rounded-2xl bg-parchment-100 border border-parchment-300">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-espresso-600 block">
                    Total Loops
                  </span>
                  <span className="text-sm font-bold text-terracotta">{selectedItem.stitchCount}</span>
                </div>
              </div>

              {/* Craft Secret */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-espresso-800 space-y-1.5 leading-relaxed">
                <div className="flex items-center gap-1.5 font-bold text-espresso-900">
                  <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                  <span>The Artisan Secret:</span>
                </div>
                <p>{selectedItem.craftSecret}</p>
              </div>

              {/* Commission Action */}
              <button
                onClick={() => {
                  onCommission(selectedItem.category, `Custom inquiry inspired by ${selectedItem.name}`);
                  onClose();
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-terracotta to-coral hover:opacity-95 text-white font-semibold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <Sparkles className="h-4 w-4" />
                <span>Commission A Piece Like This</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
