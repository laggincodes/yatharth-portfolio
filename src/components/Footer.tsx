import React from 'react';
import { ArrowUp, Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 w-full bg-[#DCD7CC] dark:bg-[#0A0D11] border-t border-[#D8D2C5] dark:border-[#262E38] py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-16 text-xs sm:text-sm font-mono text-[#555C66] dark:text-[#9EA3AC] space-y-6 sm:space-y-8 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#D8D2C5] dark:border-[#262E38]">
        {/* Direct Email, GitHub & LinkedIn Links at the end with min 44px touch height */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
          <a
            href="mailto:yathusaini10@gmail.com"
            className="min-h-[44px] flex items-center gap-2 text-[#555C66] dark:text-[#9EA3AC] hover:text-[#1D9AA2] dark:hover:text-[#35C7D0] transition-colors group cursor-pointer"
          >
            <Mail size={15} className="text-[#1D9AA2] dark:text-[#35C7D0]" />
            <span className="text-xs sm:text-sm">yathusaini10@gmail.com</span>
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="https://github.com/laggincodes"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] flex items-center gap-2 text-[#555C66] dark:text-[#9EA3AC] hover:text-[#C57D28] dark:hover:text-[#E7A85B] transition-colors group cursor-pointer"
          >
            <GithubIcon size={15} className="text-[#C57D28] dark:text-[#E7A85B]" />
            <span className="text-xs sm:text-sm">GitHub</span>
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="https://www.linkedin.com/in/yatharth-saini-6bb584389"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] flex items-center gap-2 text-[#555C66] dark:text-[#9EA3AC] hover:text-[#6C5CE7] dark:hover:text-[#9A8CFF] transition-colors group cursor-pointer"
          >
            <LinkedinIcon size={15} className="text-[#6C5CE7] dark:text-[#9A8CFF]" />
            <span className="text-xs sm:text-sm">LinkedIn</span>
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Live Status Indicator */}
        <div className="flex items-center gap-2 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-[#2E885E] dark:bg-[#72C7A0] animate-pulse" />
          <span>YATHARTH SAINI • PORTFOLIO 2026</span>
        </div>
      </div>

      {/* Bottom Copyright & Back to Top */}
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="text-[11px] sm:text-xs">© {new Date().getFullYear()} YATHARTH SAINI. ALL RIGHTS RESERVED.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="min-h-[44px] flex items-center gap-2 hover:text-[#171A1D] dark:hover:text-[#EDEDED] transition-colors group cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <div className="w-7 h-7 rounded-full border border-[#D8D2C5] dark:border-[#262E38] bg-[#F1EEE7] dark:bg-[#161B23] flex items-center justify-center group-hover:border-[#3272CB] dark:group-hover:border-[#6FA8FF] transition-colors shadow-xs">
            <ArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5 text-[#3272CB] dark:text-[#6FA8FF]" />
          </div>
        </button>
      </div>
    </footer>
  );
};
