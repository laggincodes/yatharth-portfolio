import React from 'react';
import { ArrowUpRight, ChevronDown, CheckCircle2, FlaskConical, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onSelectCaseStudy: (project: Project) => void;
}

const ACCENT_STYLES = {
  voicebench: {
    cardBg: 'bg-[#F8E6ED] dark:bg-[#30212C] hover:bg-[#FBEAF0] dark:hover:bg-[#382632]',
    cardBorder: 'border-[#E3B9CA] dark:border-[#543746] hover:border-[#D98BA8] dark:hover:border-[#E8A0BA]',
    divider: 'border-[#E3B9CA] dark:border-[#543746]',
    numColor: 'text-[#9E526F] dark:text-[#E8A0BA]',
    badge: 'text-[#9E526F] dark:text-[#E8A0BA] bg-[#D98BA8]/20 dark:bg-[#E8A0BA]/15 border-[#D98BA8]/40 dark:border-[#E8A0BA]/40',
    expandBtn: 'bg-[#D98BA8]/20 hover:bg-[#D98BA8]/30 text-[#9E526F] dark:text-[#E8A0BA] border-[#D98BA8]/40 dark:border-[#E8A0BA]/40',
    titleHover: 'group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA]',
    bulletColor: 'text-[#9E526F] dark:text-[#E8A0BA]',
    techPill: 'bg-[#EFD0DC] dark:bg-[#291D26] border-[#E3B9CA] dark:border-[#543746] text-[#30212A] dark:text-[#F7EAF0]',
    btnPrimary: 'bg-[#30212A] hover:bg-[#9E526F] text-[#FBEAF0] dark:bg-[#F7EAF0] dark:text-[#211820] dark:hover:bg-[#E8A0BA]',
    linkHover: 'hover:text-[#9E526F] dark:hover:text-[#E8A0BA]',
  },
  echotutor: {
    cardBg: 'bg-[#F8E6ED] dark:bg-[#30212C] hover:bg-[#FBEAF0] dark:hover:bg-[#382632]',
    cardBorder: 'border-[#E3B9CA] dark:border-[#543746] hover:border-[#D98BA8] dark:hover:border-[#E8A0BA]',
    divider: 'border-[#E3B9CA] dark:border-[#543746]',
    numColor: 'text-[#C87998] dark:text-[#E8A0BA]',
    badge: 'text-[#C87998] dark:text-[#E8A0BA] bg-[#D98BA8]/20 dark:bg-[#E8A0BA]/15 border-[#D98BA8]/40 dark:border-[#E8A0BA]/40',
    expandBtn: 'bg-[#D98BA8]/20 hover:bg-[#D98BA8]/30 text-[#C87998] dark:text-[#E8A0BA] border-[#D98BA8]/40 dark:border-[#E8A0BA]/40',
    titleHover: 'group-hover:text-[#C87998] dark:group-hover:text-[#E8A0BA]',
    bulletColor: 'text-[#C87998] dark:text-[#E8A0BA]',
    techPill: 'bg-[#EFD0DC] dark:bg-[#291D26] border-[#E3B9CA] dark:border-[#543746] text-[#30212A] dark:text-[#F7EAF0]',
    btnPrimary: 'bg-[#30212A] hover:bg-[#9E526F] text-[#FBEAF0] dark:bg-[#F7EAF0] dark:text-[#211820] dark:hover:bg-[#E8A0BA]',
    linkHover: 'hover:text-[#C87998] dark:hover:text-[#E8A0BA]',
  },
  'agora-medicare-ai': {
    cardBg: 'bg-[#F8E6ED] dark:bg-[#30212C] hover:bg-[#FBEAF0] dark:hover:bg-[#382632]',
    cardBorder: 'border-[#E3B9CA] dark:border-[#543746] hover:border-[#D98BA8] dark:hover:border-[#E8A0BA]',
    divider: 'border-[#E3B9CA] dark:border-[#543746]',
    numColor: 'text-[#9E526F] dark:text-[#E8A0BA]',
    badge: 'text-[#9E526F] dark:text-[#E8A0BA] bg-[#D98BA8]/20 dark:bg-[#E8A0BA]/15 border-[#D98BA8]/40 dark:border-[#E8A0BA]/40',
    expandBtn: 'bg-[#D98BA8]/20 hover:bg-[#D98BA8]/30 text-[#9E526F] dark:text-[#E8A0BA] border-[#D98BA8]/40 dark:border-[#E8A0BA]/40',
    titleHover: 'group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA]',
    bulletColor: 'text-[#9E526F] dark:text-[#E8A0BA]',
    techPill: 'bg-[#EFD0DC] dark:bg-[#291D26] border-[#E3B9CA] dark:border-[#543746] text-[#30212A] dark:text-[#F7EAF0]',
    btnPrimary: 'bg-[#30212A] hover:bg-[#9E526F] text-[#FBEAF0] dark:bg-[#F7EAF0] dark:text-[#211820] dark:hover:bg-[#E8A0BA]',
    linkHover: 'hover:text-[#9E526F] dark:hover:text-[#E8A0BA]',
  },
  'ai-privacy-risk-simulator': {
    cardBg: 'bg-[#F8E6ED] dark:bg-[#30212C] hover:bg-[#FBEAF0] dark:hover:bg-[#382632]',
    cardBorder: 'border-[#E3B9CA] dark:border-[#543746] hover:border-[#D98BA8] dark:hover:border-[#E8A0BA]',
    divider: 'border-[#E3B9CA] dark:border-[#543746]',
    numColor: 'text-[#9E526F] dark:text-[#E8A0BA]',
    badge: 'text-[#9E526F] dark:text-[#E8A0BA] bg-[#D98BA8]/20 dark:bg-[#E8A0BA]/15 border-[#D98BA8]/40 dark:border-[#E8A0BA]/40',
    expandBtn: 'bg-[#D98BA8]/20 hover:bg-[#D98BA8]/30 text-[#9E526F] dark:text-[#E8A0BA] border-[#D98BA8]/40 dark:border-[#E8A0BA]/40',
    titleHover: 'group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA]',
    bulletColor: 'text-[#9E526F] dark:text-[#E8A0BA]',
    techPill: 'bg-[#EFD0DC] dark:bg-[#291D26] border-[#E3B9CA] dark:border-[#543746] text-[#30212A] dark:text-[#F7EAF0]',
    btnPrimary: 'bg-[#30212A] hover:bg-[#9E526F] text-[#FBEAF0] dark:bg-[#F7EAF0] dark:text-[#211820] dark:hover:bg-[#E8A0BA]',
    linkHover: 'hover:text-[#9E526F] dark:hover:text-[#E8A0BA]',
  },
};

