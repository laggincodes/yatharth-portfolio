import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ProjectRow } from './ProjectRow';
import { PROJECTS } from '../data/projects';
import type { Project } from '../data/projects';
import { CaseStudyModal } from './CaseStudyModal';

export const ProjectGrid: React.FC = () => {
  const [openProjectId, setOpenProjectId] = useState<string | null>('echotutor');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const handleToggle = (id: string) => {
    setOpenProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="relative w-full bg-[#F8FAFC] dark:bg-[#0B0F17] py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-y border-slate-200/80 dark:border-[#1F1F1F]/80 overflow-hidden transition-colors duration-200">
      {/* Subtle Top Cool Blue Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-[#0284C7]/5 dark:from-[#58C7D9]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <SectionHeader
          number="01"
          label="SELECTED WORK"
          titleNormal="Featured"
          titleItalic="projects"
          description="Curated engineering projects built across voice AI education platforms, real-time healthcare protocols, and full-stack privacy visualizers."
          actionText="View all work"
          actionHref="https://github.com/laggincodes"
        />

        {/* Premium Full-Width Editorial Accordion */}
        <div className="w-full border-t border-slate-200/80 dark:border-[#1F1F1F]">
          {PROJECTS.map((project, idx) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={idx}
              isOpen={openProjectId === project.id}
              onToggle={() => handleToggle(project.id)}
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
