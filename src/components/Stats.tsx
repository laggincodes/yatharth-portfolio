import React from 'react';
import { motion } from 'framer-motion';

const STATS_DATA = [
  {
    index: '01',
    value: '03',
    label: 'FEATURED PROJECTS',
    detail: 'EchoTutor, Agora Medicare AI & Privacy Risk Simulator',
    accent: 'text-[#1D9AA2] dark:text-[#35C7D0]',
  },
  {
    index: '02',
    value: '01',
    label: 'PRIMARY PRACTICE',
    detail: 'Full-Stack Software Engineering & AI Products',
    accent: 'text-[#C57D28] dark:text-[#E7A85B]',
  },
  {
    index: '03',
    value: '100%',
    label: 'CODE TRANSPARENCY',
    detail: 'Public repositories, complete documentation & live demos',
    accent: 'text-[#6C5CE7] dark:text-[#9A8CFF]',
  },
];

export const Stats: React.FC = () => {
  return (
    <section className="w-full bg-[#E9E5DC]/40 dark:bg-[#11151A]/60 py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-[#D8D2C5] dark:border-[#262E38] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D8D2C5] dark:divide-[#262E38] border-y border-[#D8D2C5] dark:border-[#262E38]">
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
                <span className={`text-3xl sm:text-4xl md:text-5xl font-medium font-mono tracking-tight text-[#171A1D] dark:text-[#EDEDED]`}>
                  {stat.value}
                </span>
                <span className={`text-[11px] font-mono ${stat.accent} uppercase tracking-widest font-semibold`}>
                  {stat.index}
                </span>
              </div>
              <div className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-[#171A1D] dark:text-[#EDEDED] font-semibold">
                {stat.label}
              </div>
              <p className="text-xs sm:text-sm text-[#555C66] dark:text-[#9EA3AC] leading-relaxed">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
