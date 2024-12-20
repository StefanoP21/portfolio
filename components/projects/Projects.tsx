"use client";

import { Fragment } from "react";
import { projectsData } from "@/lib/data";
import { SectionHeading } from "../shared";
import { ProjectCard } from "../projects";
import { useSectionInView } from "@/hooks/useSectionInView";

export const Projects = () => {
  const { ref } = useSectionInView("#projects", 0.3);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-24 sm:mb-32">
      <SectionHeading heading="Mis Proyectos" />
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
