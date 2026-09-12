import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

const STACK_CATEGORIES = [
  {
    category: 'LANGUAGES',
    titleColor: 'text-[#3272CB] dark:text-[#6FA8FF]',
    hoverColor: 'hover:text-[#3272CB] dark:hover:text-[#6FA8FF]',
    skills: ['C', 'C++', 'Python', 'TypeScript', 'SQL'],
  },
  {
    category: 'FRONTEND',
    titleColor: 'text-[#1D9AA2] dark:text-[#35C7D0]',
    hoverColor: 'hover:text-[#1D9AA2] dark:hover:text-[#35C7D0]',
    skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'AI / VOICE',
    titleColor: 'text-[#6C5CE7] dark:text-[#9A8CFF]',
    hoverColor: 'hover:text-[#6C5CE7] dark:hover:text-[#9A8CFF]',
    skills: ['Gemini', 'Agora Conversational AI', 'Deepgram', 'AI Agents'],
  },
  {
    category: 'BACKEND',
    titleColor: 'text-[#2E885E] dark:text-[#72C7A0]',
    hoverColor: 'hover:text-[#2E885E] dark:hover:text-[#72C7A0]',
    skills: ['Python', 'Flask', 'Node.js', 'REST APIs'],
  },
  {
    category: 'TOOLS',
    titleColor: 'text-[#C57D28] dark:text-[#E7A85B]',
    hoverColor: 'hover:text-[#C57D28] dark:hover:text-[#E7A85B]',
    skills: ['Git', 'GitHub', 'Linux', 'VS Code'],
  },
];

export const Stack: React.FC = () => {
  return (
    <section className="w-full bg-[#ECE8E1] dark:bg-[#17191C] py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-[#D8D2C5] dark:border-[#262E38] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <SectionHeader
          number="04"
          label="STACK"
          titleNormal="Technical"
          titleItalic="tooling & stack."
          description="Languages, client frameworks, voice protocols, and systems applied across active engineering builds."
          numberColor="text-[#3272CB] dark:text-[#6FA8FF]"
        />

        {/* Editorial Index Ledger */}
        <div className="border-t border-[#D8D2C5] dark:border-[#262E38] divide-y divide-[#D8D2C5] dark:divide-[#262E38]">
          {STACK_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline transition-colors hover:bg-[#E2DDD5]/70 dark:hover:bg-[#1E232B]/60 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-lg"
            >
              {/* Col 1: Category Label & Index (4 cols) */}
              <div className="md:col-span-4 flex items-center gap-3">
                <span className={`font-mono text-xs font-semibold ${cat.titleColor}`}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-[#D8D2C5] dark:text-[#262E38]">/</span>
                <h3 className={`text-xs font-mono uppercase tracking-[0.2em] font-semibold ${cat.titleColor}`}>
                  {cat.category}
                </h3>
              </div>

              {/* Col 2: Skills list formatted as editorial text (8 cols) */}
              <div className="md:col-span-8 flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2 text-sm sm:text-base md:text-xl text-[#171A1D] dark:text-[#EDEDED] leading-relaxed">
                {cat.skills.map((skill, sIdx) => (
                  <React.Fragment key={skill}>
                    {sIdx > 0 && <span className="text-[#D8D2C5] dark:text-[#262E38] select-none">·</span>}
                    <span className={`font-normal ${cat.hoverColor} transition-colors py-0.5`}>
                      {skill}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
