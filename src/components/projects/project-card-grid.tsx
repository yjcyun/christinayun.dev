import React from "react";
import styled from "styled-components";

import { projects } from "@constants/projects";
import ProjectCard from "./project-card";

interface ProjectCardGridProps {
  all?: boolean;
}

const StyledProjectCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-top: 3rem;
`;

const ProjectCardGrid = ({ all }: ProjectCardGridProps) => {
  return (
    <StyledProjectCardGrid>
      {(all ? projects : projects.filter((project) => project.featured)).map(
        (project) => (
          <ProjectCard key={project.title} {...project} />
        )
      )}
    </StyledProjectCardGrid>
  );
};

export default ProjectCardGrid;
