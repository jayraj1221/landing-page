'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Heart, Instagram, Sparkles, CheckCircle2, Copy, Check, ArrowUpRight, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OrderInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialDetails?: string;
}

export default function OrderInquiryModal({
  isOpen,
  onClose,
  initialCategory = 'Custom Portrait Doll',
  initialDetails = '',
}: OrderInquiryModalProps) {
  const [category, setCategory] = useState(initialCategory);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState(initialDetails);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');

  // Sync initial values when modal opens
  useEffect(() => {
    if (isOpen) {
      if (initialCategory) setCategory(initialCategory);
      if (initialDetails) setDetails(initialDetails);
    }
  }, [isOpen, initialCategory, initialDetails]);

  const composeOrderMessage = () => {
    return `Hi Kalapriti! 🧶 I would like to place an order inquiry:

✨ Collection: ${category}
👤 Name: ${name.trim()}
📞 Contact / WhatsApp: ${phone.trim()}
📝 Details: ${details.trim() || 'Custom handmade order inquiry'}

(Sent from Kalapriti Website)`;
  };

  const copyToClipboard = (text: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }).catch(() => {});
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const orderText = composeOrderMessage();
    setGeneratedMessage(orderText);

    // Official Instagram Direct Link with pre-filled message parameter
    const encodedText = encodeURIComponent(orderText);
    const igDmUrl = `https://ig.me/m/kalapriti_?text=${encodedText}`;
    setInstagramUrl(igDmUrl);

    // Copy to clipboard automatically for guaranteed paste in Instagram app
    copyToClipboard(orderText);

    // Automatically trigger Instagram DM redirection
    try {
      window.open(igDmUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Handled by UI button if popup blocker intercepts
    }

    setSubmitted(true);

    try {
      confetti({
        particleCount: 75,
        spread: 85,
        origin: { y: 0.6 },
        colors: ['#D97752', '#8B9E6E', '#F07073', '#DE9B26', '#E1306C'],
      });
    } catch {
      // Confetti fallback
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setCopied(false);
    onClose();
  };

  const whatsAppFallbackUrl = `https://wa.me/?text=${encodeURIComponent(generatedMessage)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
            className="relative w-full max-w-lg rounded-3xl bg-parchment-50 p-6 sm:p-8 shadow-2xl border border-parchment-300 text-espresso-900 overflow-hidden my-auto"
          >
            {/* Organic top accent */}
            <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-terracotta/15 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-sage/15 blur-2xl pointer-events-none" />

            {/* Close button */}
            <button
              onClick={resetAndClose}
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-2 rounded-full text-espresso-600 hover:text-espresso-900 hover:bg-parchment-200 transition-colors z-10"
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
                    Order via Instagram DM
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-espresso-600">
                    Fill in your details below. We will format your order and redirect you directly to <span className="font-semibold text-terracotta">@kalapriti_</span> on Instagram DM!
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
                      <option value="Festive & Gifting">Festive Hampers, Rakhis & Celebration Gifting</option>
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
                      placeholder="Describe the occasion, colors, clothing style, photo reference, or special request..."
                      className="w-full rounded-xl border border-parchment-300 bg-white px-4 py-2.5 text-sm text-espresso-900 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-terracotta via-[#E1306C] to-terracotta-dark px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-md hover:opacity-95 transition-all hover:scale-[1.01]"
                    >
                      <Instagram className="h-4 w-4" />
                      <span>Send Order to Instagram DM</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <p className="text-[11px] text-center text-espresso-600 mt-2">
                      ✦ Automatically fills your order details & opens chat with @kalapriti_
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-4 sm:py-6 space-y-5">
                {/* Header confirmation */}
                <div className="text-center space-y-2">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-lg">
                    <Instagram className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-editorial-heading font-medium text-espresso-900 pt-1">
                    Order Ready for Instagram!
                  </h3>
                  <p className="text-xs sm:text-sm text-espresso-700 max-w-sm mx-auto">
                    We've opened Instagram DM and copied your formatted order details to your clipboard.
                  </p>
                </div>

                {/* Formatted Message Preview Card */}
                <div className="relative rounded-2xl bg-white border border-parchment-300 p-4 shadow-inner text-left">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-parchment-200 text-xs">
                    <span className="font-semibold uppercase tracking-wider text-terracotta-dark">
                      Pre-filled Order Message
                    </span>
                    <button
                      onClick={() => copyToClipboard(generatedMessage)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-parchment-100 hover:bg-parchment-200 text-espresso-800 text-[11px] font-medium transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3 w-3 text-sage-dark" />
                          <span className="text-sage-dark font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 text-espresso-600" />
                          <span>Copy Message</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="font-sans text-xs text-espresso-800 whitespace-pre-wrap leading-relaxed select-all">
                    {generatedMessage}
                  </pre>
                </div>

                {/* Helpful instructions for Instagram */}
                <div className="p-3 rounded-xl bg-peach/25 border border-terracotta/20 text-xs text-espresso-800 flex items-start gap-2.5">
                  <span className="text-base flex-shrink-0">💡</span>
                  <p className="leading-snug">
                    <strong>Quick Tip:</strong> If the Instagram app opens without inserting the text automatically into your chat, simply <strong>Paste</strong> and send! The text is already on your clipboard.
                  </p>
                </div>

                {/* Actions */}
                <div className="space-y-2.5 pt-1">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:opacity-95 transition-all hover:scale-[1.01]"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>Open Instagram DM (@kalapriti_)</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <div className="flex items-center gap-2">
                    <a
                      href={whatsAppFallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-sage/40 bg-sage/10 py-2.5 text-xs font-medium text-sage-dark hover:bg-sage/20 transition-colors"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Send on WhatsApp</span>
                    </a>

                    <button
                      onClick={resetAndClose}
                      className="flex-1 py-2.5 rounded-xl border border-parchment-300 bg-white text-espresso-700 text-xs font-medium hover:bg-parchment-100 transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
