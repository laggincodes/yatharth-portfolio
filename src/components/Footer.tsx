import React from 'react';
import { ArrowUp, Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CatPawIcon } from './Icons';
import { triggerSecretPaw } from '../utils/easterEggs';
import { useDesktopPointer } from '../utils/useDesktopPointer';

export const Footer: React.FC = () => {
  const isDesktop = useDesktopPointer();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 w-full bg-[#EFD0DC] dark:bg-[#291D26] border-t border-[#E3B9CA] dark:border-[#543746] py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-16 text-xs sm:text-sm font-mono text-[#725965] dark:text-[#C6AFBB] space-y-6 sm:space-y-8 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#E3B9CA] dark:border-[#543746]">
        {/* Direct Email, GitHub & LinkedIn Links */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
          <a
            href="mailto:yathusaini10@gmail.com"
            className="min-h-[44px] flex items-center gap-2 text-[#725965] dark:text-[#C6AFBB] hover:text-[#9E526F] dark:hover:text-[#E8A0BA] transition-colors group cursor-pointer"
          >
            <Mail size={15} className="text-[#9E526F] dark:text-[#E8A0BA]" />
            <span className="text-xs sm:text-sm">yathusaini10@gmail.com</span>
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D98BA8]" />
          </a>

          <a
            href="https://github.com/laggincodes"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] flex items-center gap-2 text-[#725965] dark:text-[#C6AFBB] hover:text-[#C87998] dark:hover:text-[#D98AA9] transition-colors group cursor-pointer"
          >
            <GithubIcon size={15} className="text-[#C87998] dark:text-[#D98AA9]" />
            <span className="text-xs sm:text-sm">GitHub</span>
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#C87998]" />
          </a>

          <a
            href="https://www.linkedin.com/in/yatharth-saini-6bb584389"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] flex items-center gap-2 text-[#725965] dark:text-[#C6AFBB] hover:text-[#9E526F] dark:hover:text-[#E8A0BA] transition-colors group cursor-pointer"
          >
            <LinkedinIcon size={15} className="text-[#9E526F] dark:text-[#E8A0BA]" />
            <span className="text-xs sm:text-sm">LinkedIn</span>
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D98BA8]" />
          </a>
        </div>

        {/* Live Status Indicator with Feline Signature & Secret Paw */}
        <div className="flex items-center gap-2.5 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-[#2B855D] animate-pulse" />
          <span>YATHARTH SAINI • PORTFOLIO 2026</span>

          {/* Minimal Resting Feline Line-Art Signature (Desktop Only) */}
          {isDesktop && (
            <svg
              className="hidden [@media(hover:hover)_and_(pointer:fine)]:lg:inline-block w-5 h-3.5 text-[#9E526F] dark:text-[#E8A0BA] opacity-75 hover:opacity-100 transition-opacity shrink-0 ml-1"
              viewBox="0 0 28 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {/* Curled sleeping cat body and ears */}
              <path d="M6 14 C3 14 2 11 2 8 C2 4 6 2 12 2 C17 2 22 4 24 7 C25 10 25 12 23 14 C21 15 18 15 15 14" />
              <path d="M17 5 L18 3 L20 4.5" />
              <path d="M21 4.5 L23 3 L23 5.5" />
              <path d="M6 14 C9 15 12 15 15 14" />
            </svg>
          )}

          {/* Secret Cat Paw Easter Egg Trigger (Desktop Only) */}
          {isDesktop && (
            <button
              type="button"
              onClick={triggerSecretPaw}
              className="hidden [@media(hover:hover)_and_(pointer:fine)]:lg:inline-flex p-1 rounded text-[#9E526F] dark:text-[#E8A0BA] opacity-70 hover:opacity-100 hover:scale-110 transition-all cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D98BA8]"
              aria-label="Secret curious visitor archive"
              title="Curious explorer mark"
            >
              <CatPawIcon size={12} className="text-[#9E526F] dark:text-[#E8A0BA]" />
            </button>
          )}
        </div>
      </div>

      {/* Bottom Copyright & Back to Top */}
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="text-[11px] sm:text-xs">© {new Date().getFullYear()} YATHARTH SAINI. ALL RIGHTS RESERVED.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="min-h-[44px] flex items-center gap-2 hover:text-[#30212A] dark:hover:text-[#F7EAF0] transition-colors group cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <div className="w-7 h-7 rounded-full border border-[#E3B9CA] dark:border-[#543746] bg-[#F8E6ED] dark:bg-[#30212C] flex items-center justify-center group-hover:border-[#D98BA8] transition-colors shadow-xs">
            <ArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5 text-[#9E526F] dark:text-[#E8A0BA]" />
          </div>
        </button>
      </div>
    </footer>
  );
};
