import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    // Desktop fine-pointer check
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerFine(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isReducedMotion = motionQuery.matches;

    let animationFrameId: number;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let initialized = false;
    let isVisible = false;

    // High-response interpolation for smooth 0-lag GPU transform updates
    const updatePosition = () => {
      if (initialized) {
        const lerpFactor = isReducedMotion ? 1.0 : 0.85;
        currentX += (targetX - currentX) * lerpFactor;
        currentY += (targetY - currentY) * lerpFactor;

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
        target.closest('a, button, [role="button"], input, textarea, select, article, .group') !== null;

      if (isInteractive && !isReducedMotion) {
        dotRef.current.style.transform = 'scale(1.4)';
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
      mediaQuery.removeEventListener('change', handleMediaChange);
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
      {/* Inner dot handles scale expansion independently without affecting outer position translate3d */}
      <div
        ref={dotRef}
        className="w-2.5 h-2.5 rounded-full bg-white shadow-sm transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          willChange: 'transform',
          transform: 'scale(1)',
        }}
      />
    </div>
  );
};
