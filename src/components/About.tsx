import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full bg-[#F3DCE5] dark:bg-[#211820] py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-[#E3B9CA] dark:border-[#543746] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <SectionHeader
          number="05"
          label="ABOUT"
          titleNormal="A little"
          titleItalic="about me."
          description="CSE student and developer building AI-powered products, full-stack applications, and modern software systems."
          numberColor="text-[#9E526F] dark:text-[#E8A0BA]"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Main Story & Large Editorial Anchor (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-[#725965] dark:text-[#C6AFBB] text-base sm:text-lg leading-relaxed font-normal"
          >
            {/* Visual Anchor: Large Serif Phrase with Muted Rose Accent */}
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-medium text-[#30212A] dark:text-[#F7EAF0] leading-[1.25] tracking-tight pb-6 border-b border-[#E3B9CA] dark:border-[#543746]">
              "I learn by <span className="font-display italic font-normal text-[#9E526F] dark:text-[#E8A0BA]">building, testing rigorously</span>, and turning raw experiments into usable software."
            </h3>

            <div className="space-y-4 sm:space-y-5">
              <p>
                I'm <span className="font-semibold text-[#30212A] dark:text-[#F7EAF0]">Yatharth Saini</span>, a Computer Science Engineering student and developer based in Delhi. I focus on building practical software, full-stack web applications, and AI systems with reproducible architectures, clean code, and responsive interfaces.
              </p>

              <p>
                My work spans building automated voice evaluation frameworks (<span className="text-[#30212A] dark:text-[#F7EAF0] font-semibold">VoiceBench</span>), real-time interactive classroom concepts (<span className="text-[#30212A] dark:text-[#F7EAF0] font-semibold">EchoTutor</span>), clinical triage prototypes (<span className="text-[#30212A] dark:text-[#F7EAF0] font-semibold">Agora Medicare AI</span>), and computer-vision privacy analyzers (<span className="text-[#30212A] dark:text-[#F7EAF0] font-semibold">AI Privacy Risk Simulator</span>).
              </p>

              <p>
                I believe great digital products communicate through intuitive hierarchy, honest presentation of technical contributions, and restrained visual design rather than stock templates or superficial claims.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Editorial Metadata Ledger (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#E3B9CA] dark:border-[#543746] pt-8 lg:pt-0 lg:pl-10 space-y-5 sm:space-y-6"
          >
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#9E526F] dark:text-[#E8A0BA] block font-semibold">
                METADATA & SPECIFICATION
              </span>
              <p className="text-xs font-mono text-[#725965] dark:text-[#C6AFBB]">
                PROFILE DOSSIER · EDITION 2026
              </p>
            </div>

            <div className="divide-y divide-[#E3B9CA] dark:divide-[#543746] border-y border-[#E3B9CA] dark:border-[#543746] text-xs sm:text-sm font-mono text-[#725965] dark:text-[#C6AFBB]">
              <div className="py-3 flex justify-between items-baseline">
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-semibold">LOCATION</span>
                <span className="text-[#30212A] dark:text-[#F7EAF0] font-semibold">DELHI, INDIA</span>
              </div>
              <div className="py-3 flex justify-between items-baseline">
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-semibold">DISCIPLINE</span>
                <span className="text-[#30212A] dark:text-[#F7EAF0] font-semibold">COMPUTER SCIENCE & ENG.</span>
              </div>
              <div className="py-3 flex justify-between items-baseline">
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-semibold">FOCUS</span>
                <span className="text-[#30212A] dark:text-[#F7EAF0] font-semibold">SOFTWARE · AI · WEB SYSTEMS</span>
              </div>
              <div className="py-3 flex justify-between items-baseline">
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-semibold">PHILOSOPHY</span>
                <span className="text-[#30212A] dark:text-[#F7EAF0] font-semibold">FUNCTION-DRIVEN DESIGN</span>
              </div>
              <div className="py-3 flex justify-between items-baseline">
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-semibold">STATUS</span>
                <span className="inline-flex items-center gap-1.5 text-[#30212A] dark:text-[#F7EAF0] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2B855D] animate-pulse" />
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs sm:text-sm font-mono text-[#725965] dark:text-[#C6AFBB] block leading-relaxed">
                Available for software engineering internships, developer roles, and high-impact product collaborations.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
