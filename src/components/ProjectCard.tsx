import React from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
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
  echotutor: {
    cardBg: 'bg-[#F0F7F6] dark:bg-[#0E1719] hover:bg-[#EAF4F3] dark:hover:bg-[#111C1F]',
    cardBorder: 'border-[#1D9AA2]/30 dark:border-[#35C7D0]/25 hover:border-[#1D9AA2]/60 dark:hover:border-[#35C7D0]/60',
    divider: 'border-[#1D9AA2]/20 dark:border-[#35C7D0]/20',
    numColor: 'text-[#1D9AA2] dark:text-[#35C7D0]',
    badge: 'text-[#1D9AA2] dark:text-[#35C7D0] bg-[#1D9AA2]/10 dark:bg-[#35C7D0]/12 border-[#1D9AA2]/25 dark:border-[#35C7D0]/30',
    expandBtn: 'bg-[#1D9AA2]/10 hover:bg-[#1D9AA2]/18 dark:bg-[#35C7D0]/10 dark:hover:bg-[#35C7D0]/20 text-[#1D9AA2] dark:text-[#35C7D0] border-[#1D9AA2]/25 dark:border-[#35C7D0]/30',
    titleHover: 'group-hover:text-[#1D9AA2] dark:group-hover:text-[#35C7D0]',
    bulletColor: 'text-[#1D9AA2] dark:text-[#35C7D0]',
    techPill: 'bg-[#E5F1F0] dark:bg-[#132226] border-[#1D9AA2]/20 dark:border-[#35C7D0]/25 text-[#171A1D] dark:text-[#D5F0F2]',
    btnPrimary: 'bg-[#1D9AA2] hover:bg-[#17858C] text-white dark:bg-[#35C7D0] dark:text-[#0B1516] dark:hover:bg-[#48DEE6] font-semibold',
    linkHover: 'hover:text-[#1D9AA2] dark:hover:text-[#35C7D0]',
  },
  'agora-medicare-ai': {
    cardBg: 'bg-[#F8F3EB] dark:bg-[#18140F] hover:bg-[#F5EDE2] dark:hover:bg-[#1D1812]',
    cardBorder: 'border-[#C57D28]/30 dark:border-[#E7A85B]/25 hover:border-[#C57D28]/60 dark:hover:border-[#E7A85B]/60',
    divider: 'border-[#C57D28]/20 dark:border-[#E7A85B]/20',
    numColor: 'text-[#C57D28] dark:text-[#E7A85B]',
    badge: 'text-[#C57D28] dark:text-[#E7A85B] bg-[#C57D28]/10 dark:bg-[#E7A85B]/12 border-[#C57D28]/25 dark:border-[#E7A85B]/30',
    expandBtn: 'bg-[#C57D28]/10 hover:bg-[#C57D28]/18 dark:bg-[#E7A85B]/10 dark:hover:bg-[#E7A85B]/20 text-[#C57D28] dark:text-[#E7A85B] border-[#C57D28]/25 dark:border-[#E7A85B]/30',
    titleHover: 'group-hover:text-[#C57D28] dark:group-hover:text-[#E7A85B]',
    bulletColor: 'text-[#C57D28] dark:text-[#E7A85B]',
    techPill: 'bg-[#F2E8DB] dark:bg-[#231C14] border-[#C57D28]/20 dark:border-[#E7A85B]/25 text-[#171A1D] dark:text-[#F3E7D7]',
    btnPrimary: 'bg-[#C57D28] hover:bg-[#AE6D21] text-white dark:bg-[#E7A85B] dark:text-[#181208] dark:hover:bg-[#F0B873] font-semibold',
    linkHover: 'hover:text-[#C57D28] dark:hover:text-[#E7A85B]',
  },
  'ai-privacy-risk-simulator': {
    cardBg: 'bg-[#F4F1F8] dark:bg-[#16121D] hover:bg-[#EFEAF5] dark:hover:bg-[#1A1523]',
    cardBorder: 'border-[#6C5CE7]/30 dark:border-[#9A8CFF]/25 hover:border-[#6C5CE7]/60 dark:hover:border-[#9A8CFF]/60',
    divider: 'border-[#6C5CE7]/20 dark:border-[#9A8CFF]/20',
    numColor: 'text-[#6C5CE7] dark:text-[#9A8CFF]',
    badge: 'text-[#6C5CE7] dark:text-[#9A8CFF] bg-[#6C5CE7]/10 dark:bg-[#9A8CFF]/12 border-[#6C5CE7]/25 dark:border-[#9A8CFF]/30',
    expandBtn: 'bg-[#6C5CE7]/10 hover:bg-[#6C5CE7]/18 dark:bg-[#9A8CFF]/10 dark:hover:bg-[#9A8CFF]/20 text-[#6C5CE7] dark:text-[#9A8CFF] border-[#6C5CE7]/25 dark:border-[#9A8CFF]/30',
    titleHover: 'group-hover:text-[#6C5CE7] dark:group-hover:text-[#9A8CFF]',
    bulletColor: 'text-[#6C5CE7] dark:text-[#9A8CFF]',
    techPill: 'bg-[#ECE5F5] dark:bg-[#201A2B] border-[#6C5CE7]/20 dark:border-[#9A8CFF]/25 text-[#171A1D] dark:text-[#EAE5F8]',
    btnPrimary: 'bg-[#6C5CE7] hover:bg-[#5B4BC9] text-white dark:bg-[#9A8CFF] dark:text-[#120E1D] dark:hover:bg-[#ACA0FF] font-semibold',
    linkHover: 'hover:text-[#6C5CE7] dark:hover:text-[#9A8CFF]',
  },
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
    ACCENT_STYLES['ai-privacy-risk-simulator'];
  const formattedIndex = String(index + 1).padStart(2, '0');

  // Key contributions (limit to top 4 for controlled height inside cell)
  const contributions = project.caseStudy?.contributions?.slice(0, 4) || [];

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-xl border p-4 sm:p-5 transition-all duration-250 ease-out shadow-xs hover:shadow-sm ${accent.cardBg} ${accent.cardBorder}`}
    >
      <div>
        {/* Top Header: 01 + Category + Expand/Collapse Indicator */}
        <div className={`flex items-center justify-between gap-2 pb-2.5 border-b ${accent.divider}`}>
          <div className="flex items-center gap-2">
            <span className={`font-mono text-xs sm:text-sm font-semibold tracking-wider ${accent.numColor}`}>
              {formattedIndex}
            </span>
            <span className="text-[#59616A]/40 dark:text-[#9AA0AA]/40">/</span>
            <span
              className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] px-2 py-0.5 rounded border transition-colors duration-200 font-semibold ${accent.badge}`}
            >
              {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onToggleExpand}
            aria-label={isExpanded ? `Collapse ${project.title}` : `Expand ${project.title}`}
            aria-expanded={isExpanded}
            className={`w-7 h-7 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${accent.expandBtn}`}
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
            className={`text-lg sm:text-xl font-semibold tracking-tight text-[#171A1D] dark:text-[#EDEDED] ${accent.titleHover} transition-all duration-200 cursor-pointer group-hover:translate-x-1`}
          >
            {project.title}
          </h3>
          {project.role && (
            <p className="text-[11px] sm:text-xs font-mono text-[#555C66] dark:text-[#9EA3AC]">
              Role: <span className="text-[#171A1D] dark:text-[#EDEDED] font-semibold">{project.role}</span>
            </p>
          )}
        </div>

        {/* Short Description */}
        <p className={`text-xs sm:text-[13px] text-[#555C66] dark:text-[#9EA3AC] font-normal leading-relaxed pt-1.5 ${isExpanded ? '' : 'line-clamp-2'}`}>
          {project.description}
        </p>

        {/* Controlled Compact Project Image with responsive scaling & subtle matte overlay */}
        <div
          onClick={onToggleExpand}
          className={`relative w-full aspect-[16/9] max-h-[175px] sm:max-h-[195px] rounded-lg overflow-hidden border ${accent.divider} bg-[#EAE5DC] dark:bg-[#11151A] mt-3 mb-2.5 cursor-pointer select-none`}
        >
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
            loading="lazy"
            className="w-full h-full object-cover object-center brightness-[0.98] dark:brightness-[0.95] group-hover:scale-[1.02] transition-transform duration-300 ease-out"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 dark:from-[#0D1014]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* In-Cell Expanded Compact Editorial Section */}
        {isExpanded && (
          <div className={`pt-2.5 pb-1 border-t ${accent.divider} space-y-2.5 transition-all duration-200`}>
            {/* Overview & Purpose */}
            <div className="space-y-0.5">
              <span className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-widest font-semibold ${accent.numColor}`}>
                OVERVIEW & PURPOSE
              </span>
              <p className="text-xs sm:text-[13px] text-[#171A1D] dark:text-[#EDEDED] font-normal leading-relaxed">
                {project.caseStudy?.overview || project.description}
              </p>
            </div>

            {/* Engineering Implementation Highlights (2-Column Grid on sm+ screens) */}
            {contributions.length > 0 && (
              <div className="space-y-1">
                <span className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-widest font-semibold ${accent.numColor}`}>
                  ENGINEERING IMPLEMENTATION
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 text-xs text-[#555C66] dark:text-[#9EA3AC]">
                  {contributions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 leading-snug">
                      <span className={`${accent.bulletColor} font-bold shrink-0`}>•</span>
                      <span className="text-[#171A1D] dark:text-[#EDEDED]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Technology Pills with compact padding */}
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
            <span className="text-[11px] sm:text-xs font-mono px-1.5 py-0.5 text-[#555C66] dark:text-[#9EA3AC]">
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
              className={`min-h-[38px] sm:min-h-[34px] inline-flex items-center gap-1 px-2 py-1.5 rounded-md text-[#555C66] dark:text-[#9EA3AC] ${accent.linkHover} transition-colors group/link font-medium cursor-pointer`}
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
            className={`min-h-[38px] sm:min-h-[34px] inline-flex items-center px-2 py-1.5 rounded-md text-[#555C66] dark:text-[#9EA3AC] ${accent.linkHover} transition-colors font-medium cursor-pointer`}
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
            className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </button>
      </div>
    </article>
  );
};
