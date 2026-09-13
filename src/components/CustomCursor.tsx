import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    // Desktop fine-pointer check: strictly disabled on touch devices and viewports < 768px
    const checkIsFineDesktop = () => {
      const hasFine = window.matchMedia('(pointer: fine)').matches;
      const hasCoarse = window.matchMedia('(pointer: coarse)').matches;
      return hasFine && !hasCoarse && window.innerWidth >= 768;
    };

    const isDesktopPointer = checkIsFineDesktop();
    setIsPointerFine(isDesktopPointer);
    if (isDesktopPointer) {
      document.documentElement.classList.add('has-custom-cursor');
    } else {
      document.documentElement.classList.remove('has-custom-cursor');
    }

    const handleMediaChange = () => {
      const isFine = checkIsFineDesktop();
      setIsPointerFine(isFine);
      if (isFine) {
        document.documentElement.classList.add('has-custom-cursor');
      } else {
        document.documentElement.classList.remove('has-custom-cursor');
      }
    };

    const mediaQueryFine = window.matchMedia('(pointer: fine)');
    const mediaQueryCoarse = window.matchMedia('(pointer: coarse)');

    mediaQueryFine.addEventListener('change', handleMediaChange);
    mediaQueryCoarse.addEventListener('change', handleMediaChange);
    window.addEventListener('resize', handleMediaChange);

    if (!isDesktopPointer) {
      return () => {
        document.documentElement.classList.remove('has-custom-cursor');
        mediaQueryFine.removeEventListener('change', handleMediaChange);
        mediaQueryCoarse.removeEventListener('change', handleMediaChange);
        window.removeEventListener('resize', handleMediaChange);
      };
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isReducedMotion = motionQuery.matches;

    let animationFrameId: number;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let initialized = false;
    let isVisible = false;

    // High-performance 1:1 direct GPU transform tracking (0 lag)
    const updatePosition = () => {
      if (initialized) {
        currentX = targetX;
        currentY = targetY;

        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        }
      }
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!initialized) {
        initialized = true;
        currentX = e.clientX;
        currentY = e.clientY;
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        }
      }

      if (!isVisible && cursorRef.current) {
        isVisible = true;
        cursorRef.current.style.opacity = '1';
      }
    };

    const handlePointerLeave = () => {
      isVisible = false;
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
    };

    const handlePointerEnter = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!initialized) {
        initialized = true;
        currentX = e.clientX;
        currentY = e.clientY;
      }
      isVisible = true;
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
    };

    // Toggle scale ONLY on inner dot element so position translate3d is NEVER transition-animated
    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (!target || !dotRef.current) return;

      const isInteractive =
        target.closest('a, button, [role="button"], input, textarea, select, article, .group, .cursor-pointer, [data-cursor="pointer"]') !== null;

      if (isInteractive && !isReducedMotion) {
        dotRef.current.style.transform = 'scale(1.25)';
      } else {
        dotRef.current.style.transform = 'scale(1)';
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('pointerenter', handlePointerEnter);
    window.addEventListener('pointerover', handlePointerOver, { passive: true });

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      mediaQueryFine.removeEventListener('change', handleMediaChange);
      mediaQueryCoarse.removeEventListener('change', handleMediaChange);
      window.removeEventListener('resize', handleMediaChange);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('pointerenter', handlePointerEnter);
      window.removeEventListener('pointerover', handlePointerOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isPointerFine) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[99999] select-none opacity-0"
      style={{
        willChange: 'transform',
        transform: 'translate3d(-1000px, -1000px, 0)',
      }}
    >
      {/* 14px small solid circle (dark in light mode, solid white in dark mode) */}
      <div
        ref={dotRef}
        className="w-3.5 h-3.5 rounded-full bg-[#171A1D] dark:bg-white border border-black/15 dark:border-white/20 shadow-xs dark:shadow-none transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          willChange: 'transform',
          transform: 'scale(1)',
        }}
      />
    </div>
  );
};
