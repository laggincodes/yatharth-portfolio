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
            className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-md transition-colors duration-200"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-lg bg-[#F8F5EE] dark:bg-[#151A21] border border-[#D8D2C5] dark:border-[#262E38] rounded-2xl shadow-2xl overflow-hidden z-10 text-[#171A1D] dark:text-[#EDEDED] transition-colors duration-200"
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-[#D8D2C5] dark:border-[#262E38]">
              <Search className="w-4 h-4 text-[#555C66] dark:text-[#9EA3AC] mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-sm text-[#171A1D] dark:text-[#EDEDED] placeholder-[#555C66] dark:placeholder-[#767D88] focus:outline-none"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-1 text-[#555C66] dark:text-[#9EA3AC] hover:text-[#171A1D] dark:hover:text-[#EDEDED] rounded-lg transition-colors cursor-pointer"
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
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm text-[#555C66] dark:text-[#9EA3AC] hover:text-[#171A1D] dark:hover:text-[#EDEDED] hover:bg-[#EAE5DB] dark:hover:bg-[#1C222B] transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={16} className="text-[#555C66] dark:text-[#9EA3AC] group-hover:text-[#3272CB] dark:group-hover:text-[#6FA8FF] transition-colors" />
                        <span>{cmd.label}</span>
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#555C66] dark:text-[#9EA3AC] group-hover:text-[#171A1D] dark:group-hover:text-[#EDEDED]">
                        Select ↵
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="px-4 py-8 text-center text-xs text-[#555C66] dark:text-[#9EA3AC]">
                  No matching commands found.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-[#D8D2C5] dark:border-[#262E38] bg-[#EFEAE1] dark:bg-[#12161D] text-[10px] text-[#555C66] dark:text-[#9EA3AC]">
              <span>Use keyboard to navigate</span>
              <span className="font-mono bg-[#E8E3D8] dark:bg-[#181F28] border border-[#D8D2C5] dark:border-[#262E38] px-1.5 py-0.5 rounded text-[#171A1D] dark:text-[#EDEDED]">ESC to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
