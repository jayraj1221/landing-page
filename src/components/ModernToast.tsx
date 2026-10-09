'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, Share2, Info } from 'lucide-react';
import { triggerHaptic } from '@/utils/haptics';
import { proceduralAudio } from '@/utils/proceduralAudio';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  icon?: 'check' | 'share' | 'sparkle' | 'info';
}

interface ToastContextType {
  showToast: (title: string, description?: string, icon?: ToastMessage['icon']) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((title: string, description?: string, icon: ToastMessage['icon'] = 'check') => {
    const id = Math.random().toString(36).slice(2, 9);
    setToasts((prev) => [...prev.slice(-2), { id, title, description, icon }]);

    triggerHaptic('light');
    proceduralAudio.playCraftChime(880);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Floating Modern Toast Stack */}
      <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="pointer-events-auto bg-parchment-50/95 backdrop-blur-md border border-parchment-300/90 shadow-tactile rounded-2xl p-3.5 flex items-start gap-3 text-espresso-900 border-l-4 border-l-terracotta"
            >
              <div className="p-1.5 rounded-xl bg-terracotta/10 text-terracotta flex-shrink-0 mt-0.5">
                {toast.icon === 'share' && <Share2 className="w-4 h-4" />}
                {toast.icon === 'sparkle' && <Sparkles className="w-4 h-4" />}
                {toast.icon === 'info' && <Info className="w-4 h-4" />}
                {(!toast.icon || toast.icon === 'check') && <Check className="w-4 h-4" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-espresso-900">{toast.title}</p>
                {toast.description && (
                  <p className="text-[11px] text-espresso-600 font-normal mt-0.5 leading-snug">
                    {toast.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    return {
      showToast: () => {},
    };
  }
  return ctx;
}
