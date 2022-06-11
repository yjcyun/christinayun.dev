import React from "react";
import styled from "styled-components";

import ProjectCard from "@components/ui/cards/project-card";
import { device } from "@constants/device";
import { GetAllProjectMdxQuery } from "@pages/projects";

const StyledProjectCardGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
  }
`;

type ProjectCardGrid = {
  projects: GetAllProjectMdxQuery["allMdx"]["nodes"];
};

const ProjectCardGrid = ({ projects }: ProjectCardGrid) => {
  return (
    <StyledProjectCardGrid>
      {projects.map(({ frontmatter, id }) => (
        <ProjectCard key={id} displayAll {...frontmatter} />
      ))}
    </StyledProjectCardGrid>
  );
};

export default ProjectCardGrid;
