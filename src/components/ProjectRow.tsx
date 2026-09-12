import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/projects';

interface ProjectRowProps {
  project: Project;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  onSelectCaseStudy: (project: Project) => void;
}

const getProjectAccent = (id: string) => {
  switch (id) {
    case 'echotutor':
      return {
        numColor: 'text-[#229E94] dark:text-[#43D6C7]',
        badgeBg: 'bg-[#229E94]/10 dark:bg-[#43D6C7]/12 text-[#229E94] dark:text-[#43D6C7] border-[#229E94]/25 dark:border-[#43D6C7]/25',
        hoverBorder: 'hover:border-[#229E94]/40 dark:hover:border-[#43D6C7]/40',
        accentText: 'text-[#229E94] dark:text-[#43D6C7]',
        indicatorBg: 'group-hover:bg-[#229E94]/10 dark:group-hover:bg-[#43D6C7]/15 group-hover:text-[#229E94] dark:group-hover:text-[#43D6C7]',
        gradientOverlay: 'from-black/80 dark:from-[#0B0D10]/95 via-black/25 dark:via-[#0B0D10]/30 to-[#43D6C7]/10',
        focusRing: 'focus-visible:ring-[#229E94] dark:focus-visible:ring-[#43D6C7]',
        titleHover: 'group-hover:text-[#229E94] dark:group-hover:text-[#43D6C7]',
      };
    case 'agora-medicare-ai':
      return {
        numColor: 'text-[#397FCC] dark:text-[#5DA9FF]',
        badgeBg: 'bg-[#397FCC]/10 dark:bg-[#5DA9FF]/12 text-[#397FCC] dark:text-[#5DA9FF] border-[#397FCC]/25 dark:border-[#5DA9FF]/25',
        hoverBorder: 'hover:border-[#397FCC]/40 dark:hover:border-[#5DA9FF]/40',
        accentText: 'text-[#397FCC] dark:text-[#5DA9FF]',
        indicatorBg: 'group-hover:bg-[#397FCC]/10 dark:group-hover:bg-[#5DA9FF]/15 group-hover:text-[#397FCC] dark:group-hover:text-[#5DA9FF]',
        gradientOverlay: 'from-black/80 dark:from-[#0B0D10]/95 via-black/25 dark:via-[#0B0D10]/30 to-[#5DA9FF]/10',
        focusRing: 'focus-visible:ring-[#397FCC] dark:focus-visible:ring-[#5DA9FF]',
        titleHover: 'group-hover:text-[#397FCC] dark:group-hover:text-[#5DA9FF]',
      };
    case 'ai-privacy-risk-simulator':
    default:
      return {
        numColor: 'text-[#7568D8] dark:text-[#9B8CFF]',
        badgeBg: 'bg-[#7568D8]/10 dark:bg-[#9B8CFF]/12 text-[#7568D8] dark:text-[#9B8CFF] border-[#7568D8]/25 dark:border-[#9B8CFF]/25',
        hoverBorder: 'hover:border-[#7568D8]/40 dark:hover:border-[#9B8CFF]/40',
        accentText: 'text-[#7568D8] dark:text-[#9B8CFF]',
        indicatorBg: 'group-hover:bg-[#7568D8]/10 dark:group-hover:bg-[#9B8CFF]/15 group-hover:text-[#7568D8] dark:group-hover:text-[#9B8CFF]',
        gradientOverlay: 'from-black/80 dark:from-[#0B0D10]/95 via-black/25 dark:via-[#0B0D10]/30 to-[#9B8CFF]/10',
        focusRing: 'focus-visible:ring-[#7568D8] dark:focus-visible:ring-[#9B8CFF]',
        titleHover: 'group-hover:text-[#7568D8] dark:group-hover:text-[#9B8CFF]',
      };
  }
};

