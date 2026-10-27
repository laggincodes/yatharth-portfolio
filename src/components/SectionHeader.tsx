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
  numberColor?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  label,
  titleNormal,
  titleItalic,
  description,
  actionText,
  actionHref,
  numberColor = "text-[#9E526F] dark:text-[#E8A0BA]",
}) => {
  return (
    <div className="border-b border-[#E3B9CA] dark:border-[#543746] pb-8 sm:pb-10 transition-colors duration-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end justify-between">
        {/* Left Column: Eyebrow + Headline (7 cols) */}
        <div className="lg:col-span-7 space-y-3 sm:space-y-4">
          {/* Eyebrow Number & Label */}
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#725965] dark:text-[#C6AFBB]">
            <span className={`${numberColor} font-semibold font-mono`}>{number}</span>
            <span className="text-[#E3B9CA] dark:text-[#543746]">/</span>
            <span className="font-semibold">{label}</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#30212A] dark:text-[#F7EAF0] tracking-tight leading-tight">
            {titleNormal}{' '}
            <span className="font-display italic font-normal text-[#30212A] dark:text-[#F7EAF0]">
              {titleItalic}
            </span>
          </h2>
        </div>

        {/* Right Column: Description & Optional Action Link (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-end space-y-4">
          {description && (
            <p className="text-sm sm:text-base text-[#725965] dark:text-[#C6AFBB] font-normal leading-relaxed">
              {description}
            </p>
          )}

          {actionText && actionHref && (
            <div className="pt-1">
              <a
                href={actionHref}
                target={actionHref.startsWith('http') ? '_blank' : '_self'}
                rel={actionHref.startsWith('http') ? 'noopener noreferrer' : ''}
                className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#725965] dark:text-[#C6AFBB] hover:text-[#9E526F] dark:hover:text-[#E8A0BA] transition-colors group font-semibold cursor-pointer"
              >
                <span>{actionText}</span>
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#9E526F] dark:text-[#E8A0BA]" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
