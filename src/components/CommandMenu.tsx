import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderKanban, User, Mail, FileText, X } from 'lucide-react';
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
        isOpen ? onClose() : null;
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
      label: 'View Resume (PDF)',
      icon: FileText,
      action: () => {
        window.open('/resume.pdf', '_blank');
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
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-lg bg-[#141414] border border-[#1F1F1F] rounded-2xl shadow-2xl overflow-hidden z-10 text-[#F4F4F4]"
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-[#1F1F1F]">
              <Search className="w-4 h-4 text-[#878787] mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-sm text-[#F4F4F4] placeholder-[#878787] focus:outline-none"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-1 text-[#878787] hover:text-[#F4F4F4] rounded-lg transition-colors"
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
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm text-[#878787] hover:text-[#F4F4F4] hover:bg-[#1F1F1F] transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={16} className="text-[#878787] group-hover:text-[#4E85BF] transition-colors" />
                        <span>{cmd.label}</span>
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#878787] group-hover:text-[#F4F4F4]">
                        Select ↵
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="px-4 py-8 text-center text-xs text-[#878787]">
                  No matching commands found.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-[#1F1F1F] bg-[#0A0A0A]/50 text-[10px] text-[#878787]">
              <span>Use keyboard to navigate</span>
              <span className="font-mono bg-[#1F1F1F] px-1.5 py-0.5 rounded text-[#F4F4F4]">ESC to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
