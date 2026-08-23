import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowUpRight, CheckCircle2, Terminal, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/projects';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  // Handle escape key and body overflow
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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Case Study Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl bg-[#141414] border border-[#1F1F1F] rounded-3xl shadow-2xl z-10 text-[#F4F4F4] my-auto overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Modal Sticky Top Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F1F1F] bg-[#0A0A0A]/90 backdrop-blur-md sticky top-0 z-20">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-xs font-mono text-[#878787] hover:text-[#F4F4F4] transition-colors group"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span>Back to work</span>
            </button>

            <span className="text-[11px] font-mono text-[#4E85BF] bg-[#141414] px-3 py-1 rounded-full border border-[#1F1F1F]">
              CASE STUDY
            </span>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#141414] border border-[#1F1F1F] flex items-center justify-center text-[#878787] hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Scrollable Body Content */}
          <div className="p-6 md:p-10 overflow-y-auto space-y-10">
            {/* Project Hero Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#878787] bg-[#0A0A0A] px-3 py-1 rounded-full border border-[#1F1F1F]">
                  {project.category}
                </span>
                {project.status && (
                  <span className="text-[11px] font-mono text-[#4E85BF] bg-[#0A0A0A] px-3 py-1 rounded-full border border-[#1F1F1F]">
                    ● {project.status}
                  </span>
                )}
                {project.role && (
                  <span className="text-[11px] font-mono text-[#89AACC]">
                    Role: <strong className="text-[#F4F4F4]">{project.role}</strong>
                  </span>
                )}
              </div>

              <h2 className="text-3xl md:text-5xl font-light text-[#F4F4F4] tracking-tight">
                {project.title}
              </h2>

              <p className="text-base md:text-lg text-[#878787] font-normal leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Visual Screen Cover */}
            <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-[#1F1F1F] bg-[#0A0A0A] relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />
            </div>

            {/* Overview & Problem / Goal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-[#1F1F1F] space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#4E85BF] flex items-center gap-2">
                  <Terminal size={14} />
                  <span>Overview & Problem Goal</span>
                </h3>
                <p className="text-xs md:text-sm text-[#878787] leading-relaxed">
                  {project.caseStudy?.overview || project.description}
                </p>
              </div>

              <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-[#1F1F1F] space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#4E85BF] flex items-center gap-2">
                  <Code2 size={14} />
                  <span>System Architecture</span>
                </h3>
                <p className="text-xs md:text-sm text-[#878787] leading-relaxed">
                  {project.caseStudy?.howItWorks || 'Built using modern React components, responsive layouts, and streaming network hooks.'}
                </p>
              </div>
            </div>

            {/* Detailed Contributions */}
            {project.caseStudy?.contributions && project.caseStudy.contributions.length > 0 && (
              <div className="space-y-4 border-t border-[#1F1F1F] pt-8">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#878787]">
                  ENGINEERING CONTRIBUTION ({project.role || 'Full-Stack Developer'})
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.caseStudy.contributions.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-[#0A0A0A] p-3.5 rounded-xl border border-[#1F1F1F] text-xs text-[#F4F4F4]"
                    >
                      <CheckCircle2 size={16} className="text-[#4E85BF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack & External Links */}
            <div className="border-t border-[#1F1F1F] pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#878787] uppercase tracking-wider block">
                  Technologies Applied
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-[#0A0A0A] border border-[#1F1F1F] text-[#F4F4F4]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A0A0A] hover:bg-[#1F1F1F] border border-[#1F1F1F] text-xs font-medium text-[#F4F4F4] transition-colors"
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                    <ArrowUpRight size={14} className="text-[#878787]" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
