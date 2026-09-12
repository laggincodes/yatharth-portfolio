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

  const accentColor =
    project.id === 'echotutor'
      ? 'text-[#1D9AA2] dark:text-[#35C7D0]'
      : project.id === 'agora-medicare-ai'
      ? 'text-[#C57D28] dark:text-[#E7A85B]'
      : 'text-[#6C5CE7] dark:text-[#9A8CFF]';

  const accentHoverBorder =
    project.id === 'echotutor'
      ? 'hover:border-[#1D9AA2]/50 dark:hover:border-[#35C7D0]/50'
      : project.id === 'agora-medicare-ai'
      ? 'hover:border-[#C57D28]/50 dark:hover:border-[#E7A85B]/50'
      : 'hover:border-[#6C5CE7]/50 dark:hover:border-[#9A8CFF]/50';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0D1014]/75 dark:bg-[#0D1014]/90 backdrop-blur-md transition-colors duration-200"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-5xl bg-[#F5F1E9] dark:bg-[#151A20] border border-[#D8D2C5] dark:border-[#262E38] rounded-xl sm:rounded-2xl shadow-xl z-10 text-[#171A1D] dark:text-[#EDEDED] my-auto overflow-hidden max-h-[94vh] flex flex-col transition-colors duration-200"
        >
          {/* Modal Sticky Header Navigation */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#D8D2C5] dark:border-[#262E38] bg-[#F5F1E9]/95 dark:bg-[#151A20]/95 backdrop-blur-md sticky top-0 z-20 transition-colors duration-200">
            <button
              onClick={onClose}
              className="min-h-[44px] flex items-center gap-2 text-xs sm:text-sm font-mono text-[#555C66] dark:text-[#9EA3AC] hover:text-[#1D9AA2] dark:hover:text-[#35C7D0] transition-colors group font-semibold cursor-pointer"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span>Back to work</span>
            </button>

            <span className={`text-[11px] font-mono ${accentColor} tracking-widest uppercase font-semibold`}>
              CASE STUDY
            </span>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className={`w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-[#EAE5DC] dark:bg-[#1C2229] border border-[#D8D2C5] dark:border-[#262E38] ${accentHoverBorder} flex items-center justify-center text-[#555C66] dark:text-[#9EA3AC] hover:text-[#171A1D] dark:hover:text-white transition-colors cursor-pointer`}
            >
              <X size={16} />
            </button>
          </div>

          {/* Scrollable Editorial Body */}
          <div className="p-4 sm:p-8 md:p-12 overflow-y-auto space-y-6 sm:space-y-10">
            {/* Clean Editorial Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#59616A] dark:text-[#9AA0AA]">
                <span className={`${accentColor} font-semibold`}>{formattedIndex}</span>
                <span className="text-[#D8D2C5] dark:text-[#262E38]">/</span>
                <span className="font-semibold">SELECTED WORK</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#171A1D] dark:text-[#F1EFE8] tracking-tight leading-tight transition-colors duration-200">
                {project.title}
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-[#59616A] dark:text-[#9AA0AA] font-normal leading-relaxed max-w-3xl transition-colors duration-200">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 text-xs sm:text-sm font-mono text-[#5E6570] dark:text-[#A7ABB3]">
                <span className={`${accentColor} font-medium uppercase tracking-wider`}>
                  {project.category}
                </span>
                {project.role && (
                  <>
                    <span>•</span>
                    <span className={accentColor}>
                      Role: <strong className="text-[#171A1F] dark:text-[#F1EFE8] font-medium">{project.role}</strong>
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Hero Image Centerpiece */}
            <div className="w-full aspect-[16/10] sm:h-80 md:h-[420px] lg:h-[460px] rounded-2xl md:rounded-3xl overflow-hidden border border-[#D9D7CF] dark:border-[#252C36] bg-[#ECEAE3] dark:bg-[#0B0D10] relative group shadow-sm transition-colors duration-200">
              <img
                src={project.image}
                alt={
                  project.id === 'echotutor'
                    ? 'EchoTutor AI voice co-teacher project interface'
                    : project.id === 'agora-medicare-ai'
                    ? 'Agora Medicare AI real-time clinical triage platform interface'
                    : project.id === 'ai-privacy-risk-simulator'
                    ? 'AI Privacy Risk Simulator vulnerability dashboard and risk matrix'
                    : `${project.title} project interface`
                }
                className="w-full h-full object-cover object-center brightness-[0.98] dark:brightness-[0.95] group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 dark:from-[#0B0D10] via-transparent to-transparent opacity-70 pointer-events-none" />
            </div>

            {/* 2-Column Editorial Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-4">
              {/* Left Column: Overview & Engineering Capabilities */}
              <div className="lg:col-span-7 space-y-10">
                {/* Overview */}
                <div className="space-y-3">
                  <h3 className={`text-xs font-mono uppercase tracking-[0.25em] ${accentColor}`}>
                    OVERVIEW
                  </h3>
                  <p className="text-base md:text-lg text-[#171A1F] dark:text-[#F1EFE8] font-normal leading-relaxed transition-colors duration-200">
                    {project.caseStudy?.overview || project.description}
                  </p>
                </div>

                {/* Architecture / How It Works */}
                {project.caseStudy?.howItWorks && (
                  <div className="space-y-3 pt-6 border-t border-[#D9D7CF] dark:border-[#252C36]">
                    <h3 className={`text-xs font-mono uppercase tracking-[0.25em] ${accentColor}`}>
                      SYSTEM ARCHITECTURE
                    </h3>
                    <p className="text-sm md:text-base text-[#5E6570] dark:text-[#A7ABB3] font-normal leading-relaxed transition-colors duration-200">
                      {project.caseStudy.howItWorks}
                    </p>
                  </div>
                )}

                {/* Engineering Implementation & Contributions */}
                {project.caseStudy?.contributions && project.caseStudy.contributions.length > 0 && (
                  <div className="space-y-4 pt-6 border-t border-[#D9D7CF] dark:border-[#252C36]">
                    <h3 className={`text-xs font-mono uppercase tracking-[0.25em] ${accentColor}`}>
                      ENGINEERING IMPLEMENTATION & CAPABILITIES
                    </h3>

                    <div className="divide-y divide-[#D9D7CF] dark:divide-[#252C36] border-y border-[#D9D7CF] dark:border-[#252C36] transition-colors duration-200">
                      {project.caseStudy.contributions.map((item, idx) => {
                        const num = String(idx + 1).padStart(2, '0');
                        return (
                          <div
                            key={idx}
                            className="py-3 flex items-start justify-between gap-4 text-xs sm:text-sm text-[#171A1F] dark:text-[#F1EFE8] hover:text-[#397FCC] dark:hover:text-[#5DA9FF] transition-colors"
                          >
                            <span className={`font-mono ${accentColor} text-xs font-medium shrink-0 pt-0.5`}>
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
              <div className="lg:col-span-5 border-l-0 lg:border-l border-[#D9D7CF] dark:border-[#252C36] pl-0 lg:pl-10 space-y-8 flex flex-col justify-between min-h-[300px] transition-colors duration-200">
                <div className="space-y-6">
                  {/* Role */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#5E6570] dark:text-[#A7ABB3] block">
                      ROLE
                    </span>
                    <p className="text-sm font-mono text-[#171A1F] dark:text-[#F1EFE8] font-medium">
                      {project.role || 'Developer'}
                    </p>
                  </div>

                  {/* Category */}
                  <div className="space-y-1 border-t border-[#D9D7CF] dark:border-[#252C36] pt-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#5E6570] dark:text-[#A7ABB3] block">
                      CATEGORY
                    </span>
                    <p className={`text-sm font-mono ${accentColor}`}>
                      {project.category}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2 border-t border-[#D9D7CF] dark:border-[#252C36] pt-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#5E6570] dark:text-[#A7ABB3] block">
                      TECHNOLOGIES
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#ECEAE3] dark:bg-[#181D25] border border-[#D9D7CF] dark:border-[#252C36] text-[#171A1F] dark:text-[#F1EFE8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* External GitHub Link Action */}
                {project.github && (
                  <div className="pt-6 border-t border-[#D8D2C5] dark:border-[#262E38]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`min-h-[44px] group inline-flex items-center justify-between w-full px-5 py-3 rounded-full bg-[#EAE5DC] hover:bg-[#E3DFD5] dark:bg-[#181D25] dark:hover:bg-[#252C36] border border-[#D8D2C5] dark:border-[#262E38] ${accentHoverBorder} text-xs sm:text-sm font-medium text-[#171A1D] dark:text-[#EDEDED] transition-all duration-200 shadow-xs cursor-pointer`}
                    >
                      <div className="flex items-center gap-2.5">
                        <GithubIcon size={16} className={accentColor} />
                        <span>View Repository</span>
                      </div>
                      <ArrowUpRight size={14} className={`text-[#555C66] dark:text-[#9EA3AC] group-hover:${accentColor} transition-colors`} />
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
