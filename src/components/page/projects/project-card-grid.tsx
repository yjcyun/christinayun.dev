import React from "react";
import styled from "styled-components";

import ProjectCard from "@components/ui/cards/project-card";

import { projects } from "@constants/projects";

interface ProjectCardGridProps {
  all?: boolean;
}

const StyledProjectCardGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

const ProjectCardGrid = () => {
  return (
    <StyledProjectCardGrid>
      {projects.map((project) => (
        <ProjectCard key={project.title} displayAll {...project} />
      ))}
    </StyledProjectCardGrid>
  );
};

export default ProjectCardGrid;
