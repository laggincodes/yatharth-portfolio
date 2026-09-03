import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={() => onSelect(project)}
      className={`group cursor-pointer relative bg-[#141414] hover:bg-[#1A1A1A] border border-[#1F1F1F] hover:border-[#4E85BF]/40 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-500 min-h-[420px] md:min-h-[460px] ${project.gridSpan}`}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center opacity-35 group-hover:opacity-25 group-hover:scale-105 transition-all duration-700 ease-out"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Fallback Watermark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-transparent" />
      </div>

      {/* Top Header Information */}
      <div className="relative z-10 p-6 md:p-8 flex justify-between items-start">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#878787] bg-[#0A0A0A]/85 px-3 py-1 rounded-full border border-[#1F1F1F]/80 backdrop-blur-md inline-block">
            {project.category}
          </span>
          {project.role && (
            <div className="text-[11px] font-mono text-[#89AACC] pt-1">
              Role: <span className="text-[#F4F4F4]">{project.role}</span>
            </div>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#0A0A0A]/80 border border-[#1F1F1F] flex items-center justify-center text-[#878787] hover:text-[#F4F4F4] hover:border-[#4E85BF] transition-all duration-300 hover:scale-105 shadow-md backdrop-blur-md"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 p-6 md:p-8 space-y-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-medium text-[#F4F4F4] group-hover:text-white flex items-center gap-2 transition-colors">
            <span>{project.title}</span>
            <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#4E85BF]" />
          </h3>
          <p className="text-sm md:text-base text-[#878787] font-normal leading-relaxed mt-2 max-w-xl">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#0A0A0A]/70 border border-[#1F1F1F] text-[#878787] group-hover:text-[#F4F4F4] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <span className="text-[11px] font-mono text-[#4E85BF] group-hover:underline flex items-center gap-1">
            View Case Study →
          </span>
        </div>
      </div>
    </motion.article>
  );
};
