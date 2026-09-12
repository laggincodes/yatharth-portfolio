import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full bg-[#EEF3EF] dark:bg-[#121915] py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-[#D0D9D2] dark:border-[#223028] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <SectionHeader
          number="03"
          label="ABOUT"
          titleNormal="A little"
          titleItalic="about me."
          description="Product-focused developer exploring the intersection of AI models, voice interfaces, healthcare AI, and privacy-focused systems."
          numberColor="text-[#2E885E] dark:text-[#72C7A0]"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Main Story & Large Editorial Anchor (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-[#555C66] dark:text-[#9EA3AC] text-base sm:text-lg leading-relaxed font-normal"
          >
            {/* Visual Anchor: Large Serif Phrase */}
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-medium text-[#171A1D] dark:text-[#EDEDED] leading-[1.25] tracking-tight pb-6 border-b border-[#D0D9D2] dark:border-[#223028]">
              "I learn by <span className="font-display italic font-normal text-[#2E885E] dark:text-[#72C7A0]">building, breaking things</span>, and turning raw experiments into usable software."
            </h3>

            <div className="space-y-4 sm:space-y-5">
              <p>
                I'm <span className="font-semibold text-[#171A1D] dark:text-[#EDEDED]">Yatharth Saini</span>, a Computer Science Engineering student based in Delhi. I specialize in building voice AI platforms, conversational agents, and high-performance web systems that prioritize clean user experience and low latency.
              </p>

              <p>
                My work spans building real-time voice AI co-teachers (<span className="text-[#171A1D] dark:text-[#EDEDED] font-semibold">EchoTutor</span>), real-time healthcare triage protocols (<span className="text-[#171A1D] dark:text-[#EDEDED] font-semibold">Agora Medicare AI</span>), and privacy leak risk analyzers (<span className="text-[#171A1D] dark:text-[#EDEDED] font-semibold">AI Privacy Risk Simulator</span>).
              </p>

              <p>
                I believe great digital products communicate through intuitive hierarchy, honest presentation of technical contributions, and restrained visual design rather than stock templates or superficial animations.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Editorial Metadata Ledger (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#D0D9D2] dark:border-[#223028] pt-8 lg:pt-0 lg:pl-10 space-y-5 sm:space-y-6"
          >
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#2E885E] dark:text-[#72C7A0] block font-semibold">
                METADATA & SPECIFICATION
              </span>
              <p className="text-xs font-mono text-[#555C66] dark:text-[#9EA3AC]">
                PROFILE DOSSIER · EDITION 2026
              </p>
            </div>

            <div className="divide-y divide-[#D0D9D2] dark:divide-[#223028] border-y border-[#D0D9D2] dark:border-[#223028] text-xs sm:text-sm font-mono text-[#555C66] dark:text-[#9EA3AC]">
              <div className="py-3 flex justify-between items-baseline">
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-semibold">LOCATION</span>
                <span className="text-[#171A1D] dark:text-[#EDEDED] font-semibold">DELHI, INDIA</span>
              </div>
              <div className="py-3 flex justify-between items-baseline">
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-semibold">DISCIPLINE</span>
                <span className="text-[#171A1D] dark:text-[#EDEDED] font-semibold">COMPUTER SCIENCE & ENG.</span>
              </div>
              <div className="py-3 flex justify-between items-baseline">
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-semibold">FOCUS</span>
                <span className="text-[#171A1D] dark:text-[#EDEDED] font-semibold">AI · VOICE · WEB SYSTEMS</span>
              </div>
              <div className="py-3 flex justify-between items-baseline">
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-semibold">PHILOSOPHY</span>
                <span className="text-[#171A1D] dark:text-[#EDEDED] font-semibold">FUNCTION-DRIVEN DESIGN</span>
              </div>
              <div className="py-3 flex justify-between items-baseline">
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-semibold">STATUS</span>
                <span className="inline-flex items-center gap-1.5 text-[#171A1D] dark:text-[#EDEDED] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E885E] dark:bg-[#72C7A0] animate-pulse" />
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs sm:text-sm font-mono text-[#555C66] dark:text-[#9EA3AC] block leading-relaxed">
                Available for software engineering internships, AI engineering roles, and high-impact product collaborations.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
