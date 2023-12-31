import { Fragment } from 'react';
import { projectsData } from '@/lib/data';
import { SectionHeading } from '../shared';
import { ProjectCard } from '../projects';

export const Projects = () => {
  return (
    <section>
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
