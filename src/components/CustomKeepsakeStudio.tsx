import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Sparkles, Heart, Check, Send, MessageCircle, ArrowRight, Share2 } from 'lucide-react';
import Image from 'next/image';
import { executeViewTransition } from '@/utils/viewTransitions';
import { triggerHaptic } from '@/utils/haptics';
import { proceduralAudio } from '@/utils/proceduralAudio';
import { shareOrCopy } from '@/utils/webShare';
import { useToast } from './ModernToast';

interface CustomKeepsakeStudioProps {
  onOpenOrderModal: (category?: string, details?: string) => void;
}

const YARN_PALETTES = [
  { id: 'terracotta', name: 'Warm Terracotta', hex: '#D97752', mood: 'Earthy & Passionate', textClass: 'text-white' },
  { id: 'peach', name: 'Blush Coral', hex: '#F07073', mood: 'Gentle & Romantic', textClass: 'text-white' },
  { id: 'sage', name: 'Matcha Sage', hex: '#8B9E6E', mood: 'Calm & Botanical', textClass: 'text-white' },
  { id: 'ochre', name: 'Marigold Ochre', hex: '#DE9B26', mood: 'Festive & Auspicious', textClass: 'text-white' },
  { id: 'teal', name: 'Vintage Teal', hex: '#187787', mood: 'Royal & Serene', textClass: 'text-white' },
  { id: 'ecru', name: 'Natural Ecru', hex: '#ECDCC8', mood: 'Pure & Organic Cotton', textClass: 'text-espresso-900' },
];

const KEEPSAKE_TYPES = [
  {
    id: 'couple',
    title: 'Custom Couple Portrait Dolls',
    category: 'Crochet Dolls',
    baseHours: '35–45 Hours',
    image: '/assets/custom-father-child.jpg',
    tag: 'Most Loved for Anniversaries',
  },
  {
    id: 'spiritual',
    title: 'Sacred Altar Idols',
    category: 'Crochet Idols',
    baseHours: '25–40 Hours',
    image: '/assets/spiritual-jagannath.jpg',
    tag: 'Divine Blessing Keepsake',
  },
  {
    id: 'bouquet',
    title: 'Everlasting Floral Bouquet',
    category: 'Flowers & Bouquets',
    baseHours: '12–18 Hours',
    image: '/assets/bouquet-sunflower.jpg',
    tag: 'Never Withers or Fades',
  },
  {
    id: 'baby',
    title: 'Organic Baby Booties & Romper',
    category: 'Baby Collection',
    baseHours: '16–22 Hours',
    image: '/assets/baby-romper-1.jpg',
    tag: '100% Skin-Friendly Cotton',
  },
];

