import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '../data/projects';
import type { Project } from '../data/projects';
import { CaseStudyModal } from './CaseStudyModal';

export const ProjectGrid: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="relative w-full bg-[#EAE6DE] dark:bg-[#12171E] py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-y border-[#D8D2C5] dark:border-[#202833] overflow-hidden transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto space-y-10 sm:space-y-12 relative z-10">
        {/* Section Header */}
        <SectionHeader
          number="01"
          label="SELECTED WORK"
          titleNormal="Featured"
          titleItalic="projects."
          description="Curated engineering projects built across voice AI education platforms, real-time healthcare protocols, and full-stack privacy visualizers."
          actionText="View all work"
          actionHref="https://github.com/laggincodes"
          numberColor="text-[#397FCC] dark:text-[#5DA9FF]"
        />

        {/* 2-Column Responsive Editorial Project Gallery */}
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-6 lg:gap-8 items-start">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              isExpanded={expandedId === project.id}
              onToggleExpand={() => handleToggle(project.id)}
              onSelectCaseStudy={(p) => setSelectedCaseStudy(p)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
