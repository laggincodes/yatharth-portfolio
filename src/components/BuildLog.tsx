import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { BUILDS } from '../data/builds';
import { ArrowUpRight } from 'lucide-react';

const getBuildAccent = (idx: number) => {
  switch (idx) {
    case 0:
      return {
        category: 'text-[#1D9AA2] dark:text-[#35C7D0]',
        arrow: 'text-[#1D9AA2] dark:text-[#35C7D0]',
        titleHover: 'group-hover:text-[#1D9AA2] dark:group-hover:text-[#35C7D0]',
        badge: 'border-[#1D9AA2]/25 bg-[#1D9AA2]/8 text-[#1D9AA2] dark:text-[#35C7D0]',
      };
    case 1:
      return {
        category: 'text-[#C57D28] dark:text-[#E7A85B]',
        arrow: 'text-[#C57D28] dark:text-[#E7A85B]',
        titleHover: 'group-hover:text-[#C57D28] dark:group-hover:text-[#E7A85B]',
        badge: 'border-[#C57D28]/25 bg-[#C57D28]/8 text-[#C57D28] dark:text-[#E7A85B]',
      };
    default:
      return {
        category: 'text-[#6C5CE7] dark:text-[#9A8CFF]',
        arrow: 'text-[#6C5CE7] dark:text-[#9A8CFF]',
        titleHover: 'group-hover:text-[#6C5CE7] dark:group-hover:text-[#9A8CFF]',
        badge: 'border-[#6C5CE7]/25 bg-[#6C5CE7]/8 text-[#6C5CE7] dark:text-[#9A8CFF]',
      };
  }
};

export const BuildLog: React.FC = () => {
  return (
    <section className="w-full bg-[#F1EEE7] dark:bg-[#0D1014] py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-[#D8D2C5] dark:border-[#262E38] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Section Header */}
        <SectionHeader
          number="02"
          label="BUILD LOG"
          titleNormal="Recent"
          titleItalic="engineering builds."
          description="A chronological ledger of project milestones, prototype releases, and technical implementations."
          numberColor="text-[#C57D28] dark:text-[#E7A85B]"
        />

        {/* Editorial Timeline Ledger */}
        <div className="border-t border-[#D8D2C5] dark:border-[#262E38] divide-y divide-[#D8D2C5] dark:divide-[#262E38]">
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
                className="group py-6 sm:py-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4 sm:gap-8 transition-colors hover:bg-[#E9E5DC]/50 dark:hover:bg-[#151A21]/60 px-3 sm:px-5 -mx-3 sm:-mx-5 rounded-xl"
              >
                {/* Col 1: Date & Metadata */}
                <div className="w-auto md:w-32 shrink-0">
                  <span className="text-xs font-mono text-[#555C66] dark:text-[#9EA3AC] uppercase tracking-wider block font-semibold">
                    {build.date}
                  </span>
                </div>

                {/* Col 2: Project & Role */}
                <div className="md:w-1/3 shrink-0 space-y-1">
                  <h3 className={`text-xl sm:text-2xl font-semibold text-[#171A1D] dark:text-[#EDEDED] ${accent.titleHover} transition-colors flex items-center justify-between md:justify-start gap-2`}>
                    <span>{build.title}</span>
                    <ArrowUpRight size={16} className={`opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity ${accent.arrow}`} />
                  </h3>
                  <div className="text-xs font-mono text-[#555C66] dark:text-[#9EA3AC] flex items-center gap-2">
                    <span className={`font-semibold ${accent.category}`}>{build.category}</span>
                    <span>•</span>
                    <span>{build.role}</span>
                  </div>
                </div>

                {/* Col 3: Description & Applied Tech */}
                <div className="flex-1 space-y-2.5">
                  <p className="text-sm sm:text-base text-[#555C66] dark:text-[#9EA3AC] font-normal leading-relaxed">
                    {build.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {build.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded border border-[#D8D2C5] dark:border-[#262E38] bg-[#EAE5DC] dark:bg-[#151A20] text-[#171A1D] dark:text-[#EDEDED] font-medium"
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
