import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-200 border shrink-0 ${
        theme === 'dark'
          ? 'bg-[#0A0A0A]/60 border-[#1F1F1F] text-[#878787] hover:text-[#58C7D9] hover:border-[#58C7D9]/40 hover:bg-[#1F1F1F]'
          : 'bg-white/80 border-slate-200 text-[#5F6670] hover:text-[#0284C7] hover:border-[#0284C7]/40 hover:bg-slate-100 shadow-sm'
      } ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Moon size={13} className="md:w-3.5 md:h-3.5 transition-transform duration-200 hover:-rotate-12 text-[#58C7D9]" />
      ) : (
        <Sun size={13} className="md:w-3.5 md:h-3.5 transition-transform duration-200 hover:rotate-45 text-[#0284C7]" />
      )}
    </button>
  );
};
