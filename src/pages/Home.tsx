import React from 'react';
import { InteractiveBackground } from '../components/InteractiveBackground';
import { Hero } from '../components/Hero';
import { ProjectGrid } from '../components/ProjectGrid';
import { BuildLog } from '../components/BuildLog';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { Stack } from '../components/Stack';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

interface HomeProps {
  isLoaded: boolean;
  onOpenCommandMenu: () => void;
}

export const Home: React.FC<HomeProps> = ({ isLoaded, onOpenCommandMenu }) => {
  return (
    <div className="relative w-full min-h-screen bg-[#F1EEE7] dark:bg-[#0D1014] text-[#171A1D] dark:text-[#F1EFE8] overflow-x-hidden selection:bg-[#35C7D0]/20 selection:text-[#171A1D] dark:selection:bg-[#35C7D0]/30 dark:selection:text-[#F1EFE8] transition-colors duration-300">
      {/* Full Screen Video Background */}
      <InteractiveBackground />

      {/* Main Content Layer */}
      <main className="relative z-10">
        <Hero isLoaded={isLoaded} onOpenCommandMenu={onOpenCommandMenu} />
        <ProjectGrid />
        <BuildLog />
        <Stats />
        <About />
        <Stack />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};
