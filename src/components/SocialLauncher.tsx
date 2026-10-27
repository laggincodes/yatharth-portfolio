import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ExternalLink, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, InstagramIcon, CatPawIcon } from './Icons';
import { useDesktopPointer } from '../utils/useDesktopPointer';

interface SocialLink {
  name: string;
  href: string;
  handle: string;
  icon: React.ReactNode;
  isExternal?: boolean;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Email',
    href: 'mailto:yathusaini10@gmail.com',
    handle: 'yathusaini10@gmail.com',
    icon: <Mail size={16} />,
    isExternal: false,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/laggincodes',
    handle: 'github.com/laggincodes',
    icon: <GithubIcon size={16} />,
    isExternal: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yatharth-saini-6bb584389',
    handle: 'in/yatharth-saini-6bb584389',
    icon: <LinkedinIcon size={16} />,
    isExternal: true,
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/laggincodes/',
    handle: 'leetcode.com/u/laggincodes',
    icon: <LeetCodeIcon size={16} />,
    isExternal: true,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/yatharthsaini1007/',
    handle: '@yatharthsaini1007',
    icon: <InstagramIcon size={16} />,
    isExternal: true,
  },
];

export const SocialLauncher: React.FC = () => {
  const isDesktop = useDesktopPointer();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // If client switches away from desktop pointer, close panel immediately
  useEffect(() => {
    if (!isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  // Close on outside click (only active when open on desktop)
  useEffect(() => {
    if (!isDesktop || !isOpen) return;

    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isDesktop, isOpen]);

  // Close on Escape key (only active when open on desktop)
  useEffect(() => {
    if (!isDesktop || !isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDesktop, isOpen]);

  // On mobile phones and touch-first devices, hide launcher completely
  if (!isDesktop) return null;

  return (
    <div
      ref={containerRef}
      className="hidden [@media(hover:hover)_and_(pointer:fine)]:lg:block fixed bottom-5 right-5 sm:bottom-6 sm:right-8 z-40 select-none"
    >
      <div className="relative">
        {/* Floating Social Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="social-links-panel"
              role="dialog"
              aria-label="Find me elsewhere"
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-14 right-0 mb-2 w-72 sm:w-80 max-w-[calc(100vw-2.5rem)] bg-[#F8E6ED]/95 dark:bg-[#30212C]/95 backdrop-blur-md border border-[#E3B9CA] dark:border-[#543746] rounded-2xl p-4 sm:p-5 shadow-2xl z-50 text-[#30212A] dark:text-[#F7EAF0]"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E3B9CA] dark:border-[#543746] mb-3">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-[#EFD0DC] dark:bg-[#382632] text-[#9E526F] dark:text-[#E8A0BA]">
                    <CatPawIcon size={14} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight text-[#30212A] dark:text-[#F7EAF0]">
                      Find me elsewhere
                    </h3>
                    <p className="text-[10px] font-mono text-[#725965] dark:text-[#C6AFBB]">
                      Direct communication & profiles
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full bg-[#EFD0DC] dark:bg-[#382632] border border-[#E3B9CA] dark:border-[#543746] hover:border-[#D98BA8] flex items-center justify-center text-[#725965] dark:text-[#C6AFBB] hover:text-[#30212A] dark:hover:text-[#F7EAF0] transition-colors cursor-pointer"
                  aria-label="Close social links"
                >
                  <X size={13} />
                </button>
              </div>

              {/* 5 Destination Links */}
              <div className="space-y-1.5">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-[#F3DCE5]/60 hover:bg-[#EFD0DC] dark:bg-[#291D26]/60 dark:hover:bg-[#382632] border border-transparent hover:border-[#E3B9CA] dark:hover:border-[#543746] transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#EFD0DC] dark:bg-[#382632] text-[#9E526F] dark:text-[#E8A0BA] group-hover:text-[#C87998] flex items-center justify-center shrink-0 transition-colors">
                        {link.icon}
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-medium text-[#30212A] dark:text-[#F7EAF0] group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA] transition-colors flex items-center gap-1.5">
                          <span>{link.name}</span>
                        </div>
                        <div className="text-[10px] font-mono text-[#725965] dark:text-[#C6AFBB] truncate">
                          {link.handle}
                        </div>
                      </div>
                    </div>
                    <div className="text-[#725965] dark:text-[#C6AFBB] group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA] group-hover:translate-x-0.5 transition-all pl-2 shrink-0">
                      {link.isExternal ? <ExternalLink size={13} /> : <Mail size={13} />}
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trigger Button with Muted-Pink Cat Paw Icon */}
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-label={isOpen ? 'Close social links' : 'Open social links'}
          aria-expanded={isOpen}
          aria-controls="social-links-panel"
          title="Open social links"
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
            isOpen
              ? 'bg-[#D98BA8] text-white border border-[#C87998]'
              : 'bg-[#F8E6ED]/95 dark:bg-[#30212C]/95 border border-[#E3B9CA] dark:border-[#543746] hover:border-[#D98BA8] dark:hover:border-[#E8A0BA] text-[#9E526F] dark:text-[#E8A0BA]'
          }`}
        >
          {isOpen ? (
            <X size={18} />
          ) : (
            <CatPawIcon size={20} className="transition-transform group-hover:rotate-6" />
          )}
        </motion.button>
      </div>
    </div>
  );
};
