'use client';

import { useState, useEffect } from 'react';

export interface DeviceTiltState {
  tiltX: number; // -1 to 1
  tiltY: number; // -1 to 1
  isSupported: boolean;
  isActive: boolean;
}

export function useDeviceTilt(): DeviceTiltState {
  const [tilt, setTilt] = useState<DeviceTiltState>({
    tiltX: 0,
    tiltY: 0,
    isSupported: false,
    isActive: false,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect reduced motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (!window.DeviceOrientationEvent) return;

    let hasReceivedData = false;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;
      hasReceivedData = true;

      // gamma is left-to-right (-90 to 90)
      // beta is front-to-back (-180 to 180)
      const clampedGamma = Math.max(-45, Math.min(45, e.gamma));
      const clampedBeta = Math.max(-45, Math.min(45, e.beta - 45)); // assume ~45 deg reading angle

      setTilt({
        tiltX: clampedGamma / 45,
        tiltY: clampedBeta / 45,
        isSupported: true,
        isActive: true,
      });
    };

    window.addEventListener('deviceorientation', handleOrientation, { passive: true });

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return tilt;
}
