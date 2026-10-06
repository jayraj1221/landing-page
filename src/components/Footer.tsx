'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUp, Instagram, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-parchment-50 border-t border-parchment-300 pt-20 pb-12 overflow-hidden text-espresso-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Calm Final Editorial Statement */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-terracotta block">
            Endless Horizons
          </span>
          <h2 className="font-editorial-heading text-4xl sm:text-6xl font-light text-espresso-900 leading-tight">
            FROM A SIMPLE THREAD TO A BUSINESS OF
            <br />
            <span className="italic text-terracotta">ENDLESS POSSIBILITIES.</span>
          </h2>
          <p className="font-handwritten text-2xl text-terracotta-dark pt-2">
            कलाप्रिति • Loops of love, from hands to heart
          </p>
        </div>

        {/* Brand Centerpiece */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-16">
          <div className="relative h-20 w-20 rounded-full overflow-hidden border border-parchment-300 shadow-sm">
            <Image
              src="/assets/logo.jpg"
              alt="Kalapriti Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <span className="font-editorial-heading text-2xl font-bold tracking-tight text-espresso-900 block">
              KALAPRITI
            </span>
            <span className="text-xs uppercase tracking-widest text-espresso-600">
              Handcrafted Artisanal Enterprise & MBA Presentation
            </span>
          </div>
        </div>

        {/* Minimal Nav Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-parchment-200 text-xs">
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-espresso-900 mb-3">Narrative</h4>
            <ul className="space-y-2 text-espresso-600">
              <li><a href="#story" className="hover:text-terracotta transition-colors">Our Story</a></li>
              <li><a href="#craft" className="hover:text-terracotta transition-colors">What is Crochet</a></li>
              <li><a href="#evolution" className="hover:text-terracotta transition-colors">Evolution Timeline</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wider text-espresso-900 mb-3">Collections</h4>
            <ul className="space-y-2 text-espresso-600">
              <li><a href="#collections" className="hover:text-terracotta transition-colors">Curated Archive</a></li>
              <li><a href="#lines" className="hover:text-terracotta transition-colors">Product Spectrum</a></li>
              <li><a href="#process" className="hover:text-terracotta transition-colors">Craft Methodology</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wider text-espresso-900 mb-3">MBA Business</h4>
            <ul className="space-y-2 text-espresso-600">
              <li><a href="#mba-strategy" className="hover:text-terracotta transition-colors">Market & Economics</a></li>
              <li><a href="#business-model" className="hover:text-terracotta transition-colors">Value Chain Model</a></li>
              <li><a href="#sustainability" className="hover:text-terracotta transition-colors">Conscious ESG</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wider text-espresso-900 mb-3">Connect</h4>
            <ul className="space-y-2 text-espresso-600">
              <li>
                <a
                  href="https://instagram.com/kalapriti_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-terracotta transition-colors"
                >
                  <Instagram className="h-3.5 w-3.5 text-coral" />
                  <span>@kalapriti_</span>
                </a>
              </li>
              <li><span>Founder: Tisha Vaghasiya</span></li>
              <li><span>Exhibition Stall Activation</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-espresso-600">
          <p>© {new Date().getFullYear()} Kalapriti. Handcrafted with reverence in India.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Curated for MBA Capstone by <strong className="text-espresso-800">Tisha Vaghasiya</strong>
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
