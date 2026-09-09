import React from 'react';
import { ArrowUp, Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 w-full bg-slate-100/80 dark:bg-[#0A0A0A] border-t border-slate-200/80 dark:border-[#1F1F1F] py-10 px-6 md:px-10 lg:px-16 text-xs font-mono text-[#5F6670] dark:text-[#878787] space-y-8 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-[#1F1F1F]/60">
        {/* Direct Email, GitHub & LinkedIn Links at the end */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="mailto:yathusaini10@gmail.com"
            className="flex items-center gap-2 text-[#5F6670] dark:text-[#878787] hover:text-[#111318] dark:hover:text-[#F4F4F4] transition-colors group"
          >
            <Mail size={14} className="text-[#0284C7] dark:text-[#4E85BF]" />
            <span>yathusaini10@gmail.com</span>
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="https://github.com/laggincodes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#5F6670] dark:text-[#878787] hover:text-[#111318] dark:hover:text-[#F4F4F4] transition-colors group"
          >
            <GithubIcon size={14} className="text-[#0284C7] dark:text-[#4E85BF]" />
            <span>GitHub</span>
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="https://www.linkedin.com/in/yatharth-saini-6bb584389"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#5F6670] dark:text-[#878787] hover:text-[#111318] dark:hover:text-[#F4F4F4] transition-colors group"
          >
            <LinkedinIcon size={14} className="text-[#0284C7] dark:text-[#4E85BF]" />
            <span>LinkedIn</span>
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Live Status Indicator */}
        <div className="flex items-center gap-2 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>YATHARTH SAINI • PORTFOLIO 2026</span>
        </div>
      </div>

      {/* Bottom Copyright & Back to Top */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span>© {new Date().getFullYear()} YATHARTH SAINI. ALL RIGHTS RESERVED.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-[#111318] dark:hover:text-[#F4F4F4] transition-colors group"
        >
          <span>BACK TO TOP</span>
          <div className="w-6 h-6 rounded-full border border-slate-200 dark:border-[#1F1F1F] bg-white dark:bg-transparent flex items-center justify-center group-hover:border-[#0284C7] dark:group-hover:border-[#4E85BF] transition-colors shadow-xs">
            <ArrowUp size={12} className="transition-transform group-hover:-translate-y-0.5" />
          </div>
        </button>
      </div>
    </footer>
  );
};
