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
    <section id="contact" className="relative w-full bg-[#F3DCE5] dark:bg-[#211820] pt-20 sm:pt-24 md:pt-32 pb-16 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden border-t border-[#E3B9CA] dark:border-[#543746] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#725965] dark:text-[#C6AFBB]">
          <span className="text-[#9E526F] dark:text-[#E8A0BA] font-semibold">07</span>
          <span className="text-[#E3B9CA] dark:text-[#543746]">/</span>
          <span>CONTACT</span>
        </div>

        {/* Asymmetric Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Heading, Narrative & Primary CTA (6 cols) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-[#30212A] dark:text-[#F7EAF0] leading-[0.95] tracking-tight">
              Let's build{' '}
              <span className="font-display italic block sm:inline font-normal text-[#9E526F] dark:text-[#E8A0BA]">
                something.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#725965] dark:text-[#C6AFBB] font-normal leading-relaxed max-w-md">
              Have an idea, opportunity, internship, collaboration, or interesting problem?
            </p>

            {/* Primary Action CTA with min 44px touch target */}
            <div className="pt-2">
              <a
                href="mailto:yathusaini10@gmail.com"
                className="min-h-[44px] group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#30212A] dark:bg-[#F7EAF0] text-[#FBEAF0] dark:text-[#211820] font-medium text-xs sm:text-sm transition-all duration-300 hover:bg-[#9E526F] dark:hover:bg-[#E8A0BA] shadow-xs cursor-pointer"
              >
                <span>Say hello</span>
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#D98BA8] dark:text-[#BD718F]" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Vertical Action Rows with Vector Icons (6 cols) */}
          <div className="lg:col-span-6 w-full space-y-0 divide-y divide-[#E3B9CA] dark:divide-[#543746] border-y border-[#E3B9CA] dark:border-[#543746]">
            {/* Row 1: Email (Rose) */}
            <a
              href="mailto:yathusaini10@gmail.com"
              className="group flex items-center justify-between py-5 sm:py-6 transition-colors hover:bg-[#EFD0DC]/70 dark:hover:bg-[#30212C] px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-lg"
            >
              <div className="flex items-start gap-4 transition-transform duration-300 group-hover:translate-x-1 min-w-0 flex-1 pr-3">
                <Mail size={18} className="text-[#725965] dark:text-[#C6AFBB] group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA] transition-colors shrink-0 mt-0.5" />
                <div className="space-y-1 min-w-0 flex-1">
                  <span className="text-[10px] font-mono text-[#725965] dark:text-[#C6AFBB] group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA] uppercase tracking-widest block transition-colors">
                    EMAIL
                  </span>
                  <span className="text-base sm:text-lg md:text-xl font-normal text-[#30212A] dark:text-[#F7EAF0] group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA] transition-colors block truncate">
                    yathusaini10@gmail.com
                  </span>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full border border-[#E3B9CA] dark:border-[#543746] bg-[#F8E6ED] dark:bg-[#30212C] group-hover:border-[#D98BA8] dark:group-hover:border-[#E8A0BA] flex items-center justify-center text-[#725965] dark:text-[#C6AFBB] group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA] transition-all duration-300 shadow-xs shrink-0">
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#9E526F] dark:text-[#E8A0BA]" />
              </div>
            </a>

            {/* Row 2: GitHub (Blush) */}
            <a
              href="https://github.com/laggincodes"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 sm:py-6 transition-colors hover:bg-[#EFD0DC]/70 dark:hover:bg-[#30212C] px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-lg"
            >
              <div className="flex items-start gap-4 transition-transform duration-300 group-hover:translate-x-1 min-w-0 flex-1 pr-3">
                <GithubIcon size={18} className="text-[#725965] dark:text-[#C6AFBB] group-hover:text-[#C87998] dark:group-hover:text-[#D98AA9] transition-colors shrink-0 mt-0.5" />
                <div className="space-y-1 min-w-0 flex-1">
                  <span className="text-[10px] font-mono text-[#725965] dark:text-[#C6AFBB] group-hover:text-[#C87998] dark:group-hover:text-[#D98AA9] uppercase tracking-widest block transition-colors">
                    GITHUB
                  </span>
                  <span className="text-base sm:text-lg md:text-xl font-normal text-[#30212A] dark:text-[#F7EAF0] group-hover:text-[#C87998] dark:group-hover:text-[#D98AA9] transition-colors block truncate">
                    @laggincodes
                  </span>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full border border-[#E3B9CA] dark:border-[#543746] bg-[#F8E6ED] dark:bg-[#30212C] group-hover:border-[#D98BA8] dark:group-hover:border-[#D98AA9] flex items-center justify-center text-[#725965] dark:text-[#C6AFBB] group-hover:text-[#C87998] dark:group-hover:text-[#D98AA9] transition-all duration-300 shadow-xs shrink-0">
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C87998] dark:text-[#D98AA9]" />
              </div>
            </a>

            {/* Row 3: LinkedIn (Mauve) */}
            <a
              href="https://www.linkedin.com/in/yatharth-saini-6bb584389"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 sm:py-6 transition-colors hover:bg-[#EFD0DC]/70 dark:hover:bg-[#30212C] px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-lg"
            >
              <div className="flex items-start gap-4 transition-transform duration-300 group-hover:translate-x-1 min-w-0 flex-1 pr-3">
                <LinkedinIcon size={18} className="text-[#725965] dark:text-[#C6AFBB] group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA] transition-colors shrink-0 mt-0.5" />
                <div className="space-y-1 min-w-0 flex-1">
                  <span className="text-[10px] font-mono text-[#725965] dark:text-[#C6AFBB] group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA] uppercase tracking-widest block transition-colors">
                    LINKEDIN
                  </span>
                  <span className="text-base sm:text-lg md:text-xl font-normal text-[#30212A] dark:text-[#F7EAF0] group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA] transition-colors block truncate">
                    Yatharth Saini
                  </span>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full border border-[#E3B9CA] dark:border-[#543746] bg-[#F8E6ED] dark:bg-[#30212C] group-hover:border-[#D98BA8] dark:group-hover:border-[#E8A0BA] flex items-center justify-center text-[#725965] dark:text-[#C6AFBB] group-hover:text-[#9E526F] dark:group-hover:text-[#E8A0BA] transition-all duration-300 shadow-xs shrink-0">
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#9E526F] dark:text-[#E8A0BA]" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal GSAP Marquee Banner */}
      <div className="w-full overflow-hidden pt-20 sm:pt-24 pb-8 select-none opacity-70">
        <div ref={marqueeRef} className="flex whitespace-nowrap text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-[#725965] dark:text-[#C6AFBB]">
          <span className="mr-8">BUILDING THE FUTURE <span className="text-[#D98BA8]">•</span> AI SYSTEMS <span className="text-[#C87998]">•</span> FULL-STACK APPS <span className="text-[#9E526F] dark:text-[#E8A0BA]">•</span> VOICE BENCHMARKS <span className="text-[#D98BA8]">•</span> EVALUATION HARNESS <span className="text-[#C87998]">•</span></span>
          <span className="mr-8">BUILDING THE FUTURE <span className="text-[#D98BA8]">•</span> AI SYSTEMS <span className="text-[#C87998]">•</span> FULL-STACK APPS <span className="text-[#9E526F] dark:text-[#E8A0BA]">•</span> VOICE BENCHMARKS <span className="text-[#D98BA8]">•</span> EVALUATION HARNESS <span className="text-[#C87998]">•</span></span>
          <span className="mr-8">BUILDING THE FUTURE <span className="text-[#D98BA8]">•</span> AI SYSTEMS <span className="text-[#C87998]">•</span> FULL-STACK APPS <span className="text-[#9E526F] dark:text-[#E8A0BA]">•</span> VOICE BENCHMARKS <span className="text-[#D98BA8]">•</span> EVALUATION HARNESS <span className="text-[#C87998]">•</span></span>
        </div>
      </div>
    </section>
  );
};
