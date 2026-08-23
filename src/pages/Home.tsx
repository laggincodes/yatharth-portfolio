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
}

export const Home: React.FC<HomeProps> = ({ isLoaded }) => {
  return (
    <div className="relative w-full min-h-screen bg-[#0A0A0A] text-[#F4F4F4] overflow-x-hidden selection:bg-[#4E85BF] selection:text-white">
      {/* Full Screen Video Background */}
      <InteractiveBackground />

      {/* Main Content Layer */}
      <main className="relative z-10">
        <Hero isLoaded={isLoaded} />
        <ProjectGrid />
        <BuildLog />
        <Stats />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
