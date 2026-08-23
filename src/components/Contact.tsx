import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
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
    <section id="contact" className="relative w-full bg-[#0A0A0A] pt-24 pb-16 px-6 md:px-10 lg:px-16 overflow-hidden">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#4E85BF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto space-y-16 relative z-10">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#878787]">
          <span className="text-[#4E85BF] font-semibold">04</span>
          <span>/</span>
          <span>CONTACT</span>
        </div>

        {/* Large Editorial Headline */}
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F4F4F4] leading-[0.95] tracking-tight">
            Let's build{' '}
            <span className="font-display italic text-[#F4F4F4] block md:inline font-normal">
              something.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[#878787] font-light max-w-2xl leading-relaxed">
            Have an idea, opportunity, hackathon collaboration, or interesting engineering problem?
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="mailto:yathusaini10@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#F4F4F4] text-[#0A0A0A] font-medium text-base transition-all duration-300 hover:bg-white hover:scale-[1.02] shadow-xl shadow-white/5"
            >
              <span>Say hello</span>
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="https://github.com/laggincodes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 rounded-full bg-[#141414] hover:bg-[#1F1F1F] text-[#F4F4F4] border border-[#1F1F1F] text-sm font-medium transition-all duration-300"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/yatharth-saini-6bb584389"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 rounded-full bg-[#141414] hover:bg-[#1F1F1F] text-[#F4F4F4] border border-[#1F1F1F] text-sm font-medium transition-all duration-300"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
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
