import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenCommandMenu: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandMenu }) => {
  const [activeSection] = useState('hero');

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full max-w-5xl mx-auto flex justify-center items-center z-30 pointer-events-none px-2 sm:px-4 py-1.5 sm:py-2 lg:py-1.5 xl:py-2.5"
    >
      <nav
        className="pointer-events-auto flex items-center justify-between sm:justify-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-3.5 md:px-4 py-1.5 md:py-2 rounded-full border transition-all duration-300 bg-[#F5F1E9]/95 dark:bg-[#151A21]/95 border-[#D8D2C5] dark:border-[#262E38] shadow-xs max-w-full"
      >
        {/* Logo: Circle with Accent Ring */}
        <a
          href="#hero"
          className="group relative flex items-center justify-center shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#F5F1E9] dark:bg-[#11151A] border border-[#D8D2C5] dark:border-[#262E38] hover:border-[#35C7D0]/60 dark:hover:border-[#35C7D0]/60 transition-transform duration-300 hover:scale-105"
          aria-label="Yatharth Saini Home"
        >
          {/* Subtle Cyan/Violet Accent Ring */}
          <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#35C7D0] via-[#6FA8FF] to-[#9A8CFF] opacity-35 dark:opacity-45 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]" />
          <span className="text-xs sm:text-xs md:text-sm font-semibold tracking-tight text-[#171A1D] dark:text-[#F1EFE8] group-hover:text-[#1D9AA2] dark:group-hover:text-[#35C7D0] transition-colors">
            YS
          </span>
        </a>

        <div className="hidden sm:block h-4 w-[1px] bg-[#D8D2C5] dark:bg-[#262E38] shrink-0" />

        {/* Nav Links: Home, Work, About (13-15px readable text) */}
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-2.5 sm:px-3 md:px-3.5 py-1.5 text-[13px] sm:text-[14px] md:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-[#1D9AA2] dark:text-[#35C7D0] bg-[#1D9AA2]/10 dark:bg-[#35C7D0]/12 border border-[#1D9AA2]/25 dark:border-[#35C7D0]/25 font-semibold'
                    : 'text-[#59616A] dark:text-[#9AA0AA] hover:text-[#171A1D] dark:hover:text-[#F1EFE8] hover:bg-[#E9E5DC] dark:hover:bg-[#1C2229]'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Resume Link - Shown on screens >= 440px */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-[440px]:inline-flex px-2 sm:px-2.5 md:px-3 py-1.5 text-[13px] sm:text-xs md:text-sm text-[#59616A] dark:text-[#9AA0AA] hover:text-[#1D9AA2] dark:hover:text-[#35C7D0] transition-colors items-center gap-1 shrink-0 whitespace-nowrap font-medium"
            title="View Resume (PDF)"
          >
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
            <span className="text-[10px] text-[#C57D28] dark:text-[#E7A85B]">↗</span>
          </a>
        </div>

        <div className="hidden sm:block h-4 w-[1px] bg-[#D8D2C5] dark:bg-[#262E38] shrink-0" />

        {/* Right Actions: ThemeToggle, Search, Say Hi */}
        <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 shrink-0">
          {/* Theme Toggle Button */}
          <ThemeToggle className="w-8 h-8 md:w-8.5 md:h-8.5" />

          {/* Clean Search / Command Menu Icon Button (magnifying-glass only) */}
          <button
            type="button"
            onClick={onOpenCommandMenu}
            aria-label="Open search and command menu"
            className="w-8 h-8 md:w-8.5 md:h-8.5 rounded-full flex items-center justify-center text-[#59616A] dark:text-[#9AA0AA] hover:text-[#1D9AA2] dark:hover:text-[#35C7D0] bg-[#E9E5DC]/80 dark:bg-[#181D24]/80 hover:bg-[#E2DDD3] dark:hover:bg-[#20262F] border border-[#D8D2C5] dark:border-[#262E38] hover:border-[#35C7D0]/40 dark:hover:border-[#35C7D0]/40 transition-all duration-200 shrink-0 cursor-pointer"
            title="Open search and command menu"
          >
            <Search size={14} className="sm:w-3.5 sm:h-3.5" />
          </button>

          {/* CTA: Say Hi (Shown on screens >= 520px) */}
          <a
            href="#contact"
            className="hidden min-[520px]:inline-flex group items-center gap-1 px-3 sm:px-3.5 md:px-4 py-1.5 text-xs sm:text-xs md:text-sm font-semibold text-[#F1EEE7] dark:text-[#0D1014] bg-[#171A1D] dark:bg-[#F1EFE8] hover:bg-black dark:hover:bg-white rounded-full transition-all duration-200 hover:scale-[1.02] shadow-xs shrink-0 whitespace-nowrap"
          >
            <span>Say hi</span>
            <span className="text-[10px] sm:text-xs text-[#E7A85B] dark:text-[#C57D28] transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
};
