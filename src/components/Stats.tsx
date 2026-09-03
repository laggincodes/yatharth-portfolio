import React from 'react';
import { motion } from 'framer-motion';

const STATS_DATA = [
  { value: '03', label: 'CORE FEATURED PROJECTS', detail: 'EchoTutor, Agora Medicare AI & Privacy Risk Simulator' },
  { value: '01', label: 'ROLE FOCUS', detail: 'Full-Stack & AI Voice Engineering' },
  { value: '100%', label: 'CODE TRANSPARENCY', detail: 'Public repositories & clear attributions' },
];

export const Stats: React.FC = () => {
  return (
    <section className="w-full bg-[#0A0A0A] py-16 px-6 md:px-10 lg:px-16 border-t border-[#1F1F1F]/60">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {STATS_DATA.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-[#141414] border border-[#1F1F1F] rounded-2xl p-6 space-y-2"
          >
            <span className="font-mono text-3xl md:text-4xl font-light text-[#F4F4F4]">
              {stat.value}
            </span>
            <div className="text-[11px] font-mono text-[#4E85BF] tracking-wider uppercase">
              {stat.label}
            </div>
            <p className="text-xs text-[#878787]">
              {stat.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
