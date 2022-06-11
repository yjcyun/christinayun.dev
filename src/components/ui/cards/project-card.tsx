import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import { GetAllProjectMdxQuery } from "@pages/projects";
import Button from "@components/ui/button";
import { device } from "@constants/device";

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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ${device.laptop} {
    padding: 0;
  }
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

type ProjectCardFrontmatter =
  GetAllProjectMdxQuery["allMdx"]["nodes"][number]["frontmatter"];

type ProjectCardProps = ProjectCardFrontmatter & {
  displayAll?: boolean;
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
          {tags?.map((tag) => (
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
        <GatsbyImage
          image={getImage(thumbnail as ImageDataLike)!}
          alt={title}
        />
      </StyledThumbnailContainer>
    </StyledProjectCard>
  );
};

export default ProjectCard;
