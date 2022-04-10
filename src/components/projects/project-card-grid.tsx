import React from "react";
import styled from "styled-components";

import { projects } from "@constants/projects";
import ProjectCard from "./project-card";

const StyledProjectCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-top: 3rem;
`;

const ProjectCardGrid = () => {
  return (
    <StyledProjectCardGrid>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </StyledProjectCardGrid>
  );
};

export default ProjectCardGrid;
