import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/projects';
import type { Project } from '../data/projects';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  // Handle escape key and body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const projectIdx = PROJECTS.findIndex((p) => p.id === project.id);
  const formattedIndex = projectIdx >= 0 ? String(projectIdx + 1).padStart(2, '0') : '01';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-xl transition-colors duration-200"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-5xl bg-white dark:bg-[#0F131C] border border-slate-200 dark:border-[#1F1F1F] rounded-2xl sm:rounded-3xl shadow-2xl z-10 text-[#111318] dark:text-[#F4F4F4] my-auto overflow-hidden max-h-[92vh] flex flex-col transition-colors duration-200"
        >
          {/* Modal Sticky Header Navigation */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-[#1F1F1F] bg-white/95 dark:bg-[#0A0A0A]/90 backdrop-blur-md sticky top-0 z-20 transition-colors duration-200">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-xs font-mono text-[#5F6670] dark:text-[#878787] hover:text-[#0284C7] dark:hover:text-[#58C7D9] transition-colors group"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span>Back to work</span>
            </button>

            <span className="text-[11px] font-mono text-[#0284C7] dark:text-[#58C7D9] tracking-widest uppercase">
              CASE STUDY
            </span>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 rounded-full bg-slate-100 dark:bg-[#141414] border border-slate-200 dark:border-[#1F1F1F] hover:border-[#0284C7]/50 dark:hover:border-[#58C7D9]/50 flex items-center justify-center text-[#5F6670] dark:text-[#878787] hover:text-[#111318] dark:hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Scrollable Editorial Body */}
          <div className="p-5 sm:p-8 md:p-12 overflow-y-auto space-y-8 sm:space-y-10">
            {/* Clean Editorial Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#5F6670] dark:text-[#878787]">
                <span className="text-[#0284C7] dark:text-[#58C7D9] font-semibold">{formattedIndex}</span>
                <span>/</span>
                <span>SELECTED WORK</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#111318] dark:text-[#F4F4F4] tracking-tight leading-tight transition-colors duration-200">
                {project.title}
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-[#5F6670] dark:text-[#878787] font-light leading-relaxed max-w-3xl transition-colors duration-200">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 text-xs sm:text-sm font-mono text-[#5F6670] dark:text-[#878787]">
                <span className="text-[#0284C7] dark:text-[#58C7D9] font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                {project.role && (
                  <>
                    <span>•</span>
                    <span className="text-[#4A7C59] dark:text-[#89AACC]">
                      Role: <strong className="text-[#111318] dark:text-[#F4F4F4] font-normal">{project.role}</strong>
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Hero Image Centerpiece */}
            <div className="w-full aspect-[16/10] sm:h-80 md:h-[420px] lg:h-[460px] rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200 dark:border-[#1F1F1F] bg-slate-100 dark:bg-[#0A0A0A] relative group shadow-sm transition-colors duration-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center brightness-[0.98] dark:brightness-[0.95] group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#0F131C] via-transparent to-transparent opacity-70 pointer-events-none" />
            </div>

            {/* 2-Column Editorial Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-4">
              {/* Left Column: Overview & Engineering Capabilities */}
              <div className="lg:col-span-7 space-y-10">
                {/* Overview */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#0284C7] dark:text-[#58C7D9]">
                    OVERVIEW
                  </h3>
                  <p className="text-base md:text-lg text-[#111318] dark:text-[#F4F4F4] font-normal leading-relaxed transition-colors duration-200">
                    {project.caseStudy?.overview || project.description}
                  </p>
                </div>

                {/* Architecture / How It Works */}
                {project.caseStudy?.howItWorks && (
                  <div className="space-y-3 pt-6 border-t border-slate-200/80 dark:border-[#1F1F1F]/80">
                    <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#0284C7] dark:text-[#58C7D9]">
                      SYSTEM ARCHITECTURE
                    </h3>
                    <p className="text-sm md:text-base text-[#5F6670] dark:text-[#878787] font-normal leading-relaxed transition-colors duration-200">
                      {project.caseStudy.howItWorks}
                    </p>
                  </div>
                )}

                {/* Engineering Implementation & Contributions */}
                {project.caseStudy?.contributions && project.caseStudy.contributions.length > 0 && (
                  <div className="space-y-4 pt-6 border-t border-slate-200/80 dark:border-[#1F1F1F]/80">
                    <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#0284C7] dark:text-[#58C7D9]">
                      ENGINEERING IMPLEMENTATION & CAPABILITIES
                    </h3>

                    <div className="divide-y divide-slate-200/80 dark:divide-[#1F1F1F]/60 border-y border-slate-200/80 dark:border-[#1F1F1F]/60 transition-colors duration-200">
                      {project.caseStudy.contributions.map((item, idx) => {
                        const num = String(idx + 1).padStart(2, '0');
                        return (
                          <div
                            key={idx}
                            className="py-3 flex items-start justify-between gap-4 text-xs sm:text-sm text-[#111318] dark:text-[#F4F4F4] hover:text-[#0284C7] dark:hover:text-white transition-colors"
                          >
                            <span className="font-mono text-[#0284C7] dark:text-[#58C7D9] text-xs font-medium shrink-0 pt-0.5">
                              {num}
                            </span>
                            <span className="flex-1 font-normal leading-relaxed">
                              {item}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Project Info & GitHub Action Link */}
              <div className="lg:col-span-5 border-l-0 lg:border-l border-slate-200/80 dark:border-[#1F1F1F]/80 pl-0 lg:pl-10 space-y-8 flex flex-col justify-between min-h-[300px] transition-colors duration-200">
                <div className="space-y-6">
                  {/* Role */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6670] dark:text-[#878787] block">
                      ROLE
                    </span>
                    <p className="text-sm font-mono text-[#111318] dark:text-[#F4F4F4]">
                      {project.role || 'Developer'}
                    </p>
                  </div>

                  {/* Category */}
                  <div className="space-y-1 border-t border-slate-200/60 dark:border-[#1F1F1F]/60 pt-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6670] dark:text-[#878787] block">
                      CATEGORY
                    </span>
                    <p className="text-sm font-mono text-[#0284C7] dark:text-[#58C7D9]">
                      {project.category}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2 border-t border-slate-200/60 dark:border-[#1F1F1F]/60 pt-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6670] dark:text-[#878787] block">
                      TECHNOLOGIES
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#141414] border border-slate-200 dark:border-[#1F1F1F] text-[#111318] dark:text-[#F4F4F4]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* External GitHub Link Action */}
                {project.github && (
                  <div className="pt-6 border-t border-slate-200/80 dark:border-[#1F1F1F]/80">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-between w-full px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-[#141414] dark:hover:bg-[#1A1A1A] border border-slate-200 hover:border-[#0284C7]/50 dark:border-[#1F1F1F] dark:hover:border-[#58C7D9]/50 text-xs font-medium text-[#111318] dark:text-[#F4F4F4] transition-all duration-200 shadow-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <GithubIcon size={16} className="text-[#0284C7] dark:text-[#58C7D9]" />
                        <span>View Repository</span>
                      </div>
                      <ArrowUpRight size={14} className="text-[#5F6670] dark:text-[#878787] group-hover:text-[#0284C7] dark:group-hover:text-[#58C7D9] transition-colors" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
