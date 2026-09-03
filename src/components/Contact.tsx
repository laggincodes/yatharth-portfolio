import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import gsap from 'gsap';

export const Contact: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // GSAP infinite smooth marquee animation
  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 35,
        ease: 'none',
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="relative w-full bg-[#0A0A0E] pt-24 md:pt-32 pb-16 px-6 md:px-10 lg:px-16 overflow-hidden border-t border-[#1F1F1F]/80">
      {/* Background Dual Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-r from-[#4E85BF]/15 via-[#58C7D9]/10 to-[#8B7CFF]/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto space-y-16 relative z-10">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#878787]">
          <span className="text-[#58C7D9] font-semibold">04</span>
          <span>/</span>
          <span>CONTACT</span>
        </div>

        {/* Asymmetric Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Heading, Narrative & Primary CTA */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-[#F4F4F4] leading-[0.95] tracking-tight">
              Let's build{' '}
              <span className="font-display italic block md:inline font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F4F4F4] via-[#58C7D9] to-[#8B7CFF]">
                something.
              </span>
            </h2>

            <p className="text-base md:text-lg text-[#878787] font-normal leading-relaxed max-w-md">
              Have an idea, opportunity, internship, collaboration, or interesting problem?
            </p>

            {/* Primary Action CTA */}
            <div className="pt-2">
              <a
                href="mailto:yathusaini10@gmail.com"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F4F4F4] text-[#0A0A0A] font-medium text-base transition-all duration-300 hover:bg-white hover:shadow-cyan-500/20 hover:scale-[1.02] shadow-xl"
              >
                <span>Say hello</span>
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#58C7D9]" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Vertical Action Rows with Vector Icons */}
          <div className="lg:col-span-6 w-full space-y-0 divide-y divide-[#1F1F1F]">
            {/* Row 1: Email */}
            <a
              href="mailto:yathusaini10@gmail.com"
              className="group flex items-center justify-between py-6 transition-colors hover:border-[#58C7D9]/60"
            >
              <div className="flex items-start gap-4 transition-transform duration-300 group-hover:translate-x-1">
                <Mail size={20} className="text-[#878787] group-hover:text-[#58C7D9] transition-colors shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#878787] group-hover:text-[#58C7D9] uppercase tracking-widest block transition-colors">
                    Email
                  </span>
                  <span className="text-lg md:text-xl font-medium text-[#F4F4F4] group-hover:text-white transition-colors">
                    yathusaini10@gmail.com
                  </span>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full border border-[#1F1F1F] group-hover:border-[#58C7D9] flex items-center justify-center text-[#878787] group-hover:text-white transition-all duration-300">
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#58C7D9]" />
              </div>
            </a>

            {/* Row 2: GitHub */}
            <a
              href="https://github.com/laggincodes"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-6 transition-colors hover:border-[#4AAE9B]/60"
            >
              <div className="flex items-start gap-4 transition-transform duration-300 group-hover:translate-x-1">
                <GithubIcon size={20} className="text-[#878787] group-hover:text-[#4AAE9B] transition-colors shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#878787] group-hover:text-[#4AAE9B] uppercase tracking-widest block transition-colors">
                    GitHub
                  </span>
                  <span className="text-lg md:text-xl font-medium text-[#F4F4F4] group-hover:text-white transition-colors">
                    @laggincodes
                  </span>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full border border-[#1F1F1F] group-hover:border-[#4AAE9B] flex items-center justify-center text-[#878787] group-hover:text-white transition-all duration-300">
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#4AAE9B]" />
              </div>
            </a>

            {/* Row 3: LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yatharth-saini-6bb584389"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-6 border-b border-[#1F1F1F] transition-colors hover:border-[#8B7CFF]/60"
            >
              <div className="flex items-start gap-4 transition-transform duration-300 group-hover:translate-x-1">
                <LinkedinIcon size={20} className="text-[#878787] group-hover:text-[#8B7CFF] transition-colors shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#878787] group-hover:text-[#8B7CFF] uppercase tracking-widest block transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-lg md:text-xl font-medium text-[#F4F4F4] group-hover:text-white transition-colors">
                    Yatharth Saini
                  </span>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full border border-[#1F1F1F] group-hover:border-[#8B7CFF] flex items-center justify-center text-[#878787] group-hover:text-white transition-all duration-300">
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#8B7CFF]" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal GSAP Marquee Banner */}
      <div className="w-full overflow-hidden pt-24 pb-8 select-none opacity-60">
        <div ref={marqueeRef} className="flex whitespace-nowrap text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-[#878787]">
          <span className="mr-8">BUILDING THE FUTURE <span className="text-[#58C7D9]">•</span> AI PRODUCTS <span className="text-[#8B7CFF]">•</span> VOICE INTERFACES <span className="text-[#4AAE9B]">•</span> HEALTHCARE AI <span className="text-[#D6A85B]">•</span> PRIVACY SYSTEMS <span className="text-[#58C7D9]">•</span></span>
          <span className="mr-8">BUILDING THE FUTURE <span className="text-[#58C7D9]">•</span> AI PRODUCTS <span className="text-[#8B7CFF]">•</span> VOICE INTERFACES <span className="text-[#4AAE9B]">•</span> HEALTHCARE AI <span className="text-[#D6A85B]">•</span> PRIVACY SYSTEMS <span className="text-[#58C7D9]">•</span></span>
          <span className="mr-8">BUILDING THE FUTURE <span className="text-[#58C7D9]">•</span> AI PRODUCTS <span className="text-[#8B7CFF]">•</span> VOICE INTERFACES <span className="text-[#4AAE9B]">•</span> HEALTHCARE AI <span className="text-[#D6A85B]">•</span> PRIVACY SYSTEMS <span className="text-[#58C7D9]">•</span></span>
        </div>
      </div>
    </section>
  );
};
