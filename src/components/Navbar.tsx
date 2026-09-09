import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Command } from 'lucide-react';
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
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute top-0 left-0 right-0 z-30 flex justify-center items-center pt-3 sm:pt-4 md:pt-6 px-1.5 sm:px-4 pointer-events-none w-full"
    >
      <nav
        className="pointer-events-auto flex items-center gap-1 sm:gap-2 md:gap-3 px-1.5 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-full border transition-all duration-300 bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border-slate-200/80 dark:border-[#1F1F1F] shadow-sm dark:shadow-xl max-w-full"
      >
        {/* Logo: Circle with Accent Ring */}
        <a
          href="#hero"
          className="group relative flex items-center justify-center shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-white dark:bg-[#0A0A0A] border border-slate-200 dark:border-[#1F1F1F] hover:border-[#0284C7]/60 dark:hover:border-[#58C7D9]/60 transition-transform duration-300 hover:scale-105"
          aria-label="Yatharth Saini Home"
        >
          {/* Subtle Gradient Accent Ring */}
          <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#58C7D9] via-[#4E85BF] to-[#8B7CFF] opacity-30 dark:opacity-40 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]" />
          <span className="text-[10px] sm:text-[11px] md:text-xs font-bold tracking-tight text-[#111318] dark:text-[#F4F4F4] group-hover:text-[#0284C7] dark:group-hover:text-white transition-colors">
            YS
          </span>
        </a>

        <div className="hidden md:block h-4 w-[1px] bg-slate-200 dark:bg-[#1F1F1F] shrink-0" />

        {/* Nav Links */}
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-1.5 sm:px-2.5 md:px-3 py-1 md:py-1.5 text-[11px] sm:text-xs md:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-[#0284C7] dark:text-[#58C7D9] bg-[#0284C7]/10 dark:bg-[#58C7D9]/10 border border-[#0284C7]/20 dark:border-[#58C7D9]/20'
                    : 'text-[#5F6670] dark:text-[#878787] hover:text-[#111318] dark:hover:text-[#F4F4F4] hover:bg-slate-100/70 dark:hover:bg-[#1F1F1F]/40'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Resume Link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1.5 sm:px-2 md:px-2.5 py-1 md:py-1.5 text-[11px] sm:text-xs text-[#5F6670] dark:text-[#878787] hover:text-[#0284C7] dark:hover:text-[#58C7D9] transition-colors inline-flex items-center gap-0.5 sm:gap-1 shrink-0 whitespace-nowrap"
            title="View Resume"
          >
            <span>Resume</span>
            <span className="text-[9px] sm:text-[10px]">↗</span>
          </a>
        </div>

        <div className="hidden md:block h-4 w-[1px] bg-slate-200 dark:bg-[#1F1F1F] shrink-0" />

        {/* Theme Toggle Button */}
        <ThemeToggle />

        {/* Command Menu Button */}
        <button
          onClick={onOpenCommandMenu}
          className="hidden md:flex items-center gap-1.5 px-2.5 py-1 text-xs text-[#5F6670] dark:text-[#878787] hover:text-[#0284C7] dark:hover:text-[#58C7D9] bg-slate-100/70 dark:bg-[#0A0A0A]/50 hover:bg-slate-200 dark:hover:bg-[#1F1F1F] rounded-full border border-slate-200 dark:border-[#1F1F1F] transition-all duration-200 shrink-0"
          title="Open Command Menu (Cmd+K)"
        >
          <Command size={12} />
          <span className="font-mono text-[10px]">K</span>
        </button>

        {/* CTA: Say Hi */}
        <a
          href="#contact"
          className="flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 md:px-3.5 py-1 md:py-1.5 text-[11px] sm:text-xs md:text-sm font-medium text-white dark:text-[#0A0A0A] bg-[#111318] dark:bg-[#F4F4F4] hover:bg-black dark:hover:bg-white rounded-full transition-all duration-200 hover:scale-[1.02] shadow-sm shrink-0 whitespace-nowrap"
        >
          <span>Say hi</span>
          <span className="text-[10px] sm:text-xs">↗</span>
        </a>
      </nav>
    </motion.header>
  );
};
