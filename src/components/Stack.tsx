import React from 'react';
import { motion } from 'framer-motion';

const STACK_CATEGORIES = [
  {
    category: 'LANGUAGES',
    accentColor: 'text-[#4E85BF] border-[#4E85BF]/30 hover:border-[#4E85BF]',
    badgeBg: 'bg-[#4E85BF]/10 text-[#4E85BF]',
    skills: ['C', 'C++', 'Python', 'TypeScript', 'SQL'],
  },
  {
    category: 'FRONTEND',
    accentColor: 'text-[#58C7D9] border-[#58C7D9]/30 hover:border-[#58C7D9]',
    badgeBg: 'bg-[#58C7D9]/10 text-[#58C7D9]',
    skills: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'AI / VOICE',
    accentColor: 'text-[#8B7CFF] border-[#8B7CFF]/30 hover:border-[#8B7CFF]',
    badgeBg: 'bg-[#8B7CFF]/10 text-[#8B7CFF]',
    skills: ['Gemini', 'Agora', 'AI Agents', 'Voice AI'],
  },
  {
    category: 'BACKEND',
    accentColor: 'text-[#4AAE9B] border-[#4AAE9B]/30 hover:border-[#4AAE9B]',
    badgeBg: 'bg-[#4AAE9B]/10 text-[#4AAE9B]',
    skills: ['Python', 'Flask', 'REST APIs'],
  },
  {
    category: 'TOOLS',
    accentColor: 'text-[#D6A85B] border-[#D6A85B]/30 hover:border-[#D6A85B]',
    badgeBg: 'bg-[#D6A85B]/10 text-[#D6A85B]',
    skills: ['Git', 'GitHub'],
  },
];

export const Stack: React.FC = () => {
  return (
    <section className="w-full bg-[#0A0E14] py-16 md:py-24 px-6 md:px-10 lg:px-16 border-t border-[#1F1F1F]/80">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Title */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#878787]">
            TECHNICAL TOOLING
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-[#F4F4F4] tracking-tight">
            Languages, frameworks <span className="font-display italic text-[#58C7D9]">& stack.</span>
          </h2>
        </div>

        {/* Stack Grid with Category Specific Color Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {STACK_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`bg-[#141414] border border-[#1F1F1F] ${cat.accentColor} rounded-2xl p-5 space-y-4 transition-all duration-300`}
            >
              <h3 className={`text-[11px] font-mono uppercase tracking-[0.2em] ${cat.accentColor.split(' ')[0]} border-b border-[#1F1F1F] pb-2.5 flex items-center justify-between`}>
                <span>{cat.category}</span>
                <span className={`w-1.5 h-1.5 rounded-full ${cat.badgeBg.split(' ')[0]}`} />
              </h3>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#0A0A0A] border border-[#1F1F1F] text-[#F4F4F4] hover:text-[#58C7D9] hover:border-[#58C7D9]/40 transition-colors"
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
