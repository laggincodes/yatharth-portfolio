import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface SectionHeaderProps {
  number: string;
  label: string;
  titleNormal: string;
  titleItalic: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  label,
  titleNormal,
  titleItalic,
  description,
  actionText,
  actionHref,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 dark:border-[#1F1F1F] pb-8 transition-colors duration-200">
      <div className="space-y-4 max-w-2xl">
        {/* Eyebrow Number & Label */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#5F6670] dark:text-[#878787]">
          <span className="text-[#0284C7] dark:text-[#4E85BF] font-semibold">{number}</span>
          <span>/</span>
          <span>{label}</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#111318] dark:text-[#F4F4F4] tracking-tight leading-none transition-colors duration-200">
          {titleNormal}{' '}
          <span className="font-display italic text-[#111318] dark:text-[#F4F4F4] font-normal">
            {titleItalic}
          </span>
        </h2>

        {/* Description */}
        {description && (
          <p className="text-sm md:text-base text-[#5F6670] dark:text-[#878787] font-normal leading-relaxed transition-colors duration-200">
            {description}
          </p>
        )}
      </div>

      {/* Action Link */}
      {actionText && actionHref && (
        <a
          href={actionHref}
          target={actionHref.startsWith('http') ? '_blank' : '_self'}
          rel={actionHref.startsWith('http') ? 'noopener noreferrer' : ''}
          className="inline-flex items-center gap-1 text-xs font-mono text-[#5F6670] dark:text-[#878787] hover:text-[#0284C7] dark:hover:text-[#F4F4F4] transition-colors group shrink-0"
        >
          <span>{actionText}</span>
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}
    </div>
  );
};
