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
        numColor: 'text-[#0284C7] dark:text-[#58C7D9]',
        badgeBg: 'bg-[#0284C7]/10 dark:bg-[#58C7D9]/10 text-[#0284C7] dark:text-[#58C7D9] border-[#0284C7]/30 dark:border-[#58C7D9]/30',
        hoverBorder: 'hover:border-[#0284C7]/50 dark:hover:border-[#58C7D9]/50',
        accentText: 'text-[#0284C7] dark:text-[#58C7D9]',
        indicatorBg: 'group-hover:bg-[#0284C7]/15 dark:group-hover:bg-[#58C7D9]/20 group-hover:text-[#0284C7] dark:group-hover:text-[#58C7D9]',
      };
    case 'agora-medicare-ai':
      return {
        numColor: 'text-[#0D9488] dark:text-[#4AAE9B]',
        badgeBg: 'bg-[#0D9488]/10 dark:bg-[#4AAE9B]/10 text-[#0D9488] dark:text-[#4AAE9B] border-[#0D9488]/30 dark:border-[#4AAE9B]/30',
        hoverBorder: 'hover:border-[#0D9488]/50 dark:hover:border-[#4AAE9B]/50',
        accentText: 'text-[#0D9488] dark:text-[#4AAE9B]',
        indicatorBg: 'group-hover:bg-[#0D9488]/15 dark:group-hover:bg-[#4AAE9B]/20 group-hover:text-[#0D9488] dark:group-hover:text-[#4AAE9B]',
      };
    case 'ai-privacy-risk-simulator':
    default:
      return {
        numColor: 'text-[#6D5DE7] dark:text-[#8B7CFF]',
        badgeBg: 'bg-[#6D5DE7]/10 dark:bg-[#8B7CFF]/10 text-[#6D5DE7] dark:text-[#8B7CFF] border-[#6D5DE7]/30 dark:border-[#8B7CFF]/30',
        hoverBorder: 'hover:border-[#6D5DE7]/50 dark:hover:border-[#8B7CFF]/50',
        accentText: 'text-[#6D5DE7] dark:text-[#8B7CFF]',
        indicatorBg: 'group-hover:bg-[#6D5DE7]/15 dark:group-hover:bg-[#8B7CFF]/20 group-hover:text-[#6D5DE7] dark:group-hover:text-[#8B7CFF]',
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
      className={`group border-b border-slate-200/80 dark:border-[#1F1F1F] transition-colors duration-200 ${
        isOpen ? 'bg-white/80 dark:bg-[#141414]/60' : 'hover:bg-slate-100/50 dark:hover:bg-[#141414]/30'
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
        className="w-full py-6 md:py-8 px-2 sm:px-4 md:px-6 flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0284C7] dark:focus-visible:ring-[#58C7D9]"
      >
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 min-w-0 flex-1">
          {/* Index Number */}
          <span className={`font-mono text-sm sm:text-base font-semibold ${accent.numColor} shrink-0`}>
            {formattedIndex}
          </span>

          {/* Title & Metadata Stack */}
          <div className="space-y-1.5 min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#111318] dark:text-[#F4F4F4] group-hover:text-[#0284C7] dark:group-hover:text-white transition-colors truncate">
                {project.title}
              </h3>
              <span
                className={`text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full border backdrop-blur-md shrink-0 hidden sm:inline-block ${accent.badgeBg}`}
              >
                {project.category}
              </span>
            </div>

            {/* Sub-info summary (Role & Short description) */}
            <div className="flex items-center gap-3 text-xs font-normal text-[#5F6670] dark:text-[#878787] truncate">
              {project.role && (
                <span className="font-mono text-[#4A7C59] dark:text-[#89AACC] shrink-0">
                  Role: <strong className="text-[#111318] dark:text-[#F4F4F4] font-normal">{project.role}</strong>
                </span>
              )}
              <span className="hidden lg:inline text-[#5F6670] dark:text-[#878787] truncate max-w-xl">
                • {project.description}
              </span>
            </div>
          </div>
        </div>

        {/* Toggle Indicator Button (+ / −) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            aria-label={isOpen ? `Collapse ${project.title}` : `Expand ${project.title}`}
            tabIndex={-1}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0A0A] flex items-center justify-center text-[#5F6670] dark:text-[#878787] transition-all duration-200 pointer-events-none shadow-xs ${accent.indicatorBg}`}
          >
            {isOpen ? <Minus size={18} className="text-[#111318] dark:text-[#F4F4F4]" /> : <Plus size={18} />}
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
            <div className="px-2 sm:px-4 md:px-6 pb-8 md:pb-10 pt-2 space-y-8">
              {/* Large Project Image Visual */}
              <div className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[440px] rounded-2xl overflow-hidden border border-slate-200 dark:border-[#1F1F1F] bg-slate-100 dark:bg-[#0A0A0A] relative group/img shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center brightness-[0.98] dark:brightness-[0.95] group-hover/img:scale-[1.02] transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#0A0A0A]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className={`text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full border backdrop-blur-md ${accent.badgeBg}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Editorial 2-Column Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Description & Detailed Engineering Contributions */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#5F6670] dark:text-[#878787]">
                      OVERVIEW & PURPOSE
                    </h4>
                    <p className="text-sm md:text-base text-[#111318] dark:text-[#F4F4F4] font-normal leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Contributions List */}
                  {project.caseStudy?.contributions && project.caseStudy.contributions.length > 0 && (
                    <div className="space-y-3 pt-2 border-t border-slate-200/80 dark:border-[#1F1F1F]/80">
                      <h4 className={`text-xs font-mono uppercase tracking-[0.2em] ${accent.numColor}`}>
                        ENGINEERING IMPLEMENTATION & CONTRIBUTIONS
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {project.caseStudy.contributions.map((contribution, cIdx) => (
                          <li
                            key={cIdx}
                            className="flex items-start gap-2 text-xs md:text-sm text-[#5F6670] dark:text-[#878787] leading-relaxed"
                          >
                            <span className={`${accent.numColor} shrink-0`}>•</span>
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Column: Stack & Action Links */}
                <div className="lg:col-span-5 bg-white dark:bg-[#0A0A0A] border border-slate-200 dark:border-[#1F1F1F] rounded-2xl p-6 space-y-6 flex flex-col justify-between shadow-sm">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6670] dark:text-[#878787]">
                        PROJECT ROLE
                      </span>
                      <p className="text-sm font-mono text-[#111318] dark:text-[#F4F4F4]">
                        {project.role || 'Developer'}
                      </p>
                    </div>

                    <div className="space-y-2 border-t border-slate-200 dark:border-[#1F1F1F] pt-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6670] dark:text-[#878787]">
                        TECHNOLOGIES APPLIED
                      </span>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#141414] border border-slate-200 dark:border-[#1F1F1F] text-[#111318] dark:text-[#F4F4F4]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTAs: GitHub & Case Study Modal */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-[#1F1F1F]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-[#141414] dark:hover:bg-[#1F1F1F] border border-slate-200 dark:border-[#1F1F1F] text-xs font-medium text-[#111318] dark:text-[#F4F4F4] transition-all duration-200 hover:scale-[1.02]"
                      >
                        <GithubIcon size={16} className={accent.numColor} />
                        <span>GitHub ↗</span>
                      </a>
                    )}

                    <button
                      onClick={() => onSelectCaseStudy(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111318] hover:bg-black dark:bg-[#F4F4F4] dark:hover:bg-white text-white dark:text-[#0A0A0A] text-xs font-medium transition-all duration-200 hover:scale-[1.02] shadow-sm ml-auto"
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
