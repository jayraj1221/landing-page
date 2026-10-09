/**
 * View Transitions API Progressive Enhancement Helper
 * Adheres to Modern Web Guidance:
 * - Checks feature detection (`document.startViewTransition`)
 * - Respects `prefers-reduced-motion`
 * - Supports focus management / routing
 */

export interface ViewTransitionOptions {
  focusElementId?: string;
  skipIfReducedMotion?: boolean;
}

export function executeViewTransition(
  updateCallback: () => void | Promise<void>,
  options?: ViewTransitionOptions
): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve(updateCallback());
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const shouldSkipAnimation = options?.skipIfReducedMotion && prefersReducedMotion;

  // Fallback if unsupported or user prefers reduced motion
  if (
    shouldSkipAnimation ||
    !('startViewTransition' in document) ||
    typeof (document as any).startViewTransition !== 'function'
  ) {
    const res = updateCallback();
    if (options?.focusElementId) {
      setTimeout(() => {
        document.getElementById(options.focusElementId!)?.focus();
      }, 0);
    }
    return Promise.resolve(res);
  }

  try {
    const transition = (document as any).startViewTransition(async () => {
      await updateCallback();
    });

    if (options?.focusElementId) {
      transition.finished.finally(() => {
        document.getElementById(options.focusElementId!)?.focus();
      });
    }

    return transition.finished;
  } catch (err) {
    // Graceful fallback if anything fails during transition setup
    updateCallback();
    return Promise.resolve();
  }
}
