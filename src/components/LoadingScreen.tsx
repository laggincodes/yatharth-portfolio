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
          className="fixed inset-0 z-[100000] bg-[#0A0A0A] text-[#F4F4F4] flex flex-col justify-between p-8 md:p-12 select-none"
        >
          {/* Top Header */}
          <div className="flex justify-between items-center text-xs font-mono text-[#878787]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4E85BF] animate-pulse" />
              <span>YATHARTH SAINI</span>
            </div>
            <span>PORTFOLIO 2026</span>
          </div>

          {/* Center Counter */}
          <div className="flex flex-col items-center justify-center space-y-4 my-auto">
            <motion.h1
              key={wordIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="font-display italic text-4xl md:text-6xl text-[#F4F4F4]"
            >
              {ACTION_WORDS[wordIndex]}.
            </motion.h1>

            <div className="font-mono text-7xl md:text-9xl font-light tracking-tighter text-[#F4F4F4]">
              {progress.toString().padStart(3, '0')}
            </div>
          </div>

          {/* Bottom Progress Line */}
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] font-mono text-[#878787]">
              <span>LOADING SYSTEM</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-[2px] bg-[#1F1F1F] overflow-hidden rounded-full">
              <div
                className="h-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
