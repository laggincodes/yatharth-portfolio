import React from 'react';
import { motion } from 'framer-motion';

const STATS_DATA = [
  {
    index: '01',
    value: '04',
    label: 'FEATURED BUILDS',
    detail: 'VoiceBench, EchoTutor, Agora Medicare AI & Privacy Simulator',
    accent: 'text-[#9E526F] dark:text-[#E8A0BA]',
  },
  {
    index: '02',
    value: '195+',
    label: 'AUTOMATED TESTS',
    detail: 'Passing unit & regression test suites across active frameworks',
    accent: 'text-[#C87998] dark:text-[#D98AA9]',
  },
  {
    index: '03',
    value: '100%',
    label: 'OPEN CODEBASE',
    detail: 'Public GitHub repositories with inspectable architectures & guides',
    accent: 'text-[#9E526F] dark:text-[#E8A0BA]',
  },
];

export const Stats: React.FC = () => {
  return (
    <section className="w-full bg-[#EFD0DC]/50 dark:bg-[#291D26]/70 py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-[#E3B9CA] dark:border-[#543746] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E3B9CA] dark:divide-[#543746] border-y border-[#E3B9CA] dark:border-[#543746]">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="py-6 md:py-8 px-0 md:px-8 first:md:pl-0 last:md:pr-0 space-y-2.5"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-3xl sm:text-4xl md:text-5xl font-medium font-mono tracking-tight text-[#30212A] dark:text-[#F7EAF0]">
                  {stat.value}
                </span>
                <span className={`text-[11px] font-mono ${stat.accent} uppercase tracking-widest font-semibold`}>
                  {stat.index}
                </span>
              </div>
              <div className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-[#30212A] dark:text-[#F7EAF0] font-semibold">
                {stat.label}
              </div>
              <p className="text-xs sm:text-sm text-[#725965] dark:text-[#C6AFBB] leading-relaxed">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
