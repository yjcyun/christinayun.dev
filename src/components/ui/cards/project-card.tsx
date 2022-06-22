import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import { GetAllProjectMdxQuery } from "@pages/projects";
import Button from "@components/ui/button";
import { device } from "@constants/device";
import { Link } from "gatsby";

const StyledH3 = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.cardTitle};

  @media ${device.tabletS} {
    font-size: 1.7rem;
  }
`;

const StyledProjectCard = styled.div<{
  $featured: boolean;
  $displayAll: boolean;
}>`
  display: grid;
  grid-template-columns: 1fr;
  transition: 0.2s;
  background-color: ${({ theme }) => theme.cardContentBackground};
  grid-gap: 1rem;

  &:hover {
    transform: translateY(-0.3rem);

    ${StyledH3} {
      color: ${(props) => props.theme.accentColor};
    }
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledThumbnailContainer = styled.div`
  display: none;
  padding: 2rem;
  background-color: ${({ theme }) => theme.cardImgBackground};

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ${device.laptop} {
    padding: 1.5rem;
  }
`;

const StyledContentContainer = styled.div`
  padding: 1rem;

  @media ${device.tabletS} {
    padding: 2rem;
  }
`;

const StyledP = styled.p`
  color: ${({ theme }) => theme.text};
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
  GetAllProjectMdxQuery["projectsMdx"]["nodes"][number]["frontmatter"];

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
    <StyledProjectCard $displayAll={displayAll} $featured={featured}>
      <StyledContentContainer>
        <StyledTagsContainer>
          {tags?.map((tag) => (
            <Link to={`/projects/tags/${tag.toLocaleLowerCase()}`} key={tag}>
              <Button key={tag} type="pill">
                {tag}
              </Button>
            </Link>
          ))}
        </StyledTagsContainer>
        <StyledH3>{title}</StyledH3>
        <StyledP>{description}</StyledP>
        <StyledCtaContainer>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <Button type="secondary" bgColor="var(--slate-600)" size="small">
              Live Site
            </Button>
          </a>
          {sourceLink && (
            <a href={sourceLink} target="_blank" rel="noopener noreferrer">
              <Button type="tertiary" size="small">
                Github
              </Button>
            </a>
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
