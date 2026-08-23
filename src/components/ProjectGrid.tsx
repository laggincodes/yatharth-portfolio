import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '../data/projects';
import type { Project } from '../data/projects';
import { CaseStudyModal } from './CaseStudyModal';

export const ProjectGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="w-full bg-[#0A0A0A] py-20 md:py-28 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Section Header */}
        <SectionHeader
          number="01"
          label="SELECTED WORK"
          titleNormal="Featured"
          titleItalic="projects"
          description="Two primary engineering projects built across voice AI healthcare protocols and full-stack privacy analysis systems."
          actionText="View all work"
          actionHref="https://github.com/laggincodes"
        />

        {/* Bento Grid Layout (7/5 Spans) */}
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
