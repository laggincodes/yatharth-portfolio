import React from 'react';
import { motion } from 'framer-motion';

const STACK_CATEGORIES = [
  {
    category: 'LANGUAGES',
    accentColor: 'text-[#2B7DB8] dark:text-[#4E85BF] border-[#2B7DB8]/30 dark:border-[#4E85BF]/30 hover:border-[#2B7DB8] dark:hover:border-[#4E85BF]',
    badgeBg: 'bg-[#2B7DB8]/15 dark:bg-[#4E85BF]/10 text-[#2B7DB8] dark:text-[#4E85BF]',
    skills: ['C', 'C++', 'Python', 'TypeScript', 'SQL'],
  },
  {
    category: 'FRONTEND',
    accentColor: 'text-[#0284C7] dark:text-[#58C7D9] border-[#0284C7]/30 dark:border-[#58C7D9]/30 hover:border-[#0284C7] dark:hover:border-[#58C7D9]',
    badgeBg: 'bg-[#0284C7]/15 dark:bg-[#58C7D9]/10 text-[#0284C7] dark:text-[#58C7D9]',
    skills: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'AI / VOICE',
    accentColor: 'text-[#6D5DE7] dark:text-[#8B7CFF] border-[#6D5DE7]/30 dark:border-[#8B7CFF]/30 hover:border-[#6D5DE7] dark:hover:border-[#8B7CFF]',
    badgeBg: 'bg-[#6D5DE7]/15 dark:bg-[#8B7CFF]/10 text-[#6D5DE7] dark:text-[#8B7CFF]',
    skills: ['Gemini', 'Agora', 'AI Agents', 'Voice AI'],
  },
  {
    category: 'BACKEND',
    accentColor: 'text-[#0D9488] dark:text-[#4AAE9B] border-[#0D9488]/30 dark:border-[#4AAE9B]/30 hover:border-[#0D9488] dark:hover:border-[#4AAE9B]',
    badgeBg: 'bg-[#0D9488]/15 dark:bg-[#4AAE9B]/10 text-[#0D9488] dark:text-[#4AAE9B]',
    skills: ['Python', 'Flask', 'REST APIs'],
  },
  {
    category: 'TOOLS',
    accentColor: 'text-[#B45309] dark:text-[#D6A85B] border-[#B45309]/30 dark:border-[#D6A85B]/30 hover:border-[#B45309] dark:hover:border-[#D6A85B]',
    badgeBg: 'bg-[#B45309]/15 dark:bg-[#D6A85B]/10 text-[#B45309] dark:text-[#D6A85B]',
    skills: ['Git', 'GitHub'],
  },
];

export const Stack: React.FC = () => {
  return (
    <section className="w-full bg-[#F3F5F7] dark:bg-[#0A0E14] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-slate-200/80 dark:border-[#1F1F1F]/80 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Title */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#5F6670] dark:text-[#878787]">
            TECHNICAL TOOLING
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-[#111318] dark:text-[#F4F4F4] tracking-tight transition-colors duration-200">
            Languages, frameworks <span className="font-display italic text-[#0284C7] dark:text-[#58C7D9]">& stack.</span>
          </h2>
        </div>

        {/* Stack Grid with Category Specific Color Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {STACK_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#1F1F1F] ${cat.accentColor} rounded-2xl p-5 space-y-4 transition-all duration-200 shadow-sm`}
            >
              <h3 className={`text-xs font-mono uppercase tracking-[0.2em] ${cat.accentColor.split(' ')[0]} border-b border-slate-200 dark:border-[#1F1F1F] pb-2.5 flex items-center justify-between`}>
                <span>{cat.category}</span>
                <span className={`w-1.5 h-1.5 rounded-full ${cat.badgeBg.split(' ')[0]}`} />
              </h3>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm font-mono px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#0A0A0A] border border-slate-200 dark:border-[#1F1F1F] text-[#111318] dark:text-[#F4F4F4] hover:text-[#0284C7] dark:hover:text-[#58C7D9] hover:border-[#0284C7]/40 dark:hover:border-[#58C7D9]/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
