import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { triggerCuriousCat } from '../utils/easterEggs';
import { useDesktopPointer } from '../utils/useDesktopPointer';

interface NavbarProps {
  onOpenCommandMenu: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Activity', href: '#activity' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandMenu }) => {
  const isDesktop = useDesktopPointer();
  const [activeSection, setActiveSection] = useState('hero');
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<number | null>(null);

  // Dynamic active section detection on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'activity', 'work', 'about'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Easter Egg 3: 5 clicks on logo within 2.5s unlocks curious cat toast (Desktop Only)
  const handleLogoClick = () => {
    if (!isDesktop) return;
    clickCountRef.current += 1;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);

    if (clickCountRef.current >= 5) {
      triggerCuriousCat();
      clickCountRef.current = 0;
    } else {
      clickTimerRef.current = window.setTimeout(() => {
        clickCountRef.current = 0;
      }, 2500);
    }
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full max-w-5xl mx-auto flex justify-center items-center z-30 pointer-events-none px-2 sm:px-4 py-1.5 sm:py-2 lg:py-1.5 xl:py-2.5"
    >
      <nav
        className="pointer-events-auto flex items-center justify-between sm:justify-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-3.5 md:px-4 py-1.5 md:py-2 rounded-full border transition-all duration-300 bg-[#F8E6ED]/90 dark:bg-[#30212C]/90 backdrop-blur-md border-[#E3B9CA] dark:border-[#543746] shadow-[0_4px_20px_-2px_rgba(48,33,42,0.08)] dark:shadow-[0_4px_20px_-2px_rgba(33,24,32,0.4)] max-w-full"
      >
        {/* Logo: Circle with Refined Rose / Blush Accent Ring */}
        <a
          href="#hero"
          onClick={handleLogoClick}
          className="group relative flex items-center justify-center shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#F3DCE5] dark:bg-[#211820] border border-[#E3B9CA] dark:border-[#543746] hover:border-[#D98BA8] dark:hover:border-[#E8A0BA] transition-transform duration-300 hover:scale-105"
          aria-label="Yatharth Saini Home"
        >
          {/* Subtle Rose/Blush Accent Ring */}
          <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#D98BA8] via-[#C87998] to-[#D98BA8] opacity-50 dark:opacity-50 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]" />
          <span className="text-xs sm:text-xs md:text-sm font-semibold tracking-tight text-[#30212A] dark:text-[#F7EAF0] group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA] transition-colors">
            YS
          </span>
        </a>

        <div className="hidden sm:block h-4 w-[1px] bg-[#E3B9CA] dark:bg-[#543746] shrink-0" />

        {/* Nav Links: Home, Activity, Work, About */}
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-2.5 sm:px-3 md:px-3.5 py-1.5 text-[13px] sm:text-[14px] md:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-[#9E526F] dark:text-[#E8A0BA] bg-[#D98BA8]/20 dark:bg-[#E8A0BA]/15 border border-[#D98BA8]/40 font-semibold'
                    : 'text-[#725965] dark:text-[#C6AFBB] hover:text-[#30212A] dark:hover:text-[#F7EAF0] hover:bg-[#EFD0DC] dark:hover:bg-[#382632]'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Resume Request Link */}
          <a
            href="mailto:yathusaini10@gmail.com?subject=Resume%20Request%20-%20Yatharth%20Saini"
            className="hidden min-[440px]:inline-flex px-2 sm:px-2.5 md:px-3 py-1.5 text-[13px] sm:text-xs md:text-sm text-[#725965] dark:text-[#C6AFBB] hover:text-[#9E526F] dark:hover:text-[#E8A0BA] transition-colors items-center gap-1 shrink-0 whitespace-nowrap font-medium"
            title="Request Resume (PDF via Email)"
          >
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
            <span className="text-[10px] text-[#9E526F] dark:text-[#E8A0BA]">↗</span>
          </a>
        </div>

        <div className="hidden sm:block h-4 w-[1px] bg-[#E3B9CA] dark:bg-[#543746] shrink-0" />

        {/* Right Actions: ThemeToggle, Search, Say Hi */}
        <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 shrink-0">
          {/* Theme Toggle Button */}
          <ThemeToggle className="w-8 h-8 md:w-8.5 md:h-8.5" />

          {/* Search / Command Menu Icon Button */}
          <button
            type="button"
            onClick={onOpenCommandMenu}
            aria-label="Open search and command menu"
            className="w-8 h-8 md:w-8.5 md:h-8.5 rounded-full flex items-center justify-center text-[#725965] dark:text-[#C6AFBB] hover:text-[#9E526F] dark:hover:text-[#E8A0BA] bg-[#EFD0DC]/80 dark:bg-[#382632]/80 hover:bg-[#F2D2DE] dark:hover:bg-[#30212C] border border-[#E3B9CA] dark:border-[#543746] hover:border-[#D98BA8]/50 transition-all duration-200 shrink-0 cursor-pointer"
            title="Open search and command menu"
          >
            <Search size={14} className="sm:w-3.5 sm:h-3.5" />
          </button>

          {/* CTA: Say Hi */}
          <a
            href="#contact"
            className="hidden min-[520px]:inline-flex group items-center gap-1 px-3 sm:px-3.5 md:px-4 py-1.5 text-xs sm:text-xs md:text-sm font-semibold text-[#FBEAF0] dark:text-[#211820] bg-[#30212A] dark:bg-[#F7EAF0] hover:bg-[#9E526F] dark:hover:bg-[#E8A0BA] rounded-full transition-all duration-200 hover:scale-[1.02] shadow-xs shrink-0 whitespace-nowrap"
          >
            <span>Say hi</span>
            <span className="text-[10px] sm:text-xs text-[#D98BA8] dark:text-[#BD718F] transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
};
