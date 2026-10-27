import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

const STACK_CATEGORIES = [
  {
    category: 'LANGUAGES',
    titleColor: 'text-[#9E526F] dark:text-[#E8A0BA]',
    hoverColor: 'hover:text-[#9E526F] dark:hover:text-[#E8A0BA]',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'SQL'],
  },
  {
    category: 'FRONTEND',
    titleColor: 'text-[#C87998] dark:text-[#D98AA9]',
    hoverColor: 'hover:text-[#C87998] dark:hover:text-[#D98AA9]',
    skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'HTML5 / Canvas'],
  },
  {
    category: 'BACKEND',
    titleColor: 'text-[#9E526F] dark:text-[#E8A0BA]',
    hoverColor: 'hover:text-[#9E526F] dark:hover:text-[#E8A0BA]',
    skills: ['FastAPI', 'Flask', 'Node.js', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'DATABASES & STORAGE',
    titleColor: 'text-[#C87998] dark:text-[#D98AA9]',
    hoverColor: 'hover:text-[#C87998] dark:hover:text-[#D98AA9]',
    skills: ['SQLite', 'PostgreSQL', 'Supabase', 'Pinecone (Vector)'],
  },
  {
    category: 'AI & STREAMING APIS',
    titleColor: 'text-[#9E526F] dark:text-[#E8A0BA]',
    hoverColor: 'hover:text-[#9E526F] dark:hover:text-[#E8A0BA]',
    skills: ['Agora RTC / RTM', 'ElevenLabs SDK', 'Gemini API', 'Deepgram STT', 'MediaPipe', 'EasyOCR'],
  },
  {
    category: 'TOOLS & INFRASTRUCTURE',
    titleColor: 'text-[#C87998] dark:text-[#D98AA9]',
    hoverColor: 'hover:text-[#C87998] dark:hover:text-[#D98AA9]',
    skills: ['Git', 'GitHub', 'Docker', 'Pytest', 'Linux', 'Postman'],
  },
];

export const Stack: React.FC = () => {
  return (
    <section className="w-full bg-[#EFD0DC]/40 dark:bg-[#291D26]/60 py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-[#E3B9CA] dark:border-[#543746] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <SectionHeader
          number="06"
          label="STACK"
          titleNormal="Technical"
          titleItalic="tooling & stack."
          description="Languages, client frameworks, AI integrations, backend services, and tools applied across active software builds."
          numberColor="text-[#9E526F] dark:text-[#E8A0BA]"
        />

        {/* Editorial Index Ledger */}
        <div className="border-t border-[#E3B9CA] dark:border-[#543746] divide-y divide-[#E3B9CA] dark:divide-[#543746]">
          {STACK_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline transition-colors hover:bg-[#F8E6ED]/80 dark:hover:bg-[#30212C]/80 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-lg"
            >
              {/* Col 1: Category Label & Index (4 cols) */}
              <div className="md:col-span-4 flex items-center gap-3">
                <span className={`font-mono text-xs font-semibold ${cat.titleColor}`}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-[#E3B9CA] dark:text-[#543746]">/</span>
                <h3 className={`text-xs font-mono uppercase tracking-[0.2em] font-semibold ${cat.titleColor}`}>
                  {cat.category}
                </h3>
              </div>

              {/* Col 2: Skills list formatted as editorial text (8 cols) */}
              <div className="md:col-span-8 flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2 text-sm sm:text-base md:text-xl text-[#30212A] dark:text-[#F7EAF0] leading-relaxed">
                {cat.skills.map((skill, sIdx) => (
                  <React.Fragment key={skill}>
                    {sIdx > 0 && <span className="text-[#E3B9CA] dark:text-[#543746] select-none">·</span>}
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
