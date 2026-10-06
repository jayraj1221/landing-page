'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram, Sparkles, Heart, ArrowUpRight, CheckCircle2, MessageCircle, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface InstagramStallConversionProps {
  onOpenOrderModal: () => void;
}

export default function InstagramStallConversion({ onOpenOrderModal }: InstagramStallConversionProps) {
  const [unboxed, setUnboxed] = useState(false);

  const triggerMagicUnbox = () => {
    setUnboxed(true);
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.7 },
        colors: ['#D97752', '#8B9E6E', '#F07073', '#DE9B26', '#187787'],
      });
    } catch {
      // Confetti fallback
    }
  };

  const instagramPhotos = [
    { src: '/assets/spiritual-jagannath.jpg', alt: 'Jagannath Trinity Amigurumi' },
    { src: '/assets/custom-father-child.jpg', alt: 'Custom Portrait Keepsake' },
    { src: '/assets/bouquet-sunflower.jpg', alt: 'Everlasting Sunflower Bloom' },
    { src: '/assets/baby-romper-1.jpg', alt: 'Organic Cotton Babywear' },
  ];

  return (
    <section id="instagram" className="relative py-24 sm:py-32 bg-parchment-100 overflow-hidden border-t border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* SECTION 05: Instagram / Follow Kalapriti */}
        <div className="rounded-[40px] bg-gradient-to-br from-espresso-900 to-espresso-800 text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Ambient warm glows */}
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-peach/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-sage/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Instagram Narrative & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-terracotta-light text-xs uppercase tracking-widest font-semibold">
                <Instagram className="h-3.5 w-3.5" />
                Join Our Handmade Community
              </div>

              <h2 className="font-editorial-heading text-4xl sm:text-6xl font-light leading-[1.05] text-white">
                FOLLOW OUR JOURNEY
                <br />
                <span className="italic text-terracotta-light">ON INSTAGRAM.</span>
              </h2>

              <p className="text-base sm:text-lg text-parchment-200/90 font-light leading-relaxed max-w-xl">
                Scanning from our exhibition stall? Connect with us on Instagram to see work-in-progress reels, new collection drops, and behind-the-scenes hand-hooking artistry.
              </p>

              {/* Direct Instagram Action */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/kalapriti_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-terracotta via-coral to-terracotta-dark text-white font-semibold text-xs uppercase tracking-widest shadow-lg hover:opacity-95 transition-all hover:scale-105"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Follow us on Instagram</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <button
                  onClick={onOpenOrderModal}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/15 border border-white/20 text-white font-semibold text-xs uppercase tracking-widest hover:bg-white/25 transition-colors"
                >
                  <Sparkles className="h-4 w-4 text-terracotta-light" />
                  <span>Custom Order Inquiry</span>
                </button>
              </div>

              {/* Direct Handle */}
              <div className="pt-4 flex items-center gap-3 text-sm text-parchment-300">
                <span className="font-bold text-white text-base">@kalapriti_</span>
                <span>•</span>
                <span>Loops of love, from hands to heart</span>
              </div>
            </div>

            {/* Right: Instagram Photo Collage Grid */}
            <div className="lg:col-span-5">
              <a
                href="https://www.instagram.com/kalapriti_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl bg-white/10 backdrop-blur-md p-4 border border-white/20 shadow-xl transition-all duration-300 hover:bg-white/15"
              >
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {instagramPhotos.map((photo, i) => (
                    <div key={i} className="relative aspect-square rounded-2xl overflow-hidden bg-espresso-950/40">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs px-2 pt-1 text-parchment-200">
                  <span className="flex items-center gap-1.5 font-medium text-white">
                    <Instagram className="h-4 w-4 text-coral" />
                    Visit Instagram Gallery
                  </span>
                  <span className="text-terracotta-light font-semibold group-hover:translate-x-1 transition-transform">
                    View @kalapriti_ →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 06 & 07: FOUNDER & CONTACT DETAILS */}
        <div id="founder" className="rounded-[40px] bg-parchment-50 border-2 border-parchment-300 p-8 sm:p-12 lg:p-16 shadow-soft-lift">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Prominent Logo & Founder Profile */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left space-y-5">
              {/* Large Prominent Logo presentation */}
              <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-3xl overflow-hidden border-2 border-terracotta/30 shadow-tactile ring-4 ring-terracotta/10 bg-white">
                <Image
                  src="/assets/logo.jpg"
                  alt="Kalapriti Official Brand Logo"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-terracotta block">
                  MADE BY HAND. MADE WITH HEART.
                </span>
                <h3 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-espresso-900 mt-1">
                  Kalapriti
                </h3>
                <p className="text-base text-espresso-700 font-medium mt-1">
                  Founder: <strong className="text-espresso-900">Tisha Vaghasiya</strong>
                </p>
                <p className="text-xs uppercase tracking-wider text-espresso-600 mt-1">
                  Handcrafted Crochet • Personalized Gifting • Custom Creations
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-parchment-100 border border-parchment-200 w-full text-xs text-espresso-700 space-y-1.5">
                <p><strong>Instagram:</strong> <a href="https://www.instagram.com/kalapriti_/" target="_blank" rel="noopener noreferrer" className="text-terracotta font-medium hover:underline">@kalapriti_</a></p>
                <p><strong>Exhibition Stall:</strong> Open for bespoke commissions & inquiries</p>
                <p><strong>Handcrafted in:</strong> India with 100% pure love</p>
              </div>
            </div>

            {/* Right: Personal Message & Final CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-peach/20 border border-terracotta/20 space-y-3">
                <span className="text-2xl">🤍</span>
                <h4 className="font-editorial-heading text-2xl sm:text-3xl font-medium text-espresso-900">
                  “Want something made just for you? Let’s create it together.”
                </h4>
                <p className="text-sm sm:text-base text-espresso-700 font-light leading-relaxed">
                  Thank you for stepping into our little world of yarn, creativity, and love. Whether it’s a portrait of someone you love, an auspicious altar idol, or a wedding bouquet that lasts a lifetime, we craft each loop specially for you.
                </p>
                <p className="font-handwritten text-xl text-terracotta-dark pt-1">
                  — Tisha Vaghasiya & the Kalapriti hands ♡
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={onOpenOrderModal}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-terracotta text-white font-semibold text-xs uppercase tracking-wider hover:bg-terracotta-dark shadow-md transition-all hover:shadow-glow-terracotta"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Contact us for customized orders</span>
                </button>

                <a
                  href="https://www.instagram.com/kalapriti_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-parchment-200 border border-parchment-300 text-espresso-800 font-semibold text-xs uppercase tracking-wider hover:bg-parchment-300 transition-colors"
                >
                  <Instagram className="h-4 w-4 text-coral" />
                  <span>Follow @kalapriti_</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
