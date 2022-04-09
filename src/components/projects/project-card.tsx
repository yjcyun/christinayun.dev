import React from "react";
import styled from "styled-components";

interface ProjectCardProps {
  title: string;
  description: string;
  sourceLink?: string;
  liveLink?: string;
  thumbnail: string;
}

const StyledProjectCard = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  &:not(:last-child) {
    border-bottom: var(--border);
  }
`;

const StyledImageContainer = styled.div`
  width: 200px;
  height: 110px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledContent = styled.div`
  p {
    margin-top: 0.5rem;
  }
`;

const StyledCtaContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectCard = ({
  title,
  description,
  sourceLink,
  liveLink,
  thumbnail,
}: ProjectCardProps) => {
  return (
    <StyledProjectCard>
      <StyledImageContainer>
        <img src={thumbnail} alt={title} />
      </StyledImageContainer>
      <StyledContentContainer>
        <StyledContent>
          <h4>#### {title}</h4>
          <p>{description}</p>
        </StyledContent>

        <StyledCtaContainer>
          {sourceLink && (
            <a href={sourceLink} target="_blank" rel="noopener noreferrer">
              source
            </a>
          )}

          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            live
          </a>
        </StyledCtaContainer>
      </StyledContentContainer>
    </StyledProjectCard>
  );
};

export default ProjectCard;
