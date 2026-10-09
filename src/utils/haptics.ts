/**
 * Web Vibration / Tactile Haptics API Utility
 * Provides subtle physical micro-feedback on supported touch devices (Android, modern mobile browsers)
 * with graceful no-op degradation on unsupported platforms.
 */

export type HapticType = 'selection' | 'light' | 'medium' | 'heavy' | 'success' | 'celebration';

const HAPTIC_PATTERNS: Record<HapticType, number | number[]> = {
  selection: 12,
  light: 22,
  medium: 45,
  heavy: 75,
  success: [25, 40, 50],
  celebration: [40, 50, 40, 50, 90],
};

export function triggerHaptic(type: HapticType = 'light'): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    if ('vibrate' in navigator && typeof navigator.vibrate === 'function') {
      const pattern = HAPTIC_PATTERNS[type] ?? 20;
      return navigator.vibrate(pattern);
    }
  } catch (err) {
    // Suppress if permissions or device policies disallow vibration
  }
  
  return false;
}
