import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { BUILDS } from '../data/builds';
import { ArrowUpRight } from 'lucide-react';

export const BuildLog: React.FC = () => {
  return (
    <section className="w-full bg-[#0A0A0A] py-20 md:py-28 px-6 md:px-10 lg:px-16 border-t border-[#1F1F1F]/60">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Section Header */}
        <SectionHeader
          number="02"
          label="BUILD LOG"
          titleNormal="Recent"
          titleItalic="engineering builds"
          description="A chronological record of project milestones, prototype releases, and technical implementations."
        />

        {/* Editorial Pill List */}
        <div className="space-y-4">
          {BUILDS.map((build, idx) => (
            <motion.a
              key={build.id}
              href={build.href || '#'}
              target={build.href?.startsWith('http') ? '_blank' : '_self'}
              rel={build.href?.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group block bg-[#141414] hover:bg-[#1A1A1A] border border-[#1F1F1F] hover:border-[#4E85BF]/40 rounded-2xl p-6 md:p-8 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-[#878787] bg-[#0A0A0A] px-2.5 py-1 rounded-md border border-[#1F1F1F]">
                      {build.date}
                    </span>
                    <span className="text-xs font-mono text-[#4E85BF]">
                      {build.category}
                    </span>
                    <span className="text-xs font-mono text-[#89AACC]">
                      • {build.role}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-medium text-[#F4F4F4] group-hover:text-white transition-colors flex items-center gap-2">
                    <span>{build.title}</span>
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#4E85BF]" />
                  </h3>

                  <p className="text-xs md:text-sm text-[#878787] leading-relaxed">
                    {build.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 md:pt-0">
                  {build.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#0A0A0A] border border-[#1F1F1F] text-[#878787]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
