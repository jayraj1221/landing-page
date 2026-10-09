'use client';

import { useEffect } from 'react';

export default function PWACompanion() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Kalapriti Stall PWA Service Worker active:', registration.scope);
          })
          .catch((err) => {
            console.warn('Service worker registration skipped:', err);
          });
      });
    }
  }, []);

  return null;
}
