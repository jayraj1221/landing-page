'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Instagram,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  ArrowUpRight,
  MessageCircle,
  Share2,
  ExternalLink,
} from 'lucide-react';
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
  const [channelUsed, setChannelUsed] = useState<'instagram' | 'whatsapp'>('instagram');
  const [copied, setCopied] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');

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
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        })
        .catch(() => {
          fallbackCopyText(text);
        });
    } else {
      fallbackCopyText(text);
    }
  };

  const fallbackCopyText = (text: string) => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch {
      // Ignore fallback error
    }
  };

  const triggerConfetti = () => {
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

  const handleInstagramSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Please provide your name and contact phone number.');
      return;
    }

    const orderText = composeOrderMessage();
    setGeneratedMessage(orderText);
    setChannelUsed('instagram');

    // Automatically copy formatted message to clipboard
    copyToClipboard(orderText);
    setSubmitted(true);
    triggerConfetti();
  };

  const handleWhatsAppSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Please provide your name and contact phone number.');
      return;
    }

    const orderText = composeOrderMessage();
    setGeneratedMessage(orderText);
    setChannelUsed('whatsapp');

    copyToClipboard(orderText);

    // Direct WhatsApp pre-fill URL
    const encodedText = encodeURIComponent(orderText);
    const waUrl = `https://api.whatsapp.com/send?text=${encodedText}`;

    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Fallback
    }

    setSubmitted(true);
    triggerConfetti();
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Kalapriti Custom Order Inquiry',
          text: generatedMessage,
        });
      } catch {
        // Share dismissed
      }
    } else {
      copyToClipboard(generatedMessage);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setCopied(false);
    onClose();
  };

  const igDmUrl = 'https://ig.me/m/kalapriti_';
  const whatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(generatedMessage)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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
            className="relative w-full max-w-lg rounded-3xl bg-parchment-50 p-5 sm:p-8 shadow-2xl border border-parchment-300 text-espresso-900 overflow-hidden my-auto max-h-[92vh] flex flex-col justify-between"
          >
            {/* Organic top accent */}
            <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-terracotta/15 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-sage/15 blur-2xl pointer-events-none" />

            {/* Close button */}
            <button
              onClick={resetAndClose}
              aria-label="Close dialog"
              className="absolute top-4 right-4 p-2 rounded-full text-espresso-600 hover:text-espresso-900 hover:bg-parchment-200 transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <div className="overflow-y-auto pr-1">
                <div className="mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-terracotta/10 text-terracotta-dark">
                    <Sparkles className="h-3.5 w-3.5" /> Handcrafted Commission
                  </span>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-editorial-heading font-medium text-espresso-900">
                    Custom Order Inquiry
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-espresso-600">
                    Connect directly with <strong className="text-espresso-800">Kalapriti</strong> on Instagram DM or WhatsApp. Fill your details below to get started.
                  </p>
                </div>

                <form className="space-y-4">
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
                        Your Name *
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
                        WhatsApp / Phone *
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

                  {/* Dual Action Buttons: Instagram DM or WhatsApp */}
                  <div className="pt-2 space-y-2.5">
                    {/* Instagram DM Button */}
                    <button
                      type="button"
                      onClick={handleInstagramSubmit}
                      className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-terracotta via-[#E1306C] to-terracotta-dark px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-md hover:opacity-95 transition-all hover:scale-[1.01]"
                    >
                      <Instagram className="h-4 w-4" />
                      <span>Order via Instagram DM</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <p className="text-[11px] text-center text-espresso-600">
                      📋 Copies your formatted order to clipboard so you can paste directly into @kalapriti_'s DM
                    </p>

                    {/* Divider */}
                    <div className="flex items-center gap-2 py-1">
                      <div className="h-[1px] flex-1 bg-parchment-300" />
                      <span className="text-[10px] uppercase font-bold text-espresso-500 tracking-wider">or instant 1-tap auto-fill</span>
                      <div className="h-[1px] flex-1 bg-parchment-300" />
                    </div>

                    {/* WhatsApp Button */}
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-sage/60 bg-sage/15 hover:bg-sage/25 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-sage-dark transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Send via WhatsApp (Auto-Fills Directly)</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                    <p className="text-[10px] text-center text-espresso-600">
                      ⚡ Opens WhatsApp with the entire order already pre-filled in your chat box!
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-2 space-y-4 overflow-y-auto pr-1">
                {/* Header confirmation */}
                <div className="text-center space-y-2">
                  <div className="mx-auto flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-lg p-3">
                    {channelUsed === 'instagram' ? (
                      <Instagram className="h-7 w-7" />
                    ) : (
                      <CheckCircle2 className="h-7 w-7" />
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-editorial-heading font-medium text-espresso-900 pt-1">
                    Order Details Ready!
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/20 text-sage-dark text-xs font-semibold">
                    <Check className="h-3.5 w-3.5" />
                    <span>Copied to your clipboard</span>
                  </div>
                </div>

                {/* Formatted Message Preview Card */}
                <div className="relative rounded-2xl bg-white border border-parchment-300 p-3.5 shadow-inner text-left">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-parchment-200 text-xs">
                    <span className="font-semibold uppercase tracking-wider text-terracotta-dark text-[11px]">
                      Your Formatted Order:
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
                          <span>Copy Again</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="font-sans text-xs text-espresso-800 whitespace-pre-wrap leading-relaxed select-all max-h-36 overflow-y-auto">
                    {generatedMessage}
                  </pre>
                </div>

                {/* Clear Instruction Card explaining Instagram platform restriction */}
                <div className="p-3.5 rounded-2xl bg-peach/20 border border-terracotta/25 text-xs text-espresso-800 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-semibold text-terracotta-dark">
                    <span>💡</span>
                    <span>How to send in Instagram DM:</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-espresso-700">
                    Instagram's privacy policy does not allow websites to automatically type into your DM text box. Because of this, your order has been <strong>automatically copied to your clipboard</strong>.
                  </p>
                  <div className="pt-1 text-[11px] font-medium text-espresso-900 bg-white/70 p-2 rounded-lg border border-parchment-300">
                    👉 <strong>Step 1:</strong> Tap &ldquo;Open Instagram DM&rdquo; below<br />
                    👉 <strong>Step 2:</strong> In the message box, <strong>press &amp; hold (Paste)</strong> and tap Send!
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2.5 pt-1">
                  <a
                    href={igDmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:opacity-95 transition-all hover:scale-[1.01]"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>Open Instagram DM (@kalapriti_) &amp; Paste</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-sage/40 bg-sage/10 py-2.5 text-xs font-medium text-sage-dark hover:bg-sage/20 transition-colors"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Send on WhatsApp (Auto-Filled)</span>
                    </a>

                    <button
                      onClick={handleNativeShare}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-parchment-300 bg-white py-2.5 text-xs font-medium text-espresso-800 hover:bg-parchment-100 transition-colors"
                    >
                      <Share2 className="h-3.5 w-3.5 text-terracotta" />
                      <span>Share Message...</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center pt-1">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-espresso-600 hover:text-terracotta underline transition-colors"
                    >
                      ← Edit details
                    </button>
                    <span className="mx-2 text-espresso-400">•</span>
                    <button
                      onClick={resetAndClose}
                      className="text-xs text-espresso-600 hover:text-espresso-900 underline transition-colors"
                    >
                      Close window
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
