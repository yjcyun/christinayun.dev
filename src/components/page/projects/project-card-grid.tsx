import React from "react";
import styled from "styled-components";

import ProjectCard from "@components/ui/cards/project-card";

import { projects } from "@constants/projects";
import { device } from "@constants/device";

const StyledProjectCardGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
  }
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
