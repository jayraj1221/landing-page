'use client';

import React from 'react';
import Image from 'next/image';
import SmoothImage from './SmoothImage';
import { ArrowUp, Instagram, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-parchment-50 border-t border-parchment-300 pt-20 pb-12 overflow-hidden text-espresso-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Final Editorial Statement */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta block">
            Handmade with Love
          </span>
          <h2 className="font-editorial-heading text-3xl sm:text-5xl font-light text-espresso-900 leading-tight">
            FROM OUR HANDS TO YOUR HEART,
            <br />
            <span className="italic text-terracotta-dark">ONE LOOP AT A TIME.</span>
          </h2>
          <p className="font-handwritten text-2xl sm:text-3xl text-terracotta pt-1">
            कलाप्रिति • Loops of love, from hands to heart
          </p>
        </div>

        {/* Brand Centerpiece - Prominent & Beautiful */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-14">
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-3xl overflow-hidden border-2 border-terracotta/30 shadow-tactile ring-4 ring-terracotta/10 bg-white group hover:scale-105 transition-transform duration-300">
            <SmoothImage
              src="/assets/logo.jpg"
              alt="Kalapriti Brand Emblem"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 96px, 112px"
            />
          </div>
          <div className="text-center">
            <span className="font-editorial-heading text-2xl sm:text-3xl font-bold tracking-tight text-espresso-900 block">
              KALAPRITI
            </span>
            <span className="text-xs uppercase tracking-widest text-espresso-600 font-medium">
              Handcrafted Crochet • Personalized Gifting • Custom Creations
            </span>
          </div>
        </div>

        {/* Minimal Nav Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-parchment-200 text-xs">
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-espresso-900 mb-3">About Kalapriti</h4>
            <ul className="space-y-2 text-espresso-600">
              <li><a href="#welcome" className="hover:text-terracotta transition-colors">The Magic Door</a></li>
              <li><a href="#vision" className="hover:text-terracotta transition-colors">Vision & Mission</a></li>
              <li><a href="#story" className="hover:text-terracotta transition-colors">Our Brand Story</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wider text-espresso-900 mb-3">Creations</h4>
            <ul className="space-y-2 text-espresso-600">
              <li><a href="#creations" className="hover:text-terracotta transition-colors">Crochet Dolls</a></li>
              <li><a href="#creations" className="hover:text-terracotta transition-colors">Spiritual Idols</a></li>
              <li><a href="#creations" className="hover:text-terracotta transition-colors">Flowers & Bouquets</a></li>
              <li><a href="#creations" className="hover:text-terracotta transition-colors">Baby Collection</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wider text-espresso-900 mb-3">The Craft</h4>
            <ul className="space-y-2 text-espresso-600">
              <li><a href="#craft" className="hover:text-terracotta transition-colors">Machine-Defying Geometry</a></li>
              <li><a href="#craft" className="hover:text-terracotta transition-colors">100% Hand-Hooked</a></li>
              <li><a href="#sustainability" className="hover:text-terracotta transition-colors">Natural Organic Fibers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wider text-espresso-900 mb-3">Connect</h4>
            <ul className="space-y-2 text-espresso-600">
              <li>
                <a
                  href="https://www.instagram.com/kalapriti_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-terracotta transition-colors"
                >
                  <Instagram className="h-3.5 w-3.5 text-coral" />
                  <span>@kalapriti_</span>
                </a>
              </li>
              <li><a href="#founder" className="hover:text-terracotta transition-colors">Founder: Tisha Vaghasiya</a></li>
              <li><span>Exhibition Stall Activation</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-espresso-600">
          <p>© {new Date().getFullYear()} Kalapriti. Handcrafted with reverence in India.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Handcrafted with love by <strong className="text-espresso-800">Tisha Vaghasiya</strong> ♡
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-parchment-300 hover:bg-parchment-200 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 text-espresso-700" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
