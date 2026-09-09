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
    <div className="relative w-full min-h-screen bg-[#F3F5F7] dark:bg-[#0A0A0A] text-[#111318] dark:text-[#F4F4F4] overflow-x-hidden selection:bg-[#2B7DB8] selection:text-white dark:selection:bg-[#4E85BF] dark:selection:text-white transition-colors duration-300">
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
