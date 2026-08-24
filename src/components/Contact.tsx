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
    <section id="contact" className="relative w-full bg-[#0A0A0A] pt-24 md:pt-32 pb-16 px-6 md:px-10 lg:px-16 overflow-hidden border-t border-[#1F1F1F]/60">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-[#4E85BF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto space-y-16 relative z-10">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#878787]">
          <span className="text-[#4E85BF] font-semibold">04</span>
          <span>/</span>
          <span>CONTACT</span>
        </div>

        {/* Asymmetric Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Heading, Narrative & Primary CTA */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-[#F4F4F4] leading-[0.95] tracking-tight">
              Let's build{' '}
              <span className="font-display italic text-[#F4F4F4] block md:inline font-normal">
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
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F4F4F4] text-[#0A0A0A] font-medium text-base transition-all duration-300 hover:bg-white hover:scale-[1.02] shadow-xl shadow-white/5"
              >
                <span>Say hello</span>
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Vertical Action Rows with Vector Icons */}
          <div className="lg:col-span-6 w-full space-y-0 divide-y divide-[#1F1F1F]">
            {/* Row 1: Email */}
            <a
              href="mailto:yathusaini10@gmail.com"
              className="group flex items-center justify-between py-6 transition-colors hover:border-[#4E85BF]/60"
            >
              <div className="flex items-start gap-4 transition-transform duration-300 group-hover:translate-x-1">
                <Mail size={20} className="text-[#878787] group-hover:text-[#4E85BF] transition-colors shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#878787] uppercase tracking-widest block">
                    Email
                  </span>
                  <span className="text-lg md:text-xl font-medium text-[#F4F4F4] group-hover:text-white transition-colors">
                    yathusaini10@gmail.com
                  </span>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full border border-[#1F1F1F] group-hover:border-[#4E85BF] flex items-center justify-center text-[#878787] group-hover:text-white transition-all duration-300">
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#4E85BF]" />
              </div>
            </a>

            {/* Row 2: GitHub */}
            <a
              href="https://github.com/laggincodes"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-6 transition-colors hover:border-[#4E85BF]/60"
            >
              <div className="flex items-start gap-4 transition-transform duration-300 group-hover:translate-x-1">
                <GithubIcon size={20} className="text-[#878787] group-hover:text-[#4E85BF] transition-colors shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#878787] uppercase tracking-widest block">
                    GitHub
                  </span>
                  <span className="text-lg md:text-xl font-medium text-[#F4F4F4] group-hover:text-white transition-colors">
                    @laggincodes
                  </span>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full border border-[#1F1F1F] group-hover:border-[#4E85BF] flex items-center justify-center text-[#878787] group-hover:text-white transition-all duration-300">
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#4E85BF]" />
              </div>
            </a>

            {/* Row 3: LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yatharth-saini-6bb584389"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-6 border-b border-[#1F1F1F] transition-colors hover:border-[#4E85BF]/60"
            >
              <div className="flex items-start gap-4 transition-transform duration-300 group-hover:translate-x-1">
                <LinkedinIcon size={20} className="text-[#878787] group-hover:text-[#4E85BF] transition-colors shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#878787] uppercase tracking-widest block">
                    LinkedIn
                  </span>
                  <span className="text-lg md:text-xl font-medium text-[#F4F4F4] group-hover:text-white transition-colors">
                    Yatharth Saini
                  </span>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full border border-[#1F1F1F] group-hover:border-[#4E85BF] flex items-center justify-center text-[#878787] group-hover:text-white transition-all duration-300">
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#4E85BF]" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal GSAP Marquee Banner */}
      <div className="w-full overflow-hidden pt-24 pb-8 select-none opacity-40">
        <div ref={marqueeRef} className="flex whitespace-nowrap text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-[#878787]">
          <span className="mr-8">BUILDING THE FUTURE • AI PRODUCTS • VOICE INTERFACES • HEALTHCARE AI • PRIVACY SYSTEMS •</span>
          <span className="mr-8">BUILDING THE FUTURE • AI PRODUCTS • VOICE INTERFACES • HEALTHCARE AI • PRIVACY SYSTEMS •</span>
          <span className="mr-8">BUILDING THE FUTURE • AI PRODUCTS • VOICE INTERFACES • HEALTHCARE AI • PRIVACY SYSTEMS •</span>
          <span className="mr-8">BUILDING THE FUTURE • AI PRODUCTS • VOICE INTERFACES • HEALTHCARE AI • PRIVACY SYSTEMS •</span>
        </div>
      </div>
    </section>
  );
};
