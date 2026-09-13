import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const ACTION_WORDS = ['Build', 'Create', 'Experiment', 'Refine'];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 000-100 counter over ~1.8 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 200);
          setTimeout(onComplete, 900);
          return 100;
        }
        return prev + 2;
      });
    }, 32);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Lock scroll during loading to prevent any accidental scroll behind the screen
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    // Cycle action words
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ACTION_WORDS.length);
    }, 450);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100000] bg-[#0D1014] text-[#EDEDED] flex flex-col justify-between p-8 md:p-12 select-none"
          style={{ position: 'fixed', inset: 0, zIndex: 100000, backgroundColor: '#0D1014' }}
        >
          {/* Top Header */}
          <div className="flex justify-between items-center text-xs font-mono text-[#9EA3AC]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#35C7D0] animate-pulse" />
              <span>YATHARTH SAINI</span>
            </div>
            <span>PORTFOLIO 2026</span>
          </div>

          {/* Center Counter */}
          <div className="flex flex-col items-center justify-center space-y-4 my-auto">
            <AnimatePresence mode="wait" initial={false}>
              <motion.h1
                key={wordIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="font-display italic text-4xl md:text-6xl text-[#EDEDED]"
              >
                {ACTION_WORDS[wordIndex]}.
              </motion.h1>
            </AnimatePresence>

            <div className="font-mono text-7xl md:text-9xl font-light tracking-tighter text-[#EDEDED]">
              {progress.toString().padStart(3, '0')}
            </div>
          </div>

          {/* Bottom Progress Line */}
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] font-mono text-[#9EA3AC]">
              <span>LOADING SYSTEM</span>
              <span className="text-[#35C7D0] font-semibold">{progress}%</span>
            </div>
            <div className="w-full h-[2px] bg-[#202833] overflow-hidden rounded-full">
              <div
                className="h-full bg-gradient-to-r from-[#1D9AA2] to-[#35C7D0] transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
