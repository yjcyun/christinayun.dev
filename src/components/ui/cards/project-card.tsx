import { device } from "@constants/device";
import React from "react";
import styled from "styled-components";
import Button from "../button";

const StyledH3 = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--slate-300);

  @media ${device.tabletS} {
    font-size: 1.7rem;
  }
`;

const StyledProjectCard = styled.a<{
  $featured: boolean;
  $displayAll: boolean;
}>`
  display: grid;
  grid-template-columns: 1fr;
  transition: 0.2s;
  box-shadow: var(--box-shadow);
  background-color: var(--slate-800);
  grid-gap: 1rem;

  &:hover {
    transform: translateY(-0.3rem);

    ${StyledH3} {
      color: var(--accent);
    }
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledThumbnailContainer = styled.div`
  display: none;
  padding: 2rem;

  @media ${device.tablet} {
    display: block;
  }

  @media ${device.laptop} {
    padding: 0;
  }
`;

const StyledThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledContentContainer = styled.div`
  padding: 1rem;

  @media ${device.tabletS} {
    padding: 2rem;
  }
`;

const StyledP = styled.p`
  color: var(--slate-400);
`;

const StyledTagsContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

const StyledCtaContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 2rem;
`;

type ProjectCardProps = {
  displayAll?: boolean;
  featured?: boolean;
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  sourceLink?: string;
};

const ProjectCard = ({
  displayAll = false,
  description,
  featured = false,
  liveLink,
  sourceLink,
  tags,
  title,
  thumbnail,
}: ProjectCardProps) => {
  return (
    <StyledProjectCard
      $displayAll={displayAll}
      $featured={featured}
      href={liveLink}
      target="_blank"
      rel="noopener noreferrer"
    >
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
          <Button
            type="secondary"
            bgColor="var(--slate-600)"
            size="small"
            onClick={() => window.open(liveLink, "_blank")}
          >
            Live Site
          </Button>
          {sourceLink && (
            <Button
              type="tertiary"
              size="small"
              onClick={() => window.open(sourceLink, "_blank")}
            >
              Github
            </Button>
          )}
        </StyledCtaContainer>
      </StyledContentContainer>
      <StyledThumbnailContainer>
        <StyledThumbnail src={thumbnail} alt={title} />
      </StyledThumbnailContainer>
    </StyledProjectCard>
  );
};

export default ProjectCard;
