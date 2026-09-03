import { useState, useEffect, useRef } from 'react';

export function useScroll(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isPastThreshold = window.scrollY > threshold;
          if (isPastThreshold !== scrolledRef.current) {
            scrolledRef.current = isPastThreshold;
            setScrolled(isPastThreshold);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { scrolled };
}
