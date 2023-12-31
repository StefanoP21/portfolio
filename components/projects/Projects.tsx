'use client';

import { Fragment } from 'react';
import { projectsData } from '@/lib/data';
import { SectionHeading } from '../shared';
import { ProjectCard } from '../projects';
import { useSectionInView } from '@/hooks/useSectionInView';

export const Projects = () => {
  const { ref } = useSectionInView('#projects');

  return (
    <section ref={ref} id="projects" className="scroll-mt-32">
      <SectionHeading children="Mis Proyectos" />
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <ProjectCard {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};
