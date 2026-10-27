import React from 'react';
import { InteractiveBackground } from '../components/InteractiveBackground';
import { Hero } from '../components/Hero';
import { ProjectGrid } from '../components/ProjectGrid';
import { BuildLog } from '../components/BuildLog';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { Stack } from '../components/Stack';
import { Contact } from '../components/Contact';
import { DeveloperDashboard } from '../components/DeveloperDashboard';
import { Footer } from '../components/Footer';
import { CatEasterEggs } from '../components/CatEasterEggs';
import { GingerCursorCat } from '../components/GingerCursorCat';
import { SocialLauncher } from '../components/SocialLauncher';

interface HomeProps {
  isLoaded: boolean;
  onOpenCommandMenu: () => void;
}

export const Home: React.FC<HomeProps> = ({ isLoaded, onOpenCommandMenu }) => {
  return (
    <div className="relative w-full min-h-screen bg-[#F3DCE5] dark:bg-[#211820] text-[#30212A] dark:text-[#F7EAF0] overflow-x-hidden selection:bg-[#D98BA8]/35 selection:text-[#30212A] dark:selection:bg-[#E8A0BA]/30 dark:selection:text-[#F7EAF0] transition-colors duration-300">
      {/* Full Screen Video Background */}
      <InteractiveBackground />

      {/* Main Content Layer */}
      <main className="relative z-10">
        {/* Slide 1: Editorial Cover / Hero */}
        <Hero isLoaded={isLoaded} onOpenCommandMenu={onOpenCommandMenu} />

        {/* Slide 2: Developer Activity Dashboard (GitHub & LeetCode) */}
        <DeveloperDashboard />

        {/* Selected Work & Engineering Systems */}
        <ProjectGrid />
        <BuildLog />
        <Stats />
        <About />
        <Stack />
        <Contact />
        <Footer />
      </main>

      {/* Upper-Left Ginger Cursor Cat Companion */}
      <GingerCursorCat />

      {/* Bottom-Right Social Launcher */}
      <SocialLauncher />

      {/* Discoverable Feline Easter Eggs */}
      <CatEasterEggs />
    </div>
  );
};
