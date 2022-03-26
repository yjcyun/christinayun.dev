import React from "react";
import styled from "styled-components";
import Button from "../button";

interface ProjectCardProps {
  title: string;
  description: string;
  sourceLink?: string;
  liveLink?: string;
}

const StyledProjectCard = styled.div`
  border: 1px solid rgb(147 197 253);
  padding: 1.25rem;
  border-radius: 3px;

  h4 {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 1.25rem 0;
  }
`;

const ProjectCard = ({
  title,
  description,
  sourceLink,
  liveLink,
}: ProjectCardProps) => {
  return (
    <StyledProjectCard>
      <h4>#### {title}</h4>
      <p>{description}</p>
      <Button disabled={!sourceLink}>
        <a href={sourceLink} target="_blank" rel="noopener noreferrer">
          source
        </a>
      </Button>
      <Button disabled={!liveLink}>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          live
        </a>
      </Button>
    </StyledProjectCard>
  );
};

export default ProjectCard;
