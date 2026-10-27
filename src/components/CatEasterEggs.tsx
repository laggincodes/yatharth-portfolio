import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import { CatPawIcon } from './Icons';
import { EVENT_OPEN_SECRET_PAW, EVENT_CURIOUS_CAT_UNLOCKED } from '../utils/easterEggs';
import { useDesktopPointer } from '../utils/useDesktopPointer';

/**
 * Easter Egg: The Secret Paw Modal
 * Triggered by clicking the subtle paw ornament in the footer or via event.
 */
const SecretPawModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener(EVENT_OPEN_SECRET_PAW, handleOpen);
    return () => window.removeEventListener(EVENT_OPEN_SECRET_PAW, handleOpen);
  }, []);

  // Keyboard accessibility: Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="hidden [@media(hover:hover)_and_(pointer:fine)]:lg:flex fixed inset-0 z-[10001] items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#211820]/75 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-md bg-[#F8E6ED] dark:bg-[#30212C] border border-[#E3B9CA] dark:border-[#543746] rounded-2xl p-6 sm:p-7 shadow-2xl z-10 text-[#30212A] dark:text-[#F7EAF0] space-y-5"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#E3B9CA] dark:border-[#543746] pb-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9E526F] dark:text-[#E8A0BA]">
                <CatPawIcon size={14} className="text-[#9E526F] dark:text-[#E8A0BA]" />
                <span className="font-semibold">Curious Explorer Dossier</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-[#EFD0DC] dark:bg-[#382632] border border-[#E3B9CA] dark:border-[#543746] hover:border-[#D98BA8] flex items-center justify-center text-[#725965] dark:text-[#C6AFBB] hover:text-[#30212A] dark:hover:text-[#F7EAF0] transition-colors cursor-pointer"
                aria-label="Close secret dossier"
              >
                <X size={14} />
              </button>
            </div>

            {/* Illustration */}
            <div className="w-full flex items-center justify-center py-2">
              <svg
                className="w-24 h-20 text-[#9E526F] dark:text-[#E8A0BA]"
                viewBox="0 0 80 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* Sleeping curled cat */}
                <path d="M20 44 C12 44 8 36 8 28 C8 16 20 10 38 10 C54 10 68 18 72 26 C75 32 74 40 68 44 C62 48 52 48 44 45" />
                <path d="M50 18 L53 12 L58 17" />
                <path d="M60 17 L65 12 L65 19" />
                <path d="M56 26 C58 27 60 27 62 26" />
                <path d="M20 44 C28 47 36 47 44 45" />
              </svg>
            </div>

            {/* Content Note */}
            <div className="space-y-2 text-xs sm:text-sm font-normal text-[#725965] dark:text-[#C6AFBB] leading-relaxed">
              <p>
                <strong className="text-[#30212A] dark:text-[#F7EAF0]">Curiosity rewarded.</strong> You discovered the secret footer mark.
              </p>
              <p>
                Great software development demands disciplined architecture, reproducible test suites, and occasionally a quiet studio cat resting beside the keyboard while compiling builds.
              </p>
            </div>

            {/* Verified Credentials Pills */}
            <div className="border-t border-[#E3B9CA] dark:border-[#543746] pt-4 flex flex-wrap items-center gap-2 text-[11px] font-mono">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#EFD0DC] dark:bg-[#291D26] text-[#2B855D] dark:text-[#78CCA6] border border-[#E3B9CA] dark:border-[#543746]">
                <CheckCircle2 size={11} /> 195+ automated tests passing
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#EFD0DC] dark:bg-[#291D26] text-[#9E526F] dark:text-[#E8A0BA] border border-[#E3B9CA] dark:border-[#543746]">
                <Sparkles size={11} /> 0 broken routes
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

/**
 * Easter Egg 3: The Curious Cat Toast Notification
 * Triggered when clicking the Navbar "YS" logo 5 times in quick succession.
 */
const CuriousCatToast: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const toastTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleCurious = () => {
      setShowToast(true);
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
      toastTimeoutRef.current = window.setTimeout(() => {
        setShowToast(false);
      }, 4500);
    };

    window.addEventListener(EVENT_CURIOUS_CAT_UNLOCKED, handleCurious);
    return () => {
      window.removeEventListener(EVENT_CURIOUS_CAT_UNLOCKED, handleCurious);
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="hidden [@media(hover:hover)_and_(pointer:fine)]:lg:flex fixed top-20 right-4 sm:right-8 z-50 max-w-sm bg-[#F8E6ED] dark:bg-[#30212C] border border-[#D98BA8]/60 dark:border-[#E8A0BA]/60 rounded-xl p-3.5 shadow-xl text-xs font-mono text-[#30212A] dark:text-[#F7EAF0] items-center justify-between gap-3 select-none"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-base">🐾</span>
            <div className="space-y-0.5">
              <span className="font-semibold text-[#9E526F] dark:text-[#E8A0BA] block uppercase tracking-wider text-[10px]">
                Easter Egg Unlocked
              </span>
              <p className="text-[11px] text-[#725965] dark:text-[#C6AFBB]">
                5/5 logo clicks. Inspection diligence +100!
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-[#725965] dark:text-[#C6AFBB] hover:text-[#30212A] dark:hover:text-[#F7EAF0] p-1 rounded cursor-pointer"
            aria-label="Dismiss toast"
          >
            <X size={13} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/**
 * Easter Egg 4: The Konami Cat Constellation
 * Up, Up, Down, Down, Left, Right, Left, Right, B, A
 */
const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

const KonamiCats: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const sequenceIndex = useRef(0);
  const dismissTimer = useRef<number | null>(null);

  const triggerKonami = useCallback(() => {
    setIsActive(true);
    if (dismissTimer.current) clearTimeout(dismissTimer.current);
    dismissTimer.current = window.setTimeout(() => {
      setIsActive(false);
    }, 5500);
  }, []);

  const dismissKonami = useCallback(() => {
    setIsActive(false);
    if (dismissTimer.current) clearTimeout(dismissTimer.current);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is currently typing into an input or textarea
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.isContentEditable
      ) {
        return;
      }

      // Check if Escape to dismiss
      if (e.key === 'Escape' && isActive) {
        dismissKonami();
        return;
      }

      // Check prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const expectedKey = KONAMI_CODE[sequenceIndex.current];
      const pressedKey = e.key.length === 1 ? e.key.toLowerCase() : e.key;

      if (pressedKey === expectedKey.toLowerCase()) {
        sequenceIndex.current += 1;
        if (sequenceIndex.current === KONAMI_CODE.length) {
          sequenceIndex.current = 0;
          triggerKonami();
        }
      } else {
        // Reset sequence if wrong key
        sequenceIndex.current = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (dismissTimer.current) clearTimeout(dismissTimer.current);
    };
  }, [isActive, triggerKonami, dismissKonami]);

  if (!isActive) return null;

  return (
    <div
      onClick={dismissKonami}
      className="hidden [@media(hover:hover)_and_(pointer:fine)]:lg:flex fixed inset-0 z-[10002] pointer-events-auto cursor-pointer overflow-hidden items-end justify-center pb-12 select-none"
      title="Click or press ESC to dismiss"
    >
      {/* 6 Elegant floating cat line-art silhouettes drifting upward */}
      {[
        { x: '10vw', delay: 0.1, scale: 0.9 },
        { x: '25vw', delay: 0.4, scale: 1.1 },
        { x: '45vw', delay: 0.2, scale: 1.0 },
        { x: '65vw', delay: 0.5, scale: 0.85 },
        { x: '82vw', delay: 0.3, scale: 1.05 },
      ].map((cat, idx) => (
        <motion.div
          key={idx}
          initial={{ y: '105vh', opacity: 0 }}
          animate={{ y: '-20vh', opacity: [0, 0.9, 0.9, 0] }}
          transition={{
            duration: 4.8,
            delay: cat.delay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ left: cat.x, position: 'absolute', transform: `scale(${cat.scale})` }}
          className="pointer-events-none drop-shadow-[0_0_12px_rgba(217,139,168,0.35)]"
        >
          <svg
            className="w-16 h-16 text-[#D98BA8]"
            viewBox="0 0 60 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 40 L16 18 L26 24 C28 23 32 23 34 24 L44 18 L40 40" fill="#211820" fillOpacity="0.8" />
            <circle cx="24" cy="30" r="2" fill="currentColor" />
            <circle cx="36" cy="30" r="2" fill="currentColor" />
            <path d="M30 35 L28 37 L32 37 Z" fill="currentColor" />
            <path d="M18 34 L10 32" />
            <path d="M18 37 L11 38" />
            <path d="M42 34 L50 32" />
            <path d="M42 37 L49 38" />
          </svg>
        </motion.div>
      ))}

      {/* Floating pill informing user with immediate dismissal */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="bg-[#211820]/95 border border-[#E8A0BA]/60 backdrop-blur-md px-4 py-2 rounded-full text-xs font-mono text-[#F7EAF0] flex items-center gap-2 shadow-2xl"
      >
        <span className="w-2 h-2 rounded-full bg-[#D98BA8] animate-ping" />
        <span>Konami sequence activated • Click or press ESC to dismiss</span>
      </motion.div>
    </div>
  );
};

/**
 * Root Cat Easter Eggs Manager
 * Encapsulates discoverable easter eggs (Secret Dossier, Curious Toast, Konami Constellation).
 */
export const CatEasterEggs: React.FC = () => {
  const isDesktop = useDesktopPointer();

  if (!isDesktop) return null;

  return (
    <>
      <SecretPawModal />
      <CuriousCatToast />
      <KonamiCats />
    </>
  );
};
