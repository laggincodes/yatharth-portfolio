import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderKanban, User, Mail, FileText, BarChart3, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const COMMANDS = [
    {
      id: 'activity',
      label: 'View Developer Activity (GitHub & LeetCode)',
      icon: BarChart3,
      action: () => {
        document.getElementById('activity')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'work',
      label: 'Go to Featured Work',
      icon: FolderKanban,
      action: () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'about',
      label: 'Go to About & Stack',
      icon: User,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'contact',
      label: 'Send a Message / Contact',
      icon: Mail,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'resume',
      label: 'Request Resume (PDF via Email)',
      icon: FileText,
      action: () => {
        window.location.href = 'mailto:yathusaini10@gmail.com?subject=Resume%20Request%20-%20Yatharth%20Saini';
        onClose();
      },
    },
    {
      id: 'voicebench',
      label: 'Open VoiceBench GitHub Repository',
      icon: GithubIcon,
      action: () => {
        window.open('https://github.com/laggincodes/voicebench', '_blank');
        onClose();
      },
    },
    {
      id: 'echotutor',
      label: 'Open EchoTutor GitHub Repository',
      icon: GithubIcon,
      action: () => {
        window.open('https://github.com/laggincodes/EchoTutor.git', '_blank');
        onClose();
      },
    },
    {
      id: 'github',
      label: 'Open GitHub Profile',
      icon: GithubIcon,
      action: () => {
        window.open('https://github.com/laggincodes', '_blank');
        onClose();
      },
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn Profile',
      icon: LinkedinIcon,
      action: () => {
        window.open('https://www.linkedin.com/in/yatharth-saini-6bb584389', '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = COMMANDS.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-24 px-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#211820]/50 dark:bg-[#211820]/75 backdrop-blur-md transition-colors duration-200"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-lg bg-[#F8E6ED] dark:bg-[#30212C] border border-[#E3B9CA] dark:border-[#543746] rounded-2xl shadow-2xl overflow-hidden z-10 text-[#30212A] dark:text-[#F7EAF0] transition-colors duration-200"
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-[#E3B9CA] dark:border-[#543746]">
              <Search className="w-4 h-4 text-[#725965] dark:text-[#C6AFBB] mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-sm text-[#30212A] dark:text-[#F7EAF0] placeholder-[#725965] dark:placeholder-[#C6AFBB]/70 focus:outline-none"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-1 text-[#725965] dark:text-[#C6AFBB] hover:text-[#30212A] dark:hover:text-[#F7EAF0] rounded-lg transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto py-2 px-2">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd) => {
                  const Icon = cmd.icon;
                  return (
                    <button
                      key={cmd.id}
                      onClick={cmd.action}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm text-[#725965] dark:text-[#C6AFBB] hover:text-[#30212A] dark:hover:text-[#F7EAF0] hover:bg-[#EFD0DC] dark:hover:bg-[#382632] transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={16} className="text-[#725965] dark:text-[#C6AFBB] group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA] transition-colors" />
                        <span>{cmd.label}</span>
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#725965] dark:text-[#C6AFBB] group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA]">
                        Select ↵
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="px-4 py-8 text-center text-xs text-[#725965] dark:text-[#C6AFBB]">
                  No matching commands found.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-[#E3B9CA] dark:border-[#543746] bg-[#EFD0DC] dark:bg-[#291D26] text-[10px] text-[#725965] dark:text-[#C6AFBB]">
              <span>Use keyboard to navigate</span>
              <span className="font-mono bg-[#FBEAF0] dark:bg-[#382632] border border-[#E3B9CA] dark:border-[#543746] px-1.5 py-0.5 rounded text-[#30212A] dark:text-[#F7EAF0]">ESC to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
