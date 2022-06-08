import React from "react";
import styled from "styled-components";
import Button from "../button";

const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledThumbnail = styled.img`
  border-radius: 10px 10px 0 0;
`;

const StyledContentContainer = styled.div`
  padding: 3rem;
  background-color: var(--black-2);
  border-radius: 0 0 10px 10px;
`;

const StyledH3 = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
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
      <StyledThumbnail src={thumbnail} alt={title} />
      <StyledContentContainer>
        <StyledTagsContainer>
          {tags.map((tag) => (
            <Button key={tag} type="pill">
              {tag}
            </Button>
          ))}
        </StyledTagsContainer>
        <StyledH3>{title}</StyledH3>
        <p>{description}</p>
        <StyledCtaContainer>
          <a href={liveLink}>
            <Button type="secondary" bgColor="var(--primary)">
              Live Site
            </Button>
          </a>
          <a href={sourceLink}>
            <Button type="tertiary">Github</Button>
          </a>
        </StyledCtaContainer>
      </StyledContentContainer>
    </StyledProjectCard>
  );
};

export default ProjectCard;
