import { useState, useEffect } from 'react';

/**
 * checkIsDesktopPointer
 * Determines if the current environment has a desktop/laptop-style fine pointing device
 * and desktop layout viewport width.
 *
 * Checks:
 * 1. (hover: hover) — Primary input can hover over elements.
 * 2. (pointer: fine) — Primary input is an accurate pointing device (mouse / trackpad).
 * 3. Viewport width >= 1024px (Tailwind lg breakpoint for desktop layout).
 */
export const checkIsDesktopPointer = (): boolean => {
  if (typeof window === 'undefined') return false;

  const hasHover = window.matchMedia('(hover: hover)').matches;
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
  const isDesktopViewport =
    window.matchMedia('(min-width: 1024px)').matches || window.innerWidth >= 1024;

  return hasHover && hasFinePointer && isDesktopViewport;
};

/**
 * useDesktopPointer
 * Reactive hook that tracks whether the client device currently has a desktop-style pointer
 * and desktop viewport. Safely updates when resizing or switching input capabilities.
 */
export const useDesktopPointer = (): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return checkIsDesktopPointer();
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateCapability = () => {
      setIsDesktop(checkIsDesktopPointer());
    };

    // Ensure immediate sync on mount
    updateCapability();

    const hoverQuery = window.matchMedia('(hover: hover)');
    const pointerQuery = window.matchMedia('(pointer: fine)');
    const widthQuery = window.matchMedia('(min-width: 1024px)');

    // Safe media query listener registration
    const addQueryListener = (q: MediaQueryList, fn: () => void) => {
      if (q.addEventListener) {
        q.addEventListener('change', fn);
      } else if ('addListener' in q) {
        // Fallback for older WebKit
        (q as unknown as { addListener: (listener: () => void) => void }).addListener(fn);
      }
    };

    const removeQueryListener = (q: MediaQueryList, fn: () => void) => {
      if (q.removeEventListener) {
        q.removeEventListener('change', fn);
      } else if ('removeListener' in q) {
        (q as unknown as { removeListener: (listener: () => void) => void }).removeListener(fn);
      }
    };

    addQueryListener(hoverQuery, updateCapability);
    addQueryListener(pointerQuery, updateCapability);
    addQueryListener(widthQuery, updateCapability);
    window.addEventListener('resize', updateCapability, { passive: true });

    return () => {
      removeQueryListener(hoverQuery, updateCapability);
      removeQueryListener(pointerQuery, updateCapability);
      removeQueryListener(widthQuery, updateCapability);
      window.removeEventListener('resize', updateCapability);
    };
  }, []);

  return isDesktop;
};
