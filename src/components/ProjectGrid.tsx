import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '../data/projects';
import type { Project } from '../data/projects';
import { CaseStudyModal } from './CaseStudyModal';

export const ProjectGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative w-full bg-[#0B0F17] py-20 md:py-28 px-6 md:px-10 lg:px-16 border-y border-[#1F1F1F]/80 overflow-hidden">
      {/* Subtle Top Cool Blue Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-[#58C7D9]/5 via-transparent to-transparent pointer-events-none" />

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

        {/* Bento Grid Layout (12 / 7 / 5 Spans) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
