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
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-3 sm:pt-4 lg:pt-3 xl:pt-5 pb-3 sm:pb-4 lg:pb-3 xl:pb-5 px-4 sm:px-6 md:px-10 lg:px-16 bg-transparent overflow-hidden"
    >
      {/* Subtle Warm Rose Ambient Glow in Background */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D98BA8]/18 dark:bg-[#E8A0BA]/7 blur-[120px] pointer-events-none -z-10" />

      {/* Floating Entry Navbar in Document Flow */}
      <Navbar onOpenCommandMenu={onOpenCommandMenu} />

      {/* Main Editorial Cover Spread */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 24 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="max-w-[1200px] w-full mx-auto my-auto relative z-10 py-2 sm:py-3 lg:py-1 xl:py-3 2xl:py-6"
      >
        {/* Top Cover Index & Metadata Line */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2.5 sm:gap-3 border-b border-[#E3B9CA] dark:border-[#543746] pb-2 sm:pb-2.5 lg:pb-2 xl:pb-3 mb-3 sm:mb-5 lg:mb-4 xl:mb-6 text-xs font-mono tracking-[0.25em] text-[#725965] dark:text-[#C6AFBB]">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#9E526F] dark:text-[#E8A0BA]">01</span>
            <span className="text-[#E3B9CA] dark:text-[#543746]">/</span>
            <span className="text-[#30212A] dark:text-[#F7EAF0] font-semibold tracking-wider">YATHARTH SAINI</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-medium">
            <span>CSE STUDENT · DEVELOPER · AI BUILDER</span>
            <span className="hidden md:inline text-[#E3B9CA] dark:text-[#543746]">/</span>
            <span className="hidden md:inline">DELHI, IN</span>
          </div>
        </div>

        {/* Large Asymmetric Magazine Headline */}
        <div className="space-y-0.5 sm:space-y-1 select-none">
          <h1 className="hero-headline font-semibold tracking-[-0.04em] text-[#30212A] dark:text-[#F7EAF0] leading-[0.92] text-left drop-shadow-[0_2px_12px_rgba(243,220,229,0.35)] dark:drop-shadow-[0_2px_18px_rgba(33,24,32,0.85)]">
            Yatharth
          </h1>
          <h1 className="hero-headline font-medium tracking-[-0.03em] leading-[0.92] text-left pl-4 sm:pl-10 md:pl-20 lg:pl-28 xl:pl-36 drop-shadow-[0_2px_12px_rgba(243,220,229,0.35)] dark:drop-shadow-[0_2px_18px_rgba(33,24,32,0.85)]">
            <span className="font-display italic text-[#30212A] dark:text-[#F7EAF0]">
              Saini.
            </span>
          </h1>
        </div>

        {/* Editorial Narrative & Technical Ledger Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 pt-4 sm:pt-6 lg:pt-4 xl:pt-8 items-end">
          {/* Left / Narrative (7 cols) with subtle translucent backing for pristine text contrast against video */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 lg:space-y-3 xl:space-y-4 p-4 sm:p-5 rounded-2xl bg-[#F8E6ED]/80 dark:bg-[#30212C]/80 backdrop-blur-md border border-[#E3B9CA]/60 dark:border-[#543746]/70 shadow-xs">
            <p className="text-[15px] sm:text-lg lg:text-[17px] xl:text-lg 2xl:text-xl text-[#30212A] dark:text-[#F7EAF0] font-medium leading-relaxed max-w-xl text-left">
              "I build AI-powered products, full-stack applications and modern software systems."
            </p>

            {/* Tactile Editorial CTAs with minimum 44px touch targets */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 pt-1 lg:pt-1.5">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-full bg-[#30212A] dark:bg-[#F7EAF0] text-[#FBEAF0] dark:text-[#211820] font-semibold text-xs sm:text-sm transition-all duration-300 hover:bg-[#9E526F] dark:hover:bg-[#E8A0BA] shadow-xs cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <ArrowDown size={15} className="text-[#D98BA8] dark:text-[#BD718F] transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <a
                  href="https://github.com/laggincodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 min-h-[44px] rounded-full bg-[#F8E6ED] dark:bg-[#382632] hover:bg-[#EFD0DC] dark:hover:bg-[#30212C] text-[#30212A] dark:text-[#F7EAF0] border border-[#E3B9CA] dark:border-[#543746] hover:border-[#D98BA8] dark:hover:border-[#E8A0BA] text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
                >
                  <GithubIcon size={15} className="text-[#9E526F] dark:text-[#E8A0BA]" />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} className="text-[#725965] dark:text-[#C6AFBB] group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA] transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/yatharth-saini-6bb584389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 min-h-[44px] rounded-full bg-[#F8E6ED] dark:bg-[#382632] hover:bg-[#EFD0DC] dark:hover:bg-[#30212C] text-[#30212A] dark:text-[#F7EAF0] border border-[#E3B9CA] dark:border-[#543746] hover:border-[#D98BA8] dark:hover:border-[#E8A0BA] text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
                >
                  <LinkedinIcon size={15} className="text-[#9E526F] dark:text-[#E8A0BA]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} className="text-[#725965] dark:text-[#C6AFBB] group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right / Metadata Ledger (5 cols) with subtle translucent backing and feline accent */}
          <div className="lg:col-span-5 p-4 sm:p-5 rounded-2xl bg-[#F8E6ED]/80 dark:bg-[#30212C]/80 backdrop-blur-md border border-[#E3B9CA]/60 dark:border-[#543746]/70 shadow-xs space-y-2 lg:space-y-1.5 xl:space-y-2.5 text-xs font-mono text-[#725965] dark:text-[#C6AFBB]">
            <div className="flex justify-between items-baseline py-1 lg:py-1 xl:py-1.5 border-b border-[#E3B9CA]/60 dark:border-[#543746]/60">
              <span className="uppercase tracking-widest text-[10px] font-semibold text-[#8C707E] dark:text-[#C6AFBB]/80">FOCUS</span>
              <span className="text-[#30212A] dark:text-[#F7EAF0] font-semibold tracking-normal">SOFTWARE / AI / PRODUCTS</span>
            </div>
            <div className="flex justify-between items-baseline py-1 lg:py-1 xl:py-1.5 border-b border-[#E3B9CA]/60 dark:border-[#543746]/60">
              <span className="uppercase tracking-widest text-[10px] font-semibold text-[#8C707E] dark:text-[#C6AFBB]/80">PRACTICE</span>
              <span className="text-[#30212A] dark:text-[#F7EAF0] font-semibold tracking-normal">FULL-STACK DEVELOPMENT</span>
            </div>
            <div className="flex justify-between items-center py-1 lg:py-1 xl:py-1.5">
              <span className="uppercase tracking-widest text-[10px] font-semibold text-[#8C707E] dark:text-[#C6AFBB]/80">LOCATION</span>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-[#30212A] dark:text-[#F7EAF0] font-semibold tracking-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2B855D] animate-pulse" />
                  DELHI, INDIA
                </span>

                {/* Subtle Minimal Architectural Feline Line Art Detail */}
                <svg
                  className="w-4 h-4.5 text-[#9E526F] dark:text-[#E8A0BA] opacity-75 hover:opacity-100 transition-opacity"
                  viewBox="0 0 24 26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {/* Minimal sitting cat silhouette */}
                  <path d="M8 10 C7 7 8 4 8 3 L10 5 C11 5 13 5 14 5 L16 3 C16 4 17 7 16 10" />
                  <path d="M8 10 C7 12 8 14 10 15 C11 15 13 15 14 15 C16 14 17 12 16 10" />
                  <path d="M9 15 C8 18 8 21 7 24" />
                  <path d="M15 15 C16 18 17 21 17 24" />
                  <path d="M6 24 C9 24 15 24 18 24" />
                  <path d="M17 22 C19 23 21 21 20 18" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Editorial Scroll Anchor */}
      <div className="max-w-[1200px] w-full mx-auto pt-2 sm:pt-3 lg:pt-2 xl:pt-3 flex justify-between items-center text-xs font-mono tracking-widest text-[#725965] dark:text-[#C6AFBB] relative z-10 border-t border-[#E3B9CA] dark:border-[#543746]">
        <span>ISSUE 2026</span>
        <a
          href="#activity"
          className="min-h-[44px] flex items-center gap-2 hover:text-[#30212A] dark:hover:text-[#F7EAF0] transition-colors group font-medium cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={13} className="text-[#9E526F] dark:text-[#E8A0BA] transition-transform duration-300 group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
};
