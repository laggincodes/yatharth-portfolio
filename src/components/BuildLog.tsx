import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { BUILDS } from '../data/builds';
import { ArrowUpRight } from 'lucide-react';

const getBuildAccent = (idx: number) => {
  switch (idx % 3) {
    case 0:
      return {
        category: 'text-[#9E526F] dark:text-[#E8A0BA]',
        arrow: 'text-[#9E526F] dark:text-[#E8A0BA]',
        titleHover: 'group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA]',
        badge: 'border-[#D98BA8]/40 bg-[#D98BA8]/20 text-[#9E526F] dark:text-[#E8A0BA]',
      };
    case 1:
      return {
        category: 'text-[#C87998] dark:text-[#D98AA9]',
        arrow: 'text-[#C87998] dark:text-[#D98AA9]',
        titleHover: 'group-hover:text-[#C87998] dark:group-hover:text-[#D98AA9]',
        badge: 'border-[#C87998]/40 bg-[#C87998]/20 text-[#C87998] dark:text-[#D98AA9]',
      };
    default:
      return {
        category: 'text-[#9E526F] dark:text-[#E8A0BA]',
        arrow: 'text-[#9E526F] dark:text-[#E8A0BA]',
        titleHover: 'group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA]',
        badge: 'border-[#D98BA8]/40 bg-[#D98BA8]/20 text-[#9E526F] dark:text-[#E8A0BA]',
      };
  }
};

export const BuildLog: React.FC = () => {
  return (
    <section className="w-full bg-[#F3DCE5] dark:bg-[#211820] py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-[#E3B9CA] dark:border-[#543746] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Section Header */}
        <SectionHeader
          number="04"
          label="BUILD LOG"
          titleNormal="Recent"
          titleItalic="engineering builds."
          description="A chronological ledger of project milestones, prototype releases, and technical implementations."
          numberColor="text-[#9E526F] dark:text-[#E8A0BA]"
        />

        {/* Editorial Timeline Ledger */}
        <div className="border-t border-[#E3B9CA] dark:border-[#543746] divide-y divide-[#E3B9CA] dark:divide-[#543746]">
          {BUILDS.map((build, idx) => {
            const accent = getBuildAccent(idx);
            return (
              <motion.a
                key={build.id}
                href={build.href || '#'}
                target={build.href?.startsWith('http') ? '_blank' : '_self'}
                rel={build.href?.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group py-6 sm:py-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4 sm:gap-8 transition-colors hover:bg-[#EFD0DC]/70 dark:hover:bg-[#30212C] px-3 sm:px-5 -mx-3 sm:-mx-5 rounded-xl"
              >
                {/* Col 1: Date & Metadata */}
                <div className="w-auto md:w-32 shrink-0">
                  <span className="text-xs font-mono text-[#725965] dark:text-[#C6AFBB] uppercase tracking-wider block font-semibold">
                    {build.date}
                  </span>
                </div>

                {/* Col 2: Project & Role */}
                <div className="md:w-1/3 shrink-0 space-y-1">
                  <h3 className={`text-xl sm:text-2xl font-semibold text-[#30212A] dark:text-[#F7EAF0] ${accent.titleHover} transition-colors flex items-center justify-between md:justify-start gap-2`}>
                    <span>{build.title}</span>
                    <ArrowUpRight size={16} className={`opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity ${accent.arrow}`} />
                  </h3>
                  <div className="text-xs font-mono text-[#725965] dark:text-[#C6AFBB] flex items-center gap-2">
                    <span className={`font-semibold ${accent.category}`}>{build.category}</span>
                    <span>•</span>
                    <span>{build.role}</span>
                  </div>
                </div>

                {/* Col 3: Description & Applied Tech */}
                <div className="flex-1 space-y-2.5">
                  <p className="text-sm sm:text-base text-[#725965] dark:text-[#C6AFBB] font-normal leading-relaxed">
                    {build.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {build.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded border border-[#E3B9CA] dark:border-[#543746] bg-[#EFD0DC] dark:bg-[#30212C] text-[#30212A] dark:text-[#F7EAF0] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
