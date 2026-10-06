'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight, Sparkles, Instagram, Heart } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export default function Navbar({ onOpenOrderModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Vision & Mission', href: '#vision' },
    { label: 'Our Story', href: '#story' },
    { label: 'Creations', href: '#creations' },
    { label: 'The Craft', href: '#craft' },
    { label: 'Follow Us', href: '#instagram' },
    { label: 'Founder & Contact', href: '#founder' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-parchment-50/95 backdrop-blur-md py-2.5 shadow-tactile border-b border-parchment-300/70'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name - Prominent and Distinct */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden border-2 border-terracotta/30 shadow-md ring-2 ring-terracotta/10 group-hover:scale-105 transition-all duration-300 bg-white flex-shrink-0">
              <Image
                src="/assets/logo.jpg"
                alt="Kalapriti Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-editorial-heading text-xl sm:text-2xl font-bold tracking-tight text-espresso-900 leading-none">
                  KALAPRITI
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-terracotta/10 text-terracotta border border-terracotta/20">
                  कलाप्रिति
                </span>
              </div>
              <span className="font-handwritten text-xs sm:text-sm text-terracotta-dark leading-tight mt-0.5">
                Loops of love, from hands to heart
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium text-espresso-700 hover:text-terracotta transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Instagram & Custom Order */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.instagram.com/kalapriti_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-espresso-700 bg-parchment-200/90 border border-parchment-300 hover:bg-parchment-300 transition-colors"
            >
              <Instagram className="h-3.5 w-3.5 text-coral" />
              <span>@kalapriti_</span>
            </a>
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-terracotta hover:bg-terracotta-dark shadow-sm transition-all duration-300 hover:shadow-glow-terracotta"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Custom Order</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenOrderModal}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-white bg-terracotta shadow-sm"
            >
              Order
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-espresso-800 hover:bg-parchment-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-parchment-50/98 backdrop-blur-xl border-b border-parchment-300 px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider font-medium py-1.5 flex items-center justify-between text-espresso-800 hover:text-terracotta transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-4 w-4 opacity-50" />
              </a>
            ))}
            <div className="pt-4 border-t border-parchment-200 flex flex-col gap-2.5">
              <a
                href="https://www.instagram.com/kalapriti_/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-parchment-200 text-espresso-900 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Instagram className="h-4 w-4 text-coral" /> Follow @kalapriti_
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full py-2.5 rounded-xl bg-terracotta text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
              >
                <Sparkles className="h-4 w-4" /> Commission Custom Piece
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
