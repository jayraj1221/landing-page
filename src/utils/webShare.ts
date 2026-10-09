/**
 * Modern Web Share & Clipboard API Utility
 * Uses native OS sharing sheet on mobile (WhatsApp, Instagram, AirDrop)
 * and falls back to modern async Clipboard API on desktop.
 */

export interface ShareDataPayload {
  title: string;
  text: string;
  url?: string;
}

export type ShareResult = 'shared' | 'copied' | 'cancelled' | 'failed';

export async function shareOrCopy(payload: ShareDataPayload): Promise<{ result: ShareResult; message: string }> {
  if (typeof window === 'undefined') {
    return { result: 'failed', message: 'Not in a browser context' };
  }

  const shareUrl = payload.url || window.location.href;

  // 1. Try Native Web Share API (Primary mobile experience)
  if (navigator.share && navigator.canShare && navigator.canShare({ title: payload.title, text: payload.text, url: shareUrl })) {
    try {
      await navigator.share({
        title: payload.title,
        text: payload.text,
        url: shareUrl,
      });
      return { result: 'shared', message: 'Shared successfully!' };
    } catch (err: any) {
      if (err.name === 'AbortError') {
        return { result: 'cancelled', message: 'Share dismissed' };
      }
      // If user declined or error occurred, proceed to clipboard fallback
    }
  }

  // 2. Clipboard API Fallback (Standard desktop/laptop experience)
  try {
    const textToCopy = `${payload.title}\n${payload.text}\n${shareUrl}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(textToCopy);
      return { result: 'copied', message: 'Copied link to clipboard!' };
    } else {
      // Legacy fallback
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return { result: 'copied', message: 'Copied link to clipboard!' };
    }
  } catch (err) {
    return { result: 'failed', message: 'Could not copy link' };
  }
}
