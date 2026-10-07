'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function CraftSoundscape() {
  const [isEnabled, setIsEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const initAudio = () => {
    if (!audioCtxRef.current && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const playWoodenClick = () => {
    if (!isEnabled || !audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Ignore
    }
  };

  const playChime = () => {
    if (!isEnabled || !audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const freqs = [523.25, 659.25, 783.99]; // C5, E5, G5 major triad
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.06);

        gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.06 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.06);
        osc.stop(ctx.currentTime + idx * 0.06 + 0.4);
      });
    } catch {
      // Ignore
    }
  };

  const toggleSound = () => {
    if (!isEnabled) {
      initAudio();
      setIsEnabled(true);
      setTimeout(() => playChime(), 100);
    } else {
      setIsEnabled(false);
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
        playWoodenClick();
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