const getStatusBadgeStyle = (status: Project['status']) => {
  switch (status) {
    case 'Verified locally':
    case 'Working demo':
      return 'bg-[#2B855D]/15 dark:bg-[#78CCA6]/15 text-[#2B855D] dark:text-[#78CCA6] border-[#2B855D]/30 dark:border-[#78CCA6]/35';
    case 'Prototype':
      return 'bg-[#B8732A]/15 dark:bg-[#E8A85C]/15 text-[#B8732A] dark:text-[#E8A85C] border-[#B8732A]/30 dark:border-[#E8A85C]/35';
    default:
      return 'bg-[#D98BA8]/20 dark:bg-[#E8A0BA]/15 text-[#9E526F] dark:text-[#E8A0BA] border-[#D98BA8]/40 dark:border-[#E8A0BA]/35';
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isExpanded,
  onToggleExpand,
  onSelectCaseStudy,
}) => {
  const accent =
    ACCENT_STYLES[project.id as keyof typeof ACCENT_STYLES] ||
    ACCENT_STYLES['voicebench'];
  const formattedIndex = String(index + 1).padStart(2, '0');

  // Key implementation items (limit to top 4 for controlled height inside cell)
  const implementationList = project.implementation.slice(0, 4);

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-xl border p-4 sm:p-5 transition-all duration-250 ease-out shadow-xs hover:shadow-sm ${accent.cardBg} ${accent.cardBorder}`}
    >
      <div>
        {/* Top Header: 01 + Category + Standard Status Pill + Expand/Collapse */}
        <div className={`flex items-center justify-between gap-2 pb-2.5 border-b ${accent.divider}`}>
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`font-mono text-xs sm:text-sm font-semibold tracking-wider ${accent.numColor}`}>
              {formattedIndex}
            </span>
            <span className="text-[#6E6470]/40 dark:text-[#AAA3AD]/40">/</span>
            <span
              className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] px-2 py-0.5 rounded border font-semibold ${accent.badge}`}
            >
              {project.category}
            </span>
            <span
              className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border font-medium flex items-center gap-1 ${getStatusBadgeStyle(
                project.status
              )}`}
            >
              {project.status === 'Verified locally' || project.status === 'Working demo' ? (
                <CheckCircle2 size={10} className="shrink-0" />
              ) : (
                <FlaskConical size={10} className="shrink-0" />
              )}
              <span>{project.status}</span>
            </span>
          </div>

          <button
            type="button"
            onClick={onToggleExpand}
            aria-label={isExpanded ? `Collapse ${project.title}` : `Expand ${project.title}`}
            aria-expanded={isExpanded}
            className={`w-7 h-7 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0 ${accent.expandBtn}`}
            title={isExpanded ? 'Collapse' : 'Expand details'}
          >
            <ChevronDown
              size={13}
              className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>
        </div>

        {/* Main Title & Role */}
        <div className="pt-2.5 space-y-0.5 sm:space-y-1">
          <h3
            onClick={onToggleExpand}
            className={`text-lg sm:text-xl font-semibold tracking-tight text-[#30212A] dark:text-[#F7EAF0] ${accent.titleHover} transition-all duration-200 cursor-pointer group-hover:translate-x-1`}
          >
            {project.title}
          </h3>
          {project.role && (
            <p className="text-[11px] sm:text-xs font-mono text-[#725965] dark:text-[#C6AFBB]">
              Role: <span className="text-[#30212A] dark:text-[#F7EAF0] font-semibold">{project.role}</span>
            </p>
          )}
        </div>

        {/* Short Description */}
        <p className={`text-xs sm:text-[13px] text-[#725965] dark:text-[#C6AFBB] font-normal leading-relaxed pt-1.5 ${isExpanded ? '' : 'line-clamp-2'}`}>
          {project.description}
        </p>

        {/* Controlled Compact Project Image with responsive scaling & subtle matte overlay */}
        <div
          onClick={onToggleExpand}
          className={`relative w-full aspect-[16/9] max-h-[175px] sm:max-h-[195px] rounded-lg overflow-hidden border ${accent.divider} bg-[#EFD0DC] dark:bg-[#291D26] mt-3 mb-2.5 cursor-pointer select-none`}
        >
          <img
            src={project.image}
            alt={`${project.title} interface preview`}
            loading="lazy"
            className="w-full h-full object-cover object-center brightness-[0.98] dark:brightness-[0.95] group-hover:scale-[1.02] transition-transform duration-300 ease-out"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 dark:from-[#211820]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* In-Cell Expanded Compact Editorial Section: 5-Part Structure Details */}
        {isExpanded && (
          <div className={`pt-2.5 pb-1 border-t ${accent.divider} space-y-2.5 transition-all duration-200`}>
            {/* 1. Problem */}
            <div className="space-y-0.5">
              <span className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-widest font-semibold ${accent.numColor}`}>
                1. PROBLEM SOLVED
              </span>
              <p className="text-xs sm:text-[13px] text-[#30212A] dark:text-[#F7EAF0] font-normal leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* 2. Implementation Highlights */}
            {implementationList.length > 0 && (
              <div className="space-y-1">
                <span className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-widest font-semibold ${accent.numColor}`}>
                  2. IMPLEMENTATION
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 text-xs text-[#725965] dark:text-[#C6AFBB]">
                  {implementationList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 leading-snug">
                      <span className={`${accent.bulletColor} font-bold shrink-0`}>•</span>
                      <span className="text-[#30212A] dark:text-[#F7EAF0]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 3. Inspectable Evidence */}
            <div className="space-y-1 pt-1 border-t border-[#E3B9CA]/60 dark:border-[#543746]/60">
              <span className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-widest font-semibold ${accent.numColor}`}>
                3. EVIDENCE & INSPECTION
              </span>
              <div className="flex items-start gap-1.5 text-xs font-mono text-[#725965] dark:text-[#C6AFBB] bg-[#EFD0DC]/70 dark:bg-white/5 p-2 rounded">
                <Terminal size={12} className="shrink-0 mt-0.5 text-[#9E526F] dark:text-[#E8A0BA]" />
                <span className="leading-snug">
                  {project.evidence.testCmd ? (
                    <>
                      <code className="text-[#30212A] dark:text-[#F7EAF0]">{project.evidence.testCmd}</code> —{' '}
                    </>
                  ) : null}
                  {project.evidence.inspectionNotes}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 5. Technology Stack Pills */}
        <div className="flex flex-wrap gap-1 pt-1.5 pb-2.5">
          {project.technologies.slice(0, isExpanded ? undefined : 5).map((tech) => (
            <span
              key={tech}
              className={`text-[11px] sm:text-xs font-mono px-2 py-0.5 rounded border font-medium ${accent.techPill}`}
            >
              {tech}
            </span>
          ))}
          {!isExpanded && project.technologies.length > 5 && (
            <span className="text-[11px] sm:text-xs font-mono px-1.5 py-0.5 text-[#725965] dark:text-[#C6AFBB]">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Controls / Actions */}
      <div className={`pt-2.5 border-t ${accent.divider} flex items-center justify-between gap-2 text-xs font-mono`}>
        <div className="flex items-center gap-1.5 sm:gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`min-h-[38px] sm:min-h-[34px] inline-flex items-center gap-1 px-2 py-1.5 rounded-md text-[#725965] dark:text-[#C6AFBB] ${accent.linkHover} transition-colors group/link font-medium cursor-pointer`}
              title="View GitHub Repository"
            >
              <GithubIcon size={14} className="shrink-0" />
              <span>GitHub</span>
              <span className="text-[10px] opacity-70 group-hover/link:translate-x-0.5 transition-transform">↗</span>
            </a>
          )}

          <button
            type="button"
            onClick={onToggleExpand}
            className={`min-h-[38px] sm:min-h-[34px] inline-flex items-center px-2 py-1.5 rounded-md text-[#725965] dark:text-[#C6AFBB] ${accent.linkHover} transition-colors font-medium cursor-pointer`}
          >
            {isExpanded ? '− Less' : '+ Details'}
          </button>
        </div>

        {/* Case Study Modal Trigger */}
        <button
          type="button"
          onClick={() => onSelectCaseStudy(project)}
          className={`min-h-[38px] sm:min-h-[34px] group/btn inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 shadow-xs cursor-pointer ${accent.btnPrimary}`}
        >
          <span>Case Study</span>
          <ArrowUpRight
            size={12}
            className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-[#D98BA8] dark:text-[#BD718F]"
          />
        </button>
      </div>
    </article>
  );
};
