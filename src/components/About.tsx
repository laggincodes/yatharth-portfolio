import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { MapPin, GraduationCap, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full bg-[#0C0C0D] py-20 md:py-28 px-6 md:px-10 lg:px-16 border-t border-[#1F1F1F]/80">
      <div className="max-w-[1200px] mx-auto space-y-16">
        {/* Section Header */}
        <SectionHeader
          number="03"
          label="ABOUT"
          titleNormal="A little"
          titleItalic="about me."
          description="Product-focused developer exploring the intersection of AI models, voice interfaces, healthcare AI, and privacy-focused systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Story Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#141414] border border-[#1F1F1F] hover:border-[#58C7D9]/30 rounded-3xl p-8 md:p-10 space-y-6 text-[#878787] text-base leading-relaxed transition-colors"
          >
            <p className="text-[#F4F4F4] text-lg md:text-xl font-light leading-snug">
              I'm <span className="font-medium text-white">Yatharth Saini</span>, a Computer Science Engineering student focused on building <span className="text-[#58C7D9] font-normal">AI-powered products</span>, voice interfaces, and modern web systems.
            </p>

            <p>
              I learn by <span className="text-[#58C7D9] font-medium">building, breaking things, debugging them</span>, and turning experiments into usable software. Whether it's building real-time voice AI co-teachers (<span className="text-[#F4F4F4] font-medium">EchoTutor</span>), voice healthcare triage platforms (<span className="text-[#F4F4F4] font-medium">Agora Medicare AI</span>), or full-stack privacy analysis platforms (<span className="text-[#F4F4F4] font-medium">AI Privacy Risk Simulator</span>), I focus on clean user experience, low latency, and solid engineering mechanics.
            </p>

            <p>
              I believe great developer portfolios should show real projects, accurate engineering contributions, and thoughtful interface execution rather than generic template fluff.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-[#F4F4F4]">
              <div className="flex items-center gap-2 bg-[#0A0A0A] px-3.5 py-2 rounded-full border border-[#1F1F1F]">
                <GraduationCap size={14} className="text-[#58C7D9]" />
                <span>CSE Student</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0A0A0A] px-3.5 py-2 rounded-full border border-[#1F1F1F]">
                <MapPin size={14} className="text-[#8B7CFF]" />
                <span>Delhi, India</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0A0A0A] px-3.5 py-2 rounded-full border border-[#1F1F1F]">
                <Terminal size={14} className="text-[#D6A85B]" />
                <span>AI & Voice Builder</span>
              </div>
            </div>
          </motion.div>

          {/* Side Editorial Highlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 bg-[#141414] border border-[#1F1F1F] hover:border-[#D6A85B]/30 rounded-3xl p-8 md:p-10 space-y-6 flex flex-col justify-between transition-colors"
          >
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#D6A85B]">
                PHILOSOPHY
              </span>
              <h3 className="font-display italic text-3xl md:text-4xl text-[#F4F4F4] leading-tight">
                "Function-driven design with <span className="text-[#D6A85B] font-normal">restrained aesthetics.</span>"
              </h3>
              <p className="text-xs text-[#878787] font-normal leading-relaxed">
                Prioritizing truthfulness, intuitive layout hierarchy, low latency performance, and micro-interactions that serve a clear utility.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1F1F1F] flex items-center justify-between text-xs font-mono text-[#878787]">
              <span>STATUS</span>
              <span className="flex items-center gap-1.5 text-[#F4F4F4]">
                <span className="w-2 h-2 rounded-full bg-[#D6A85B] animate-pulse" />
                Open to opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
