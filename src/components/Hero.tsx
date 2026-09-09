import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  isLoaded: boolean;
}

const ROLES = [
  'An AI builder',
  'A developer',
  'A product tinkerer',
  'A CSE student lives in Delhi',
];

export const Hero: React.FC<HeroProps> = ({ isLoaded }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle role text
  useEffect(() => {
    if (!isLoaded) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isLoaded]);

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-between pt-28 pb-8 px-6 md:px-10 lg:px-16 bg-transparent overflow-hidden text-center">
      {/* Cinematic Atmospheric Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[950px] h-[450px] bg-gradient-to-r from-[#2B7DB8]/10 via-[#0284C7]/8 to-[#6D5DE7]/10 dark:from-[#4E85BF]/15 dark:via-[#58C7D9]/10 dark:to-[#8B7CFF]/15 rounded-full blur-[150px] pointer-events-none transition-colors duration-500" />

      {/* Main Centered Hero Content Block */}
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center space-y-8 my-auto relative z-10">
        {/* Hero Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#141414]/90 border border-slate-200 dark:border-[#1F1F1F] text-xs font-mono text-[#5F6670] dark:text-[#878787] shadow-sm dark:shadow-lg backdrop-blur-md transition-colors duration-200">
          <Sparkles size={13} className="text-[#0284C7] dark:text-[#58C7D9] animate-pulse" />
          <span className="text-[#111318] dark:text-[#F4F4F4]">YATHARTH SAINI</span>
          <span className="text-[#6D5DE7] dark:text-[#8B7CFF]">•</span>
          <span className="text-[#0284C7] dark:text-[#58C7D9]">CSE STUDENT & AI BUILDER</span>
        </div>

        {/* Display Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9.5rem] font-light tracking-tight text-[#111318] dark:text-[#F4F4F4] leading-[0.9] select-none text-center transition-colors duration-200">
          Yatharth{' '}
          <span className="font-display italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#111318] via-[#0284C7] to-[#6D5DE7] dark:from-[#F4F4F4] dark:via-[#58C7D9] dark:to-[#8B7CFF]">
            Saini.
          </span>
        </h1>

        {/* Center Narrative Statement */}
        <p className="text-xl md:text-2xl lg:text-3xl text-[#111318] dark:text-[#F4F4F4] font-light leading-snug max-w-2xl mx-auto text-center transition-colors duration-200">
          "I build <span className="text-[#0284C7] dark:text-[#58C7D9] font-normal">AI-powered products</span>, <span className="text-[#6D5DE7] dark:text-[#8B7CFF] font-normal">voice interfaces</span> and modern web systems."
        </p>

        {/* Dynamic Role Text Cycler */}
        <div className="flex items-center justify-center gap-3 text-sm md:text-base font-mono text-[#5F6670] dark:text-[#878787]">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#58C7D9] animate-pulse" />
          <span className="transition-all duration-500 ease-in-out text-[#111318] dark:text-[#F4F4F4] font-medium">
            {ROLES[roleIndex]}
          </span>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#work"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111318] dark:bg-[#F4F4F4] text-white dark:text-[#0A0A0A] font-medium text-sm transition-all duration-300 hover:bg-black dark:hover:bg-white hover:scale-[1.02] shadow-lg hover:shadow-cyan-500/20"
          >
            <span>Explore Selected Work</span>
            <ArrowDown size={16} />
          </a>

          <a
            href="https://github.com/laggincodes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/90 dark:bg-[#141414]/90 hover:bg-slate-50 dark:hover:bg-[#1A1A1A] text-[#111318] dark:text-[#F4F4F4] border border-slate-200 dark:border-[#1F1F1F] hover:border-[#0284C7]/50 dark:hover:border-[#58C7D9]/50 text-sm font-medium transition-all duration-300 backdrop-blur-md shadow-sm"
          >
            <GithubIcon size={16} className="text-[#0284C7] dark:text-[#58C7D9]" />
            <span>GitHub</span>
            <ArrowUpRight size={14} className="text-[#5F6670] dark:text-[#878787]" />
          </a>

          <a
            href="https://www.linkedin.com/in/yatharth-saini-6bb584389"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/90 dark:bg-[#141414]/90 hover:bg-slate-50 dark:hover:bg-[#1A1A1A] text-[#111318] dark:text-[#F4F4F4] border border-slate-200 dark:border-[#1F1F1F] hover:border-[#6D5DE7]/50 dark:hover:border-[#8B7CFF]/50 text-sm font-medium transition-all duration-300 backdrop-blur-md shadow-sm"
          >
            <LinkedinIcon size={16} className="text-[#6D5DE7] dark:text-[#8B7CFF]" />
            <span>LinkedIn</span>
            <ArrowUpRight size={14} className="text-[#5F6670] dark:text-[#878787]" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator at Bottom Center */}
      <div className="pt-4 pb-2 flex justify-center relative z-10">
        <a
          href="#work"
          className="flex items-center gap-3 text-xs font-mono text-[#5F6670] dark:text-[#878787] hover:text-[#0284C7] dark:hover:text-[#58C7D9] transition-colors group"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-[#1F1F1F] bg-white/80 dark:bg-transparent flex items-center justify-center group-hover:border-[#0284C7] dark:group-hover:border-[#58C7D9] transition-colors shadow-xs">
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </div>
        </a>
      </div>
    </section>
  );
};
