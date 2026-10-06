'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight, Sparkles, Briefcase } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export default function Navbar({ onOpenOrderModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Story', href: '#story' },
    { label: 'Craft', href: '#craft' },
    { label: 'Collections', href: '#collections' },
    { label: 'Process', href: '#process' },
    { label: 'MBA Case', href: '#mba-strategy', highlight: true },
    { label: 'Business Model', href: '#business-model' },
    { label: 'Sustainability', href: '#sustainability' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-parchment-50/90 backdrop-blur-md py-3 shadow-tactile border-b border-parchment-300/60'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 overflow-hidden rounded-full border border-parchment-300 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/logo.jpg"
                alt="Kalapriti Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial-heading text-xl sm:text-2xl font-bold tracking-tight text-espresso-900 leading-none">
                KALAPRITI
              </span>
              <span className="font-handwritten text-xs sm:text-sm text-terracotta leading-tight">
                कलाप्रिति • Loops of love
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-medium transition-colors ${
                  link.highlight
                    ? 'text-terracotta-dark font-semibold px-2.5 py-1 rounded-full bg-terracotta/10 border border-terracotta/20 hover:bg-terracotta/20'
                    : 'text-espresso-700 hover:text-terracotta'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: MBA Pitch Mode & Commission */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#mba-strategy"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-espresso-700 bg-parchment-200/80 border border-parchment-300 hover:bg-parchment-300 transition-colors"
            >
              <Briefcase className="h-3.5 w-3.5 text-terracotta" />
              <span>MBA Presentation</span>
            </a>
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-terracotta hover:bg-terracotta-dark shadow-sm transition-all duration-300 hover:shadow-glow-terracotta"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Commission</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenOrderModal}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-white bg-terracotta"
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
                className={`text-sm uppercase tracking-wider font-medium py-1.5 flex items-center justify-between ${
                  link.highlight ? 'text-terracotta font-semibold' : 'text-espresso-800'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-4 w-4 opacity-50" />
              </a>
            ))}
            <div className="pt-4 border-t border-parchment-200 flex flex-col gap-2.5">
              <a
                href="#mba-strategy"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-parchment-200 text-espresso-900 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Briefcase className="h-4 w-4 text-terracotta" /> MBA Strategic Case
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
