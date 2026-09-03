import React from 'react';
import { motion } from 'framer-motion';

const STACK_CATEGORIES = [
  {
    category: 'LANGUAGES',
    skills: ['C', 'C++', 'Python', 'TypeScript', 'SQL'],
  },
  {
    category: 'FRONTEND',
    skills: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'AI / VOICE',
    skills: ['Gemini', 'Agora', 'AI Agents', 'Voice AI'],
  },
  {
    category: 'BACKEND',
    skills: ['Python', 'Flask', 'REST APIs'],
  },
  {
    category: 'TOOLS',
    skills: ['Git', 'GitHub'],
  },
];

export const Stack: React.FC = () => {
  return (
    <section className="w-full bg-[#0A0A0A] py-16 md:py-24 px-6 md:px-10 lg:px-16 border-t border-[#1F1F1F]/60">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Title */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#878787]">
            TECHNICAL TOOLING
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-[#F4F4F4] tracking-tight">
            Languages, frameworks <span className="font-display italic text-[#F4F4F4]">& stack.</span>
          </h2>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {STACK_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="bg-[#141414] border border-[#1F1F1F] rounded-2xl p-5 space-y-4 hover:border-[#333] transition-colors"
            >
              <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#4E85BF] border-b border-[#1F1F1F] pb-2.5">
                {cat.category}
              </h3>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#0A0A0A] border border-[#1F1F1F] text-[#F4F4F4] hover:border-[#4E85BF]/60 transition-colors"
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
