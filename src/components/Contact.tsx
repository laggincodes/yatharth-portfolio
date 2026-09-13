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
    <section id="contact" className="relative w-full bg-[#E5E8EC] dark:bg-[#11161D] pt-20 sm:pt-24 md:pt-32 pb-16 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden border-t border-[#D8D2C5] dark:border-[#262E38] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#555C66] dark:text-[#9EA3AC]">
          <span className="text-[#1D9AA2] dark:text-[#35C7D0] font-semibold">05</span>
          <span className="text-[#D8D2C5] dark:text-[#262E38]">/</span>
          <span>CONTACT</span>
        </div>

        {/* Asymmetric Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Heading, Narrative & Primary CTA (6 cols) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-[#171A1D] dark:text-[#EDEDED] leading-[0.95] tracking-tight">
              Let's build{' '}
              <span className="font-display italic block sm:inline font-normal text-[#171A1D] dark:text-[#EDEDED]">
                something.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#555C66] dark:text-[#9EA3AC] font-normal leading-relaxed max-w-md">
              Have an idea, opportunity, internship, collaboration, or interesting problem?
            </p>

            {/* Primary Action CTA with min 44px touch target */}
            <div className="pt-2">
              <a
                href="mailto:yathusaini10@gmail.com"
                className="min-h-[44px] group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#171A1D] dark:bg-[#EDEDED] text-[#F1EEE7] dark:text-[#0D1014] font-medium text-xs sm:text-sm transition-all duration-300 hover:bg-[#252C36] dark:hover:bg-white shadow-xs cursor-pointer"
              >
                <span>Say hello</span>
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C57D28] dark:text-[#E7A85B]" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Vertical Action Rows with Vector Icons (6 cols) */}
          <div className="lg:col-span-6 w-full space-y-0 divide-y divide-[#D8D2C5] dark:divide-[#262E38] border-y border-[#D8D2C5] dark:border-[#262E38]">
            {/* Row 1: Email (Cyan) */}
            <a
              href="mailto:yathusaini10@gmail.com"
              className="group flex items-center justify-between py-5 sm:py-6 transition-colors hover:bg-[#DDD9D0]/60 dark:hover:bg-[#181F28]/60 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-lg"
            >
              <div className="flex items-start gap-4 transition-transform duration-300 group-hover:translate-x-1 min-w-0 flex-1 pr-3">
                <Mail size={18} className="text-[#555C66] dark:text-[#9EA3AC] group-hover:text-[#1D9AA2] dark:group-hover:text-[#35C7D0] transition-colors shrink-0 mt-0.5" />
                <div className="space-y-1 min-w-0 flex-1">
                  <span className="text-[10px] font-mono text-[#555C66] dark:text-[#9EA3AC] group-hover:text-[#1D9AA2] dark:group-hover:text-[#35C7D0] uppercase tracking-widest block transition-colors">
                    EMAIL
                  </span>
                  <span className="text-base sm:text-lg md:text-xl font-normal text-[#171A1D] dark:text-[#EDEDED] group-hover:text-[#1D9AA2] dark:group-hover:text-[#35C7D0] transition-colors block truncate">
                    yathusaini10@gmail.com
                  </span>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full border border-[#D8D2C5] dark:border-[#262E38] bg-[#F1EEE7] dark:bg-[#161B23] group-hover:border-[#1D9AA2] dark:group-hover:border-[#35C7D0] flex items-center justify-center text-[#555C66] dark:text-[#9EA3AC] group-hover:text-[#1D9AA2] dark:group-hover:text-[#35C7D0] transition-all duration-300 shadow-xs shrink-0">
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#1D9AA2] dark:text-[#35C7D0]" />
              </div>
            </a>

            {/* Row 2: GitHub (Amber) */}
            <a
              href="https://github.com/laggincodes"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 sm:py-6 transition-colors hover:bg-[#DDD9D0]/60 dark:hover:bg-[#181F28]/60 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-lg"
            >
              <div className="flex items-start gap-4 transition-transform duration-300 group-hover:translate-x-1 min-w-0 flex-1 pr-3">
                <GithubIcon size={18} className="text-[#555C66] dark:text-[#9EA3AC] group-hover:text-[#C57D28] dark:group-hover:text-[#E7A85B] transition-colors shrink-0 mt-0.5" />
                <div className="space-y-1 min-w-0 flex-1">
                  <span className="text-[10px] font-mono text-[#555C66] dark:text-[#9EA3AC] group-hover:text-[#C57D28] dark:group-hover:text-[#E7A85B] uppercase tracking-widest block transition-colors">
                    GITHUB
                  </span>
                  <span className="text-base sm:text-lg md:text-xl font-normal text-[#171A1D] dark:text-[#EDEDED] group-hover:text-[#C57D28] dark:group-hover:text-[#E7A85B] transition-colors block truncate">
                    @laggincodes
                  </span>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full border border-[#D8D2C5] dark:border-[#262E38] bg-[#F1EEE7] dark:bg-[#161B23] group-hover:border-[#C57D28] dark:group-hover:border-[#E7A85B] flex items-center justify-center text-[#555C66] dark:text-[#9EA3AC] group-hover:text-[#C57D28] dark:group-hover:text-[#E7A85B] transition-all duration-300 shadow-xs shrink-0">
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C57D28] dark:text-[#E7A85B]" />
              </div>
            </a>

            {/* Row 3: LinkedIn (Violet) */}
            <a
              href="https://www.linkedin.com/in/yatharth-saini-6bb584389"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 sm:py-6 transition-colors hover:bg-[#DDD9D0]/60 dark:hover:bg-[#181F28]/60 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-lg"
            >
              <div className="flex items-start gap-4 transition-transform duration-300 group-hover:translate-x-1 min-w-0 flex-1 pr-3">
                <LinkedinIcon size={18} className="text-[#555C66] dark:text-[#9EA3AC] group-hover:text-[#6C5CE7] dark:group-hover:text-[#9A8CFF] transition-colors shrink-0 mt-0.5" />
                <div className="space-y-1 min-w-0 flex-1">
                  <span className="text-[10px] font-mono text-[#555C66] dark:text-[#9EA3AC] group-hover:text-[#6C5CE7] dark:group-hover:text-[#9A8CFF] uppercase tracking-widest block transition-colors">
                    LINKEDIN
                  </span>
                  <span className="text-base sm:text-lg md:text-xl font-normal text-[#171A1D] dark:text-[#EDEDED] group-hover:text-[#6C5CE7] dark:group-hover:text-[#9A8CFF] transition-colors block truncate">
                    Yatharth Saini
                  </span>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full border border-[#D8D2C5] dark:border-[#262E38] bg-[#F1EEE7] dark:bg-[#161B23] group-hover:border-[#6C5CE7] dark:group-hover:border-[#9A8CFF] flex items-center justify-center text-[#555C66] dark:text-[#9EA3AC] group-hover:text-[#6C5CE7] dark:group-hover:text-[#9A8CFF] transition-all duration-300 shadow-xs shrink-0">
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#6C5CE7] dark:text-[#9A8CFF]" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal GSAP Marquee Banner */}
      <div className="w-full overflow-hidden pt-20 sm:pt-24 pb-8 select-none opacity-60">
        <div ref={marqueeRef} className="flex whitespace-nowrap text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-[#555C66] dark:text-[#9EA3AC]">
          <span className="mr-8">BUILDING THE FUTURE <span className="text-[#3272CB] dark:text-[#6FA8FF]">•</span> AI PRODUCTS <span className="text-[#6C5CE7] dark:text-[#9A8CFF]">•</span> FULL-STACK APPS <span className="text-[#1D9AA2] dark:text-[#35C7D0]">•</span> SOFTWARE SYSTEMS <span className="text-[#C57D28] dark:text-[#E7A85B]">•</span> HEALTHCARE AI <span className="text-[#2E885E] dark:text-[#72C7A0]">•</span></span>
          <span className="mr-8">BUILDING THE FUTURE <span className="text-[#3272CB] dark:text-[#6FA8FF]">•</span> AI PRODUCTS <span className="text-[#6C5CE7] dark:text-[#9A8CFF]">•</span> FULL-STACK APPS <span className="text-[#1D9AA2] dark:text-[#35C7D0]">•</span> SOFTWARE SYSTEMS <span className="text-[#C57D28] dark:text-[#E7A85B]">•</span> HEALTHCARE AI <span className="text-[#2E885E] dark:text-[#72C7A0]">•</span></span>
          <span className="mr-8">BUILDING THE FUTURE <span className="text-[#3272CB] dark:text-[#6FA8FF]">•</span> AI PRODUCTS <span className="text-[#6C5CE7] dark:text-[#9A8CFF]">•</span> FULL-STACK APPS <span className="text-[#1D9AA2] dark:text-[#35C7D0]">•</span> SOFTWARE SYSTEMS <span className="text-[#C57D28] dark:text-[#E7A85B]">•</span> HEALTHCARE AI <span className="text-[#2E885E] dark:text-[#72C7A0]">•</span></span>
        </div>
      </div>
    </section>
  );
};
