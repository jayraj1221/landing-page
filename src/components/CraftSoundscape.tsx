'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { proceduralAudio } from '@/utils/proceduralAudio';
import { triggerHaptic } from '@/utils/haptics';
import { useToast } from './ModernToast';

export default function CraftSoundscape() {
  const [isEnabled, setIsEnabled] = useState(false);
  const { showToast } = useToast();

  const toggleSound = () => {
    const nextState = !isEnabled;
    setIsEnabled(nextState);
    proceduralAudio.setMuted(!nextState);
    triggerHaptic('medium');

    if (nextState) {
      proceduralAudio.playCraftChime(659.25);
      showToast('Tactile ASMR Enabled 🎧', 'Experience synthesized wooden hook taps and thread sounds', 'sparkle');
    } else {
      showToast('Sound Muted', undefined, 'info');
    }
  };

  useEffect(() => {
    if (!isEnabled) return;

    // Attach click listener for buttons across document to make wooden crochet hook click
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('button') || target.closest('a') || target.closest('[role="button"]'))
      ) {
        proceduralAudio.playWoodenHookClick();
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [isEnabled]);

  return (
    <div className="fixed top-20 left-4 sm:left-8 z-40">
      <button
        onClick={toggleSound}
        className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border shadow-lg flex items-center gap-1.5 transition-all ${
          isEnabled
            ? 'bg-terracotta text-white border-terracotta scale-105'
            : 'bg-white/90 text-espresso-700 border-parchment-300 hover:bg-white'
        }`}
        title={isEnabled ? 'Mute Craft Soundscape' : 'Enable Wooden Hook ASMR & Chimes'}
        aria-label="Toggle Craft Soundscape"
      >
        {isEnabled ? (
          <>
            <Volume2 className="h-3.5 w-3.5 animate-pulse" />
            <span className="text-[10px] uppercase tracking-wider font-bold">ASMR ON</span>
          </>
        ) : (
          <>
            <VolumeX className="h-3.5 w-3.5 text-espresso-500" />
            <span className="text-[10px] uppercase tracking-wider">Sound</span>
          </>
        )}
      </button>
    </div>
  );
}