export const ProjectRow: React.FC<ProjectRowProps> = ({
  project,
  index,
  isOpen,
  onToggle,
  onSelectCaseStudy,
}) => {
  const accent = getProjectAccent(project.id);
  const formattedIndex = String(index + 1).padStart(2, '0');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <article
      className={`group border-b border-[#D9D7CF] dark:border-[#252C36] transition-colors duration-200 ${
        isOpen ? 'bg-[#F8F7F2]/80 dark:bg-[#10141A]/90' : 'hover:bg-[#ECEAE3]/40 dark:hover:bg-[#141922]/40'
      }`}
    >
      {/* Collapsed / Toggle Header Row */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={`project-content-${project.id}`}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className={`w-full py-6 md:py-8 px-2 sm:px-4 md:px-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none focus:outline-none focus-visible:ring-1 ${accent.focusRing}`}
      >
        <div className="flex items-start sm:items-center gap-4 sm:gap-6 md:gap-8 min-w-0 flex-1">
          {/* Index Number */}
          <span className={`font-mono text-xs sm:text-sm font-semibold tracking-wider ${accent.numColor} shrink-0 pt-1 sm:pt-0`}>
            {formattedIndex}
          </span>

          {/* Title & Metadata Stack */}
          <div className="space-y-1.5 min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline gap-3">
              <h3 className={`text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#171A1F] dark:text-[#F1EFE8] ${accent.titleHover} transition-colors truncate`}>
                {project.title}
              </h3>
              <span
                className={`text-[11px] font-mono uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full border backdrop-blur-md shrink-0 hidden sm:inline-block ${accent.badgeBg}`}
              >
                {project.category}
              </span>
            </div>

            {/* Sub-info summary (Role & Short description) */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-normal text-[#5E6570] dark:text-[#A7ABB3] truncate">
              {project.role && (
                <span className={`font-mono ${accent.accentText} shrink-0`}>
                  Role: <strong className="text-[#171A1F] dark:text-[#F1EFE8] font-medium">{project.role}</strong>
                </span>
              )}
              <span className="hidden lg:inline text-[#5E6570] dark:text-[#A7ABB3] truncate max-w-xl">
                • {project.description}
              </span>
            </div>
          </div>
        </div>

        {/* Toggle Indicator Button (+ / −) */}
        <div className="flex items-center gap-3 shrink-0 pt-1 sm:pt-0">
          <button
            type="button"
            aria-label={isOpen ? `Collapse ${project.title}` : `Expand ${project.title}`}
            tabIndex={-1}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D9D7CF] dark:border-[#252C36] bg-[#F8F7F2] dark:bg-[#141922] flex items-center justify-center text-[#5E6570] dark:text-[#A7ABB3] transition-all duration-200 pointer-events-none shadow-xs ${accent.indicatorBg}`}
          >
            {isOpen ? <Minus size={16} className="text-[#171A1F] dark:text-[#F1EFE8]" /> : <Plus size={16} />}
          </button>
        </div>
      </div>

      {/* Expanded Accordion Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={`content-${project.id}`}
            id={`project-content-${project.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-2 sm:px-4 md:px-6 pb-10 sm:pb-12 pt-2 space-y-8">
              {/* Large Editorial Photography Visual */}
              <div className="w-full aspect-[16/10] sm:h-80 md:h-[420px] lg:h-[460px] rounded-xl overflow-hidden border border-[#D9D7CF] dark:border-[#252C36] bg-[#ECEAE3] dark:bg-[#0B0D10] relative group/img shadow-xs">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center brightness-[0.98] dark:brightness-[0.95] group-hover/img:scale-[1.01] transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${accent.gradientOverlay} pointer-events-none`} />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className={`text-[11px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full border backdrop-blur-md shadow-xs ${accent.badgeBg}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Editorial 2-Column Asymmetric Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
                {/* Left Column: Description & Detailed Engineering Contributions (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-[#5E6570] dark:text-[#A7ABB3]">
                      OVERVIEW & PURPOSE
                    </h4>
                    <p className="text-base sm:text-lg text-[#171A1F] dark:text-[#F1EFE8] font-normal leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Contributions List */}
                  {project.caseStudy?.contributions && project.caseStudy.contributions.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-[#D9D7CF] dark:border-[#252C36]">
                      <h4 className={`text-xs font-mono uppercase tracking-[0.25em] ${accent.numColor}`}>
                        ENGINEERING IMPLEMENTATION & CONTRIBUTIONS
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {project.caseStudy.contributions.map((contribution, cIdx) => (
                          <li
                            key={cIdx}
                            className="flex items-start gap-2.5 text-sm sm:text-base text-[#5E6570] dark:text-[#A7ABB3] leading-relaxed"
                          >
                            <span className={`${accent.numColor} shrink-0 text-sm`}>—</span>
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Column: Editorial Metadata Ledger & Action Links (5 cols) */}
                <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#D9D7CF] dark:border-[#252C36] pt-6 lg:pt-0 lg:pl-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#5E6570] dark:text-[#A7ABB3]">
                        PROJECT ROLE
                      </span>
                      <p className="text-sm sm:text-base font-mono text-[#171A1F] dark:text-[#F1EFE8] font-medium">
                        {project.role || 'Developer'}
                      </p>
                    </div>

                    <div className="space-y-2 border-t border-[#D9D7CF] dark:border-[#252C36] pt-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#5E6570] dark:text-[#A7ABB3]">
                        TECHNOLOGIES APPLIED
                      </span>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-3 py-1 rounded-md bg-[#ECEAE3] dark:bg-[#181D25] border border-[#D9D7CF] dark:border-[#252C36] text-[#171A1F] dark:text-[#F1EFE8]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTAs: GitHub & Case Study Modal */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-[#D9D7CF] dark:border-[#252C36]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-transparent hover:bg-[#ECEAE3] dark:hover:bg-[#181D25] border border-[#D9D7CF] dark:border-[#252C36] text-xs sm:text-sm font-medium text-[#171A1F] dark:text-[#F1EFE8] transition-all duration-200"
                      >
                        <GithubIcon size={15} className={accent.numColor} />
                        <span>GitHub ↗</span>
                      </a>
                    )}

                    <button
                      onClick={() => onSelectCaseStudy(project)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#171A1F] hover:bg-[#252C36] dark:bg-[#F1EFE8] dark:hover:bg-white text-[#F3F1EA] dark:text-[#0B0D10] text-xs sm:text-sm font-medium transition-all duration-200 shadow-xs sm:ml-auto"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};
