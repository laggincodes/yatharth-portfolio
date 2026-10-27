import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDesktopPointer } from '../utils/useDesktopPointer';

/**
 * GingerCatIcon - Stylized ginger feline face for the upper-left trigger
 */
const GingerCatIcon: React.FC<{ size?: number; className?: string; active?: boolean }> = ({
  size = 22,
  className = '',
  active = false,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    {/* Ears */}
    <polygon points="6,14 10,4 16,11" fill="#E58B5C" stroke="#C96E40" strokeWidth="1.2" strokeLinejoin="round" />
    <polygon points="26,14 22,4 16,11" fill="#E58B5C" stroke="#C96E40" strokeWidth="1.2" strokeLinejoin="round" />
    {/* Inner pink ears */}
    <polygon points="8,12 11,6 15,11" fill="#F8B4C4" />
    <polygon points="24,12 21,6 17,11" fill="#F8B4C4" />
    {/* Head */}
    <ellipse cx="16" cy="18" rx="11" ry="9" fill="#E58B5C" stroke="#C96E40" strokeWidth="1.2" />
    {/* Tabby forehead stripes */}
    <path d="M16 11 L16 14" stroke="#C96E40" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M13 12 L14 15" stroke="#C96E40" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M19 12 L18 15" stroke="#C96E40" strokeWidth="1.2" strokeLinecap="round" />
    {/* Eyes */}
    <ellipse cx="12" cy="17" rx="1.6" ry={active ? 1.8 : 2} fill="#30212A" />
    <ellipse cx="20" cy="17" rx="1.6" ry={active ? 1.8 : 2} fill="#30212A" />
    <circle cx="12.5" cy="16.5" r="0.6" fill="#FBEAF0" />
    <circle cx="20.5" cy="16.5" r="0.6" fill="#FBEAF0" />
    {/* Cute Muzzle & Nose */}
    <ellipse cx="16" cy="21.5" rx="3.5" ry="2.2" fill="#FFE6D9" />
    <polygon points="15.2,20.2 16.8,20.2 16,21" fill="#D98BA8" />
    <path d="M16 21 L16 22 M16 22 C15.2 22.8 14.2 22.5 14 22 M16 22 C16.8 22.8 17.8 22.5 18 22" stroke="#30212A" strokeWidth="0.9" strokeLinecap="round" />
    {/* Whiskers */}
    <path d="M10 20 L4 19 M10 22 L4 23" stroke="#C96E40" strokeWidth="0.8" strokeLinecap="round" />
    <path d="M22 20 L28 19 M22 22 L28 23" stroke="#C96E40" strokeWidth="0.8" strokeLinecap="round" />
  </svg>
);

/**
 * GingerCompanionSprite - Beautiful SVG sprite of the follower cat with walking/resting states
 */
const GingerCompanionSprite: React.FC<{ isMoving: boolean; facingRight: boolean }> = ({
  isMoving,
  facingRight,
}) => {
  return (
    <div
      className="relative transition-transform duration-150 ease-out"
      style={{
        transform: `scaleX(${facingRight ? 1 : -1})`,
      }}
    >
      <svg
        width="44"
        height="40"
        viewBox="0 0 44 40"
        fill="none"
        className="drop-shadow-[0_4px_10px_rgba(201,110,64,0.3)] filter"
        aria-hidden="true"
      >
        {/* Animated Tail */}
        <motion.path
          d="M7 26 C2 24 0 16 4 12 C7 9 9 12 7 17 C6 20 8 23 10 25"
          stroke="#C96E40"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: isMoving
              ? [
                  'M7 26 C2 24 0 16 4 12 C7 9 9 12 7 17 C6 20 8 23 10 25',
                  'M7 26 C0 22 2 12 7 10 C10 8 11 13 8 17 C6 20 8 23 10 25',
                  'M7 26 C2 24 0 16 4 12 C7 9 9 12 7 17 C6 20 8 23 10 25',
                ]
              : [
                  'M7 26 C2 24 1 18 5 14 C7 11 9 14 7 18 C6 21 8 23 10 25',
                  'M7 26 C3 25 3 20 6 16 C8 13 9 15 7 19 C6 21 8 23 10 25',
                  'M7 26 C2 24 1 18 5 14 C7 11 9 14 7 18 C6 21 8 23 10 25',
                ],
          }}
          transition={{ duration: isMoving ? 0.6 : 2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Hind Paws */}
        <ellipse cx="12" cy="33" rx="3.5" ry="2.2" fill="#FFE6D9" stroke="#C96E40" strokeWidth="0.8" />
        
        {/* Cat Body */}
        <ellipse cx="20" cy="25" rx="12" ry="8" fill="#E58B5C" stroke="#C96E40" strokeWidth="1.2" />
        {/* Back Stripes */}
        <path d="M15 18 C16 21 16 24 15 27" stroke="#C96E40" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M19 18 C20 21 20 24 19 28" stroke="#C96E40" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M23 19 C24 22 24 25 23 28" stroke="#C96E40" strokeWidth="1.4" strokeLinecap="round" />

        {/* Front Chest & Paws */}
        <motion.ellipse
          cx="28"
          cy={isMoving ? 32 : 33}
          rx="3.2"
          ry="2.2"
          fill="#FFE6D9"
          stroke="#C96E40"
          strokeWidth="0.8"
          animate={{
            y: isMoving ? [-1.5, 1.5, -1.5] : 0,
          }}
          transition={{ duration: 0.35, repeat: Infinity }}
        />
        <motion.ellipse
          cx="22"
          cy={isMoving ? 33 : 33}
          rx="3.2"
          ry="2.2"
          fill="#FFE6D9"
          stroke="#C96E40"
          strokeWidth="0.8"
          animate={{
            y: isMoving ? [1.5, -1.5, 1.5] : 0,
          }}
          transition={{ duration: 0.35, repeat: Infinity }}
        />

        {/* Head */}
        <g transform="translate(18, 2)">
          {/* Ears */}
          <polygon points="4,10 7,2 11,8" fill="#E58B5C" stroke="#C96E40" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="18,10 15,2 11,8" fill="#E58B5C" stroke="#C96E40" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="5.5,8.5 7.5,4 10.5,7.5" fill="#F8B4C4" />
          <polygon points="16.5,8.5 14.5,4 11.5,7.5" fill="#F8B4C4" />
          {/* Face */}
          <ellipse cx="11" cy="13" rx="8" ry="6.8" fill="#E58B5C" stroke="#C96E40" strokeWidth="1" />
          {/* Eyes */}
          <ellipse cx="8" cy="12.5" rx="1.2" ry="1.5" fill="#30212A" />
          <ellipse cx="14" cy="12.5" rx="1.2" ry="1.5" fill="#30212A" />
          <circle cx="8.3" cy="12" r="0.4" fill="#FBEAF0" />
          <circle cx="14.3" cy="12" r="0.4" fill="#FBEAF0" />
          {/* Muzzle */}
          <ellipse cx="11" cy="15.8" rx="2.8" ry="1.8" fill="#FFE6D9" />
          <polygon points="10.3,14.8 11.7,14.8 11,15.5" fill="#D98BA8" />
          <path d="M11 15.5 L11 16.2 M11 16.2 C10.4 16.7 9.7 16.5 9.5 16.2 M11 16.2 C11.6 16.7 12.3 16.5 12.5 16.2" stroke="#30212A" strokeWidth="0.7" strokeLinecap="round" />
          {/* Whiskers */}
          <path d="M6 15 L2 14.5 M6 16.5 L2 17.5" stroke="#C96E40" strokeWidth="0.7" strokeLinecap="round" />
          <path d="M16 15 L20 14.5 M16 16.5 L20 17.5" stroke="#C96E40" strokeWidth="0.7" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

export const GingerCursorCat: React.FC = () => {
  const isDesktop = useDesktopPointer();
  const [isActive, setIsActive] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [facingRight, setFacingRight] = useState(true);

  // Smooth lerp coordinates for cursor follower
  const followerRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const lastTargetPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);
  const stillTimeoutId = useRef<number | null>(null);
  const toastTimeoutId = useRef<number | null>(null);

  // Detect reduced motion preference
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);
    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  // When switching away from desktop pointer, safely reset active state and clear timers
  useEffect(() => {
    if (!isDesktop) {
      setIsActive(false);
      setShowToast(false);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      if (stillTimeoutId.current) clearTimeout(stillTimeoutId.current);
      if (toastTimeoutId.current) clearTimeout(toastTimeoutId.current);
    }
  }, [isDesktop]);

  // Track mouse coordinates (Desktop only)
  useEffect(() => {
    if (!isDesktop || !isActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Offset slightly to bottom-right of cursor (+18px, +18px) so it never obscures the pointer
      targetPos.current = { x: e.clientX + 18, y: e.clientY + 18 };

      // Determine movement direction (facing)
      const dx = e.clientX + 18 - currentPos.current.x;
      if (Math.abs(dx) > 1.5) {
        setFacingRight(dx > 0);
      }

      setIsMoving(true);
      if (stillTimeoutId.current) clearTimeout(stillTimeoutId.current);
      stillTimeoutId.current = window.setTimeout(() => {
        setIsMoving(false);
      }, 180);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Initial position near viewport center if mouse hasn't moved yet
    if (currentPos.current.x === -100) {
      currentPos.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
      targetPos.current = { ...currentPos.current };
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (stillTimeoutId.current) clearTimeout(stillTimeoutId.current);
    };
  }, [isDesktop, isActive]);

  // Smooth Lerp Animation Loop (Desktop only)
  useEffect(() => {
    if (!isDesktop || !isActive) {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      return;
    }

    const animate = () => {
      // Linear interpolation: current += (target - current) * factor
      const lerpFactor = isReducedMotion ? 1 : 0.14;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      lastTargetPos.current = { ...targetPos.current };
      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isDesktop, isActive, isReducedMotion]);

  // Toggle companion
  const toggleActive = () => {
    setIsActive((prev) => {
      const next = !prev;
      if (next) {
        setShowToast(true);
        if (toastTimeoutId.current) clearTimeout(toastTimeoutId.current);
        toastTimeoutId.current = window.setTimeout(() => {
          setShowToast(false);
        }, 3200);
      } else {
        setShowToast(false);
      }
      return next;
    });
  };

  // On non-desktop devices with no fine pointer, do not render or track anything
  if (!isDesktop) return null;

  return (
    <>
      {/* Upper-Left Fixed Trigger Button (Desktop Only) */}
      <div className="hidden [@media(hover:hover)_and_(pointer:fine)]:lg:block fixed top-4 left-4 sm:top-5 sm:left-6 z-40 select-none">
        <div className="relative">
          <motion.button
            onClick={toggleActive}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            aria-label={isActive ? 'Dismiss ginger cat companion' : 'Summon ginger cat companion'}
            aria-pressed={isActive}
            title={
              isActive
                ? 'Ginger cat companion active (click to dismiss)'
                : 'Summon ginger cat companion'
            }
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-[#EFD0DC] dark:bg-[#382632] border-2 border-[#D98BA8] dark:border-[#E8A0BA] shadow-[0_0_12px_rgba(217,139,168,0.35)]'
                : 'bg-[#F8E6ED]/95 dark:bg-[#30212C]/95 border border-[#E3B9CA] dark:border-[#543746] hover:border-[#D98BA8] dark:hover:border-[#E8A0BA] text-[#30212A] dark:text-[#F7EAF0]'
            }`}
          >
            <GingerCatIcon size={22} active={isActive} />

            {/* Subtle active status indicator dot */}
            {isActive && (
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#D98BA8] border-2 border-[#F8E6ED] dark:border-[#30212C] rounded-full animate-pulse" />
            )}
          </motion.button>

          {/* Toast Notification on Activation */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, x: -10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute left-12 sm:left-14 top-1 w-56 sm:w-64 bg-[#F8E6ED]/95 dark:bg-[#30212C]/95 backdrop-blur-md border border-[#D98BA8]/60 dark:border-[#E8A0BA]/60 rounded-xl p-2.5 shadow-xl text-xs font-mono text-[#30212A] dark:text-[#F7EAF0] pointer-events-auto z-50"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">🐾</span>
                  <div className="leading-tight">
                    <span className="font-semibold text-[#9E526F] dark:text-[#E8A0BA] block text-[11px]">
                      Ginger Cat Summoned!
                    </span>
                    <p className="text-[10px] text-[#725965] dark:text-[#C6AFBB] mt-0.5">
                      Following your cursor smoothly across the studio.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Cursor Follower (Desktop only, strictly pointer-events-none) */}
      {isActive && (
        <div
          ref={followerRef}
          aria-hidden="true"
          className="hidden [@media(hover:hover)_and_(pointer:fine)]:lg:block fixed top-0 left-0 z-[99990] pointer-events-none select-none will-change-transform"
          style={{
            transform: `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`,
          }}
        >
          <GingerCompanionSprite isMoving={isMoving} facingRight={facingRight} />
        </div>
      )}
    </>
  );
};