export default function CustomKeepsakeStudio({ onOpenOrderModal }: CustomKeepsakeStudioProps) {
  const [selectedKeepsake, setSelectedKeepsake] = useState(KEEPSAKE_TYPES[0]);
  const [selectedYarn, setSelectedYarn] = useState(YARN_PALETTES[0]);
  const [personalizationNote, setPersonalizationNote] = useState('');
  const { showToast } = useToast();

  const handleCreateInquiry = () => {
    triggerHaptic('light');
    proceduralAudio.playWoodenHookClick(1.2);
    const details = `Custom Concept: ${selectedKeepsake.title} | Yarn Mood: ${selectedYarn.name} (${selectedYarn.mood}) | Special Request: ${personalizationNote.trim() || 'Custom color matching from photo'}`;
    onOpenOrderModal(selectedKeepsake.category, details);
  };

  return (
    <div className="mt-16 rounded-[36px] bg-parchment-100 border-2 border-parchment-300 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-soft-lift">
      {/* Handcrafted Washi tape banner */}
      <div className="washi-tape-tab" />
      <div className="washi-tape-tab-left" />

      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parchment-200 border border-parchment-300 text-terracotta text-xs font-semibold uppercase tracking-wider mb-2">
          <Palette className="h-3.5 w-3.5" />
          Interactive Studio
        </div>
        <h3 className="font-editorial-heading text-3xl sm:text-5xl font-light text-espresso-900 leading-tight">
          CUSTOMIZE YOUR <span className="italic text-terracotta font-normal">KEEPSAKE.</span>
        </h3>
        <p className="text-sm sm:text-base text-espresso-700 font-light mt-2">
          Test color palettes and formulate your personalized vision before chatting with Tisha.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left: 2-Step Configuration Controls */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Step 1: Choose Keepsake Type */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider font-bold text-espresso-800 flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-terracotta text-white flex items-center justify-center text-[10px]">1</span>
                Select Keepsake Canvas
              </span>
              <span className="text-[11px] text-terracotta font-medium italic">Hand-hooked to order</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {KEEPSAKE_TYPES.map((type) => {
                const isSelected = selectedKeepsake.id === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => {
                      triggerHaptic('light');
                      proceduralAudio.playWoodenHookClick();
                      executeViewTransition(() => {
                        setSelectedKeepsake(type);
                      });
                    }}
                    className={`p-3.5 rounded-2xl text-left border-2 transition-all relative overflow-hidden ${
                      isSelected
                        ? 'border-terracotta bg-white shadow-md'
                        : 'border-parchment-300 bg-parchment-50 hover:border-parchment-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-parchment-200 text-espresso-700">
                        {type.baseHours}
                      </span>
                      {isSelected && <Check className="h-4 w-4 text-terracotta" />}
                    </div>
                    <p className="font-editorial-heading text-base font-semibold text-espresso-900 leading-snug mt-1">
                      {type.title}
                    </p>
                    <span className="text-[10px] text-espresso-600 block mt-1">
                      {type.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Choose Yarn Palette */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider font-bold text-espresso-800 flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-terracotta text-white flex items-center justify-center text-[10px]">2</span>
                Choose Natural Yarn Palette
              </span>
              <span className="text-[11px] text-espresso-600 font-medium">100% Combed Cotton</span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
              {YARN_PALETTES.map((yarn) => {
                const isSelected = selectedYarn.id === yarn.id;
                return (
                  <button
                    key={yarn.id}
                    onClick={() => {
                      triggerHaptic('selection');
                      proceduralAudio.playYarnGlide();
                      executeViewTransition(() => {
                        setSelectedYarn(yarn);
                      });
                    }}
                    className={`p-2.5 rounded-2xl border-2 flex flex-col items-center justify-between gap-1.5 transition-all text-center ${
                      isSelected
                        ? 'border-espresso-900 bg-white shadow-md scale-105'
                        : 'border-transparent bg-parchment-50 hover:bg-white'
                    }`}
                  >
                    <div
                      className="h-9 w-9 rounded-full shadow-inner flex items-center justify-center relative border border-black/10"
                      style={{ backgroundColor: yarn.hex }}
                    >
                      {isSelected && <span className={`text-xs ${yarn.textClass}`}>🧶</span>}
                    </div>
                    <span className="text-[10px] font-bold text-espresso-900 leading-tight">
                      {yarn.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Personalization Note */}
          <div>
            <label className="text-xs uppercase tracking-wider font-bold text-espresso-800 flex items-center gap-2 mb-2">
              <span className="h-5 w-5 rounded-full bg-terracotta text-white flex items-center justify-center text-[10px]">3</span>
              Personalization Note (Optional)
            </label>
            <input
              type="text"
              value={personalizationNote}
              onChange={(e) => setPersonalizationNote(e.target.value)}
              placeholder="e.g. Matching bride & groom outfits, birth date tag, or golden mukut detail..."
              className="w-full px-4 py-3 rounded-2xl bg-white border border-parchment-300 text-espresso-900 text-xs sm:text-sm focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all placeholder:text-espresso-400"
            />
          </div>
        </div>

        {/* Right: Live Interactive Concept Preview Card */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-white p-6 border-2 border-parchment-300 shadow-xl relative overflow-hidden space-y-5">
            {/* Ambient Yarn Glow Accent */}
            <div
              className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-30 transition-all duration-700 pointer-events-none"
              style={{ backgroundColor: selectedYarn.hex }}
            />

            <div className="flex items-center justify-between">
              <span className="craft-stamp px-3 py-1 text-[9px] font-bold text-terracotta border-terracotta">
                Concept Specimen
              </span>
              <span className="text-[11px] font-medium text-espresso-600">
                Est. {selectedKeepsake.baseHours}
              </span>
            </div>

            {/* Keepsake Visual Thumbnail */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-parchment-200 border-2 border-parchment-200">
              <Image
                src={selectedKeepsake.image}
                alt={selectedKeepsake.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              <div
                className="absolute inset-x-0 bottom-0 py-2 px-3 text-center text-xs font-semibold backdrop-blur-md"
                style={{
                  backgroundColor: `${selectedYarn.hex}CC`,
                  color: selectedYarn.id === 'ecru' ? '#1E140F' : '#FFFFFF',
                }}
              >
                Palette: {selectedYarn.name} • {selectedYarn.mood}
              </div>
            </div>

            {/* Concept Summary Details */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-parchment-200 pb-1.5">
                <span className="text-espresso-600">Keepsake Type:</span>
                <span className="font-bold text-espresso-900">{selectedKeepsake.title}</span>
              </div>
              <div className="flex justify-between border-b border-parchment-200 pb-1.5">
                <span className="text-espresso-600">Primary Yarn Mood:</span>
                <span className="font-bold text-espresso-900 flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full inline-block" style={{ backgroundColor: selectedYarn.hex }} />
                  {selectedYarn.name}
                </span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-espresso-600">Handcraft Method:</span>
                <span className="font-bold text-terracotta">100% Machine-Defying Crochet</span>
              </div>
            </div>

            {/* Direct Inquiry CTA Button with Share Vision */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={async () => {
                  triggerHaptic('medium');
                  const res = await shareOrCopy({
                    title: `Custom ${selectedKeepsake.title} — Kalapriti Studio`,
                    text: `My bespoke concept: ${selectedKeepsake.title} crafted in ${selectedYarn.name} yarn palette (${selectedYarn.mood}). ${personalizationNote ? `Note: "${personalizationNote}"` : ''}`,
                    url: window.location.href,
                  });
                  if (res.result === 'shared') {
                    showToast('Custom vision shared!', undefined, 'share');
                  } else if (res.result === 'copied') {
                    showToast('Vision summary copied to clipboard!', undefined, 'share');
                  }
                }}
                className="p-3.5 rounded-full border border-parchment-300 hover:bg-parchment-200 text-espresso-700 transition-colors flex items-center justify-center flex-shrink-0"
                title="Share this keepsake concept"
                aria-label="Share concept"
              >
                <Share2 className="h-4 w-4 text-terracotta" />
              </button>

              <button
                onClick={handleCreateInquiry}
                className="flex-1 py-4 rounded-full bg-gradient-to-r from-terracotta via-coral to-terracotta-dark text-white font-semibold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 active:scale-95"
              >
                <Sparkles className="h-4 w-4" />
                <span>Inquire With This Vision</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
