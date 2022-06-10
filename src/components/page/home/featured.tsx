import React from "react";
import styled from "styled-components";

import FeaturedProjectCard from "@components/ui/cards/featured-project-card";
import PageTitle from "@components/ui/page-title";

import FeaturedBlogCard from "@components/ui/cards/featured-blog-card";
import Button from "@components/ui/button";
import { device } from "@constants/device";
import { projects } from "@constants/projects";
import ProjectCard from "@components/ui/cards/project-card";

const StyledFeatured = styled.section`
  margin-top: 3rem;
`;

const StyledCardContainer = styled.div<{ $grid: number }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  margin-top: 1rem;

  @media ${device.tabletL} {
    grid-template-columns: repeat(${(props) => props.$grid}, 1fr);
  }
`;

const StyledFeaturedSection = styled.section``;

interface FeaturedProps {
  title: string;
  type: "blog" | "projects";
}

const Featured = ({ title, type }: FeaturedProps) => {
  return (
    <StyledFeatured>
      <PageTitle title={title} section />
      {type === "projects" ? (
        <StyledFeaturedSection>
          <StyledCardContainer $grid={2}>
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <ProjectCard {...project} key={project.title} />
              ))}
          </StyledCardContainer>
        </StyledFeaturedSection>
      ) : (
        <StyledFeaturedSection>
          <StyledCardContainer $grid={3}>
            <FeaturedBlogCard
              date="Feb 15, 2022"
              description="Blog subtitle goes here"
              tag="DEV"
              title="Blog title goes here"
              to="/"
            />
            <FeaturedBlogCard
              date="Feb 15, 2022"
              description="Blog subtitle goes here"
              tag="DEV"
              title="Blog title goes here"
              to="/"
            />
            <FeaturedBlogCard
              date="Feb 15, 2022"
              description="Blog subtitle goes here"
              tag="DEV"
              title="Blog title goes here"
              to="/"
            />
          </StyledCardContainer>
        </StyledFeaturedSection>
      )}
    </StyledFeatured>
  );
};

export default Featured;
