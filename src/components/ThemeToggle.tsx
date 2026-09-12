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
          ? 'bg-[#151A21] border-[#262E38] text-[#9EA3AC] hover:text-[#6FA8FF] hover:border-[#6FA8FF]/40 hover:bg-[#1C222B]'
          : 'bg-[#F5F1E9] border-[#D8D2C5] text-[#555C66] hover:text-[#3272CB] hover:border-[#3272CB]/40 hover:bg-[#EAE5DB] shadow-xs'
      } ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Moon size={13} className="md:w-3.5 md:h-3.5 transition-transform duration-200 hover:-rotate-12 text-[#6FA8FF]" />
      ) : (
        <Sun size={13} className="md:w-3.5 md:h-3.5 transition-transform duration-200 hover:rotate-45 text-[#3272CB]" />
      )}
    </button>
  );
};
