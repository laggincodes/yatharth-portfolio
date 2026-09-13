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
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#F1EEE7] dark:bg-[#0D1014] transform-gpu transition-colors duration-300">
      {/* Background HTML5 Autoplay Seamless Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setIsVideoLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded
            ? 'opacity-50 [filter:invert(1)_contrast(1.15)_brightness(1.05)_hue-rotate(180deg)] mix-blend-multiply dark:filter-none dark:mix-blend-normal dark:opacity-40 scale-105'
            : 'opacity-0 scale-100'
        }`}
        style={{ willChange: 'opacity' }}
      >
        <source src={videoSrc} type="video/mp4" />
        {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
      </video>

      {/* Atmospheric Editorial Matte Vignettes for Crisp Typography & Visible Wave */}
      {/* Horizontal: softly shields left typography while letting the right wave flow freely */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F1EEE7]/85 via-[#F1EEE7]/35 to-transparent dark:from-transparent dark:via-transparent dark:to-transparent pointer-events-none transition-colors duration-300" />

      {/* Vertical: subtle soft header/footer framing in light mode, atmospheric vignette in dark mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1EEE7]/50 via-transparent to-[#F1EEE7]/60 dark:from-[#0D1014]/85 dark:via-[#0D1014]/50 dark:to-[#0D1014]/95 transition-colors duration-300 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#F1EEE7]/30 dark:via-[#0D1014]/25 dark:to-[#0D1014]/95 pointer-events-none transition-colors duration-300" />

      {/* Tactile Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-15 mix-blend-multiply dark:mix-blend-overlay" />
    </div>
  );
});

InteractiveBackground.displayName = 'InteractiveBackground';
