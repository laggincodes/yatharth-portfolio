import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-200 border shrink-0 cursor-pointer ${
        theme === 'dark'
          ? 'bg-[#30212C] border-[#543746] text-[#C6AFBB] hover:text-[#E8A0BA] hover:border-[#E8A0BA]/50 hover:bg-[#382632]'
          : 'bg-[#F8E6ED] border-[#E3B9CA] text-[#725965] hover:text-[#9E526F] hover:border-[#D98BA8] hover:bg-[#EFD0DC] shadow-xs'
      } ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Moon size={13} className="md:w-3.5 md:h-3.5 transition-transform duration-200 hover:-rotate-12 text-[#E8A0BA]" />
      ) : (
        <Sun size={13} className="md:w-3.5 md:h-3.5 transition-transform duration-200 hover:rotate-45 text-[#9E526F]" />
      )}
    </button>
  );
};
