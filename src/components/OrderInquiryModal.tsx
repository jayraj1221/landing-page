'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Heart, Instagram, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OrderInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export default function OrderInquiryModal({
  isOpen,
  onClose,
  initialCategory = 'Custom Portrait Doll',
}: OrderInquiryModalProps) {
  const [category, setCategory] = useState(initialCategory);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D97752', '#8B9E6E', '#F07073', '#DE9B26'],
      });
    } catch {
      // Confetti fallback
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-espresso-900/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-3xl bg-parchment-50 p-6 sm:p-8 shadow-2xl border border-parchment-300 text-espresso-900 overflow-hidden"
          >
            {/* Organic top accent */}
            <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-terracotta/15 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-sage/15 blur-2xl pointer-events-none" />

            {/* Close button */}
            <button
              onClick={resetAndClose}
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-2 rounded-full text-espresso-600 hover:text-espresso-900 hover:bg-parchment-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-terracotta/10 text-terracotta-dark">
                    <Sparkles className="h-3.5 w-3.5" /> Handcrafted Commission
                  </span>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-editorial-heading font-medium text-espresso-900">
                    Commission a Handwoven Heirloom
                  </h3>
                  <p className="mt-1 text-sm text-espresso-600">
                    Connect directly with founder <span className="font-semibold text-espresso-800">Tisha Vaghasiya</span> to bring your cherished memory or custom crochet piece into reality.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                      Choose Collection / Commission Type
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full rounded-xl border border-parchment-300 bg-white px-4 py-2.5 text-sm text-espresso-900 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta"
                    >
                      <option value="Custom Portrait Doll">Custom Portrait Doll (From Photo/Polaroid)</option>
                      <option value="Spiritual Idols">Sacred Spiritual Idols (Jagannath, Ganesha, Hanumanji)</option>
                      <option value="Everlasting Bouquets">Everlasting Bouquets & Floral Blooms</option>
                      <option value="Haute Couture Wearables">Haute Wearables, Bags & Granny Square Totes</option>
                      <option value="Hello Baby Nursery">Hello Baby Organic Rompers & Nursery Mobiles</option>
                      <option value="Custom Corporate / Bulk">Corporate Gifting & Wedding Favors (Bulk)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Aanya Patel"
                        className="w-full rounded-xl border border-parchment-300 bg-white px-4 py-2.5 text-sm text-espresso-900 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                        WhatsApp / Contact
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-parchment-300 bg-white px-4 py-2.5 text-sm text-espresso-900 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                      Tell Us About Your Vision / Details
                    </label>
                    <textarea
                      rows={3}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Describe the occasion, colors, clothing style, or photo reference you have in mind..."
                      className="w-full rounded-xl border border-parchment-300 bg-white px-4 py-2.5 text-sm text-espresso-900 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-terracotta px-5 py-3 text-sm font-medium text-white shadow-md hover:bg-terracotta-dark transition-colors"
                    >
                      <Send className="h-4 w-4" /> Send Commission Request
                    </button>
                    <a
                      href="https://instagram.com/kalapriti_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-parchment-300 bg-white px-4 py-3 text-sm font-medium text-espresso-800 hover:bg-parchment-100 transition-colors"
                    >
                      <Instagram className="h-4 w-4 text-coral" /> DM on IG
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 sm:py-8 space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage/20 text-sage-dark">
                  <CheckCircle2 className="h-10 w-10 text-sage" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-editorial-heading font-medium text-espresso-900">
                  Thank You, {name || 'Friend'}!
                </h3>
                <p className="text-sm text-espresso-600 max-w-sm mx-auto">
                  Your interest in <strong className="text-espresso-800">Kalapriti</strong> has been received with warmth. Tisha will reach out to connect on your custom <span className="text-terracotta font-medium">{category}</span> shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://instagram.com/kalapriti_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-espresso-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-espresso-800 transition-colors"
                  >
                    <Instagram className="h-4 w-4 text-coral" /> Visit @kalapriti_
                  </a>
                  <button
                    onClick={resetAndClose}
                    className="w-full sm:w-auto rounded-xl border border-parchment-300 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-espresso-700 hover:bg-parchment-100 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
