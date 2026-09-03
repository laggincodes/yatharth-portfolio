import React, { useRef, useState, memo } from 'react';

export const InteractiveBackground: React.FC = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0A0A0A] transform-gpu">
      {/* Background HTML5 Autoplay Seamless Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setIsVideoLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-60 scale-105' : 'opacity-0 scale-100'
        }`}
        style={{ willChange: 'opacity' }}
      >
        <source src="/hero-background.mp4" type="video/mp4" />
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_031045_0e1165dd-ab48-46e3-ad3d-5fe77f217647.mp4"
          type="video/mp4"
        />
      </video>

      {/* Atmospheric Glass Overlay Gradient for Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/75 via-[#0A0A0A]/45 to-[#0A0A0A]/90" />

      {/* Radial Spotlight & Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 mix-blend-overlay" />
    </div>
  );
});

InteractiveBackground.displayName = 'InteractiveBackground';
