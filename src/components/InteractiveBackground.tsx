import React, { useRef, useState, memo } from 'react';
import { HERO_VIDEO_SRC, HERO_VIDEO_FALLBACK_SRC } from '../config/media';

export { HERO_VIDEO_SRC, HERO_VIDEO_FALLBACK_SRC } from '../config/media';

interface InteractiveBackgroundProps {
  /**
   * Optional custom video source URL/path.
   * Defaults to HERO_VIDEO_SRC ('/hero-background.mp4').
   */
  videoSrc?: string;
  /**
   * Optional fallback video source URL/path.
   */
  fallbackSrc?: string;
}

export const InteractiveBackground: React.FC<InteractiveBackgroundProps> = memo(({
  videoSrc = HERO_VIDEO_SRC,
  fallbackSrc = HERO_VIDEO_FALLBACK_SRC,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#F3DCE5] dark:bg-[#211820] transform-gpu transition-colors duration-300">
      {/* Background HTML5 Autoplay Seamless Video (Restored GitHub Version) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setIsVideoLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded
            ? 'opacity-85 contrast-[1.02] brightness-[1.01] dark:opacity-65 dark:contrast-[1.08] dark:brightness-[0.80] scale-105'
            : 'opacity-0 scale-100'
        }`}
        style={{ willChange: 'opacity' }}
      >
        <source src={videoSrc} type="video/mp4" />
        {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
      </video>

      {/* Atmospheric Warm Tint: Keeps footage vivid & recognized while establishing the rose/plum atmosphere */}
      {/* 1. Subtle overall atmosphere wash */}
      <div className="absolute inset-0 bg-[#F3DCE5]/15 dark:bg-[#211820]/35 pointer-events-none transition-colors duration-300" />

      {/* 2. Directional subtle gradient shielding text on the left without obscuring the cat or sun */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F3DCE5]/45 via-[#F3DCE5]/15 to-transparent dark:from-[#211820]/60 dark:via-[#211820]/25 dark:to-transparent pointer-events-none transition-colors duration-300" />

      {/* 3. Soft bottom boundary transition to Slide 2 dashboard */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent via-[#F3DCE5]/70 to-[#F3DCE5] dark:via-[#211820]/70 dark:to-[#211820] pointer-events-none transition-colors duration-300" />

      {/* 4. Soft radial pink luminescent ambient bloom behind hero text */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] rounded-full bg-[#D98BA8]/12 dark:bg-[#E8A0BA]/8 blur-[100px] pointer-events-none" />

      {/* 5. Tactile Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-6 dark:opacity-10 mix-blend-multiply dark:mix-blend-overlay pointer-events-none" />
    </div>
  );
});

InteractiveBackground.displayName = 'InteractiveBackground';
