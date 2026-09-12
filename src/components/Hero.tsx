import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Navbar } from './Navbar';

interface HeroProps {
  isLoaded: boolean;
  onOpenCommandMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isLoaded, onOpenCommandMenu }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-4 sm:pt-6 md:pt-8 pb-8 px-4 sm:px-6 md:px-10 lg:px-16 bg-transparent overflow-hidden"
    >
      {/* Floating Entry Navbar in Document Flow (scrolls away naturally) */}
      <Navbar onOpenCommandMenu={onOpenCommandMenu} />

      {/* Main Editorial Cover Spread */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 24 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="max-w-[1200px] w-full mx-auto my-auto relative z-10 py-8 sm:py-12"
      >
        {/* Top Cover Index & Metadata Line */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-[#D8D2C5] dark:border-[#262E38] pb-4 mb-8 sm:mb-12 text-xs font-mono tracking-[0.25em] text-[#59616A] dark:text-[#9AA0AA]">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#1D9AA2] dark:text-[#35C7D0]">01</span>
            <span className="text-[#D8D2C5] dark:border-[#262E38]">/</span>
            <span className="text-[#171A1D] dark:text-[#F1EFE8] font-semibold tracking-wider">YATHARTH SAINI</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-medium">
            <span>CSE STUDENT · AI BUILDER</span>
            <span className="hidden md:inline text-[#D8D2C5] dark:text-[#262E38]">/</span>
            <span className="hidden md:inline">DELHI, IN</span>
          </div>
        </div>

        {/* Large Asymmetric Magazine Headline */}
        <div className="space-y-1 sm:space-y-2 select-none">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9.25rem] font-semibold tracking-[-0.04em] text-[#171A1D] dark:text-[#F1EFE8] leading-[0.92] text-left">
            Yatharth
          </h1>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9.25rem] font-medium tracking-[-0.03em] leading-[0.92] text-left pl-4 sm:pl-12 md:pl-24 lg:pl-36">
            <span className="font-display italic text-[#171A1D] dark:text-[#F1EFE8]">
              Saini.
            </span>
          </h1>
        </div>

        {/* Editorial Narrative & Technical Ledger Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 sm:pt-14 items-end">
          {/* Left / Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <p className="text-[17px] sm:text-lg md:text-xl text-[#171A1D] dark:text-[#F1EFE8] font-medium leading-relaxed max-w-xl text-left">
              "I build AI-powered products, voice interfaces and modern web systems."
            </p>

            {/* Tactile Editorial CTAs with minimum 44px touch targets */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 min-h-[44px] rounded-full bg-[#171A1D] dark:bg-[#F1EFE8] text-[#F1EEE7] dark:text-[#0D1014] font-semibold text-sm transition-all duration-300 hover:bg-black dark:hover:bg-white shadow-xs cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <ArrowDown size={15} className="text-[#35C7D0] dark:text-[#1D9AA2] transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="https://github.com/laggincodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-full bg-[#F5F1E9] dark:bg-[#181D23] hover:bg-[#E9E5DC] dark:hover:bg-[#20262D] text-[#171A1D] dark:text-[#F1EFE8] border border-[#D8D2C5] dark:border-[#262E38] hover:border-[#1D9AA2]/50 dark:hover:border-[#35C7D0]/50 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
                >
                  <GithubIcon size={15} className="text-[#1D9AA2] dark:text-[#35C7D0]" />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} className="text-[#59616A] dark:text-[#9AA0AA] group-hover:text-[#1D9AA2] dark:group-hover:text-[#35C7D0] transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/yatharth-saini-6bb584389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-full bg-[#F5F1E9] dark:bg-[#181D23] hover:bg-[#E9E5DC] dark:hover:bg-[#20262D] text-[#171A1D] dark:text-[#F1EFE8] border border-[#D8D2C5] dark:border-[#262E38] hover:border-[#6C5CE7]/50 dark:hover:border-[#9A8CFF]/50 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
                >
                  <LinkedinIcon size={15} className="text-[#6C5CE7] dark:text-[#9A8CFF]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} className="text-[#59616A] dark:text-[#9AA0AA] group-hover:text-[#6C5CE7] dark:group-hover:text-[#9A8CFF] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right / Metadata Ledger (5 cols) */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#D8D2C5] dark:border-[#262E38] pt-6 lg:pt-0 lg:pl-8 space-y-3.5 text-xs font-mono text-[#59616A] dark:text-[#9AA0AA]">
            <div className="flex justify-between items-baseline py-1.5 border-b border-[#D8D2C5]/60 dark:border-[#262E38]/60">
              <span className="uppercase tracking-widest text-[10px] font-semibold text-[#79828D] dark:text-[#737A85]">FOCUS</span>
              <span className="text-[#171A1D] dark:text-[#F1EFE8] font-semibold tracking-normal">AI / VOICE / WEB</span>
            </div>
            <div className="flex justify-between items-baseline py-1.5 border-b border-[#D8D2C5]/60 dark:border-[#262E38]/60">
              <span className="uppercase tracking-widest text-[10px] font-semibold text-[#79828D] dark:text-[#737A85]">PRACTICE</span>
              <span className="text-[#171A1D] dark:text-[#F1EFE8] font-semibold tracking-normal">PRODUCT TINKERER</span>
            </div>
            <div className="flex justify-between items-baseline py-1.5">
              <span className="uppercase tracking-widest text-[10px] font-semibold text-[#79828D] dark:text-[#737A85]">LOCATION</span>
              <span className="inline-flex items-center gap-1.5 text-[#171A1D] dark:text-[#F1EFE8] font-semibold tracking-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E885E] dark:bg-[#72C7A0] animate-pulse" />
                DELHI, INDIA
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Editorial Scroll Anchor */}
      <div className="max-w-[1200px] w-full mx-auto pt-4 flex justify-between items-center text-xs font-mono tracking-widest text-[#59616A] dark:text-[#9AA0AA] relative z-10 border-t border-[#D8D2C5] dark:border-[#262E38]">
        <span>ISSUE 2026</span>
        <a
          href="#work"
          className="min-h-[44px] flex items-center gap-2 hover:text-[#171A1D] dark:hover:text-[#F1EFE8] transition-colors group font-medium cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={13} className="text-[#1D9AA2] dark:text-[#35C7D0] transition-transform duration-300 group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
};
