import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Command } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';

interface NavbarProps {
  onOpenCommandMenu: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandMenu }) => {
  const { scrolled } = useScroll();
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center pt-4 md:pt-6 px-4 pointer-events-none"
    >
      <nav
        className={`pointer-events-auto flex items-center gap-2 md:gap-4 px-3 md:px-4 py-2 rounded-full border transition-all duration-300 ${
          scrolled
            ? 'bg-[#141414]/90 backdrop-blur-xl border-[#1F1F1F] shadow-2xl shadow-black/80'
            : 'bg-[#141414]/60 backdrop-blur-md border-[#1F1F1F]/60'
        }`}
      >
        {/* Logo: 9x9 Circle with Accent Ring */}
        <a
          href="#hero"
          className="group relative flex items-center justify-center w-9 h-9 rounded-full bg-[#0A0A0A] border border-[#1F1F1F] transition-transform duration-300 hover:scale-105"
          aria-label="Yatharth Saini Home"
        >
          {/* Subtle Accent Ring */}
          <div className="absolute -inset-[1px] rounded-full accent-gradient opacity-40 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]" />
          <span className="text-xs font-bold tracking-tight text-[#F4F4F4] group-hover:text-white transition-colors">
            YS
          </span>
        </a>

        <div className="h-4 w-[1px] bg-[#1F1F1F]" />

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#F4F4F4] bg-[#1F1F1F]/80'
                    : 'text-[#878787] hover:text-[#F4F4F4] hover:bg-[#1F1F1F]/40'
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
            className="px-2.5 py-1.5 text-xs text-[#878787] hover:text-[#F4F4F4] transition-colors inline-flex items-center gap-1"
            title="View Resume"
          >
            <span>Resume</span>
            <span className="text-[10px]">↗</span>
          </a>
        </div>

        <div className="h-4 w-[1px] bg-[#1F1F1F]" />

        {/* Command Menu Button */}
        <button
          onClick={onOpenCommandMenu}
          className="hidden md:flex items-center gap-1.5 px-2.5 py-1 text-xs text-[#878787] hover:text-[#F4F4F4] bg-[#0A0A0A]/50 hover:bg-[#1F1F1F] rounded-full border border-[#1F1F1F] transition-all duration-200"
          title="Open Command Menu (Cmd+K)"
        >
          <Command size={12} />
          <span className="font-mono text-[10px]">K</span>
        </button>

        {/* CTA: Say Hi */}
        <a
          href="#contact"
          className="flex items-center gap-1 px-3.5 py-1.5 text-xs md:text-sm font-medium text-[#0A0A0A] bg-[#F4F4F4] hover:bg-white rounded-full transition-all duration-200 hover:scale-[1.02] shadow-sm"
        >
          <span>Say hi</span>
          <span className="text-xs">↗</span>
        </a>
      </nav>
    </motion.header>
  );
};
