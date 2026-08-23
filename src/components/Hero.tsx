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
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 px-6 md:px-10 lg:px-16 bg-transparent overflow-hidden">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] bg-[#4E85BF]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Eyebrow Badge */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#1F1F1F] text-xs font-mono text-[#878787] shadow-sm">
          <Sparkles size={13} className="text-[#4E85BF] animate-pulse" />
          <span className="text-[#F4F4F4]">YATHARTH SAINI</span>
          <span className="text-[#1F1F1F]">•</span>
          <span>CSE STUDENT & AI BUILDER</span>
        </div>

        {/* Display Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9.5rem] font-light tracking-tight text-[#F4F4F4] leading-[0.9] select-none">
          Yatharth{' '}
          <span className="font-display italic text-[#F4F4F4] font-normal">
            Saini.
          </span>
        </h1>
      </div>

      {/* Center Narrative Statement & Dynamic Cycler */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end py-12">
        <div className="lg:col-span-8 space-y-6">
          {/* Statement */}
          <p className="text-xl md:text-2xl lg:text-3xl text-[#F4F4F4] font-light leading-snug max-w-3xl">
            "I build AI-powered products, voice interfaces and modern web systems."
          </p>

          {/* Dynamic Role Text Cycler */}
          <div className="flex items-center gap-3 text-sm md:text-base font-mono text-[#878787]">
            <span className="w-2 h-2 rounded-full bg-[#4E85BF]" />
            <span className="transition-all duration-500 ease-in-out text-[#F4F4F4] font-medium">
              {ROLES[roleIndex]}
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F4F4F4] text-[#0A0A0A] font-medium text-sm transition-all duration-300 hover:bg-white hover:scale-[1.02] shadow-lg"
            >
              <span>Explore Selected Work</span>
              <ArrowDown size={16} />
            </a>

            <a
              href="https://github.com/laggincodes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#141414] hover:bg-[#1F1F1F] text-[#F4F4F4] border border-[#1F1F1F] text-sm font-medium transition-all duration-300"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
              <ArrowUpRight size={14} className="text-[#878787]" />
            </a>

            <a
              href="https://www.linkedin.com/in/yatharth-saini-6bb584389"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#141414] hover:bg-[#1F1F1F] text-[#F4F4F4] border border-[#1F1F1F] text-sm font-medium transition-all duration-300"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} className="text-[#878787]" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="lg:col-span-4 flex justify-start lg:justify-end">
          <a
            href="#work"
            className="flex items-center gap-3 text-xs font-mono text-[#878787] hover:text-[#F4F4F4] transition-colors group"
          >
            <span>SCROLL TO EXPLORE</span>
            <div className="w-8 h-8 rounded-full border border-[#1F1F1F] flex items-center justify-center group-hover:border-[#4E85BF] transition-colors">
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
