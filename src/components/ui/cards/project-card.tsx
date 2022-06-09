import React from "react";
import styled from "styled-components";
import Button from "../button";

const StyledProjectCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledThumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledContentContainer = styled.div`
  padding: 2rem;
  background-color: var(--slate-800);
`;

const StyledH3 = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--slate-300);
`;

const StyledP = styled.p`
  color: var(--slate-400);
`;

const StyledTagsContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 0.3rem;
`;

const StyledCtaContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

type ProjectCardProps = {
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  sourceLink?: string;
};

const ProjectCard = ({
  description,
  liveLink,
  sourceLink,
  tags,
  title,
  thumbnail,
}: ProjectCardProps) => {
  return (
    <StyledProjectCard>
      <StyledContentContainer>
        <StyledTagsContainer>
          {tags.map((tag) => (
            <Button key={tag} type="pill">
              {tag}
            </Button>
          ))}
        </StyledTagsContainer>
        <StyledH3>{title}</StyledH3>
        <StyledP>{description}</StyledP>
        <StyledCtaContainer>
          <a href={liveLink}>
            <Button type="secondary" bgColor="var(--slate-600)">
              Live Site
            </Button>
          </a>
          {sourceLink && (
            <a href={sourceLink}>
              <Button type="tertiary">Github</Button>
            </a>
          )}
        </StyledCtaContainer>
      </StyledContentContainer>
      <StyledThumbnail src={thumbnail} alt={title} />
    </StyledProjectCard>
  );
};

export default ProjectCard;
