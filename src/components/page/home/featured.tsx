import React from "react";
import styled from "styled-components";

import PageTitle from "@components/ui/page-title";
import FeaturedBlogCard from "@components/ui/cards/featured-blog-card";
import ProjectCard from "@components/ui/cards/project-card";
import { device } from "@constants/device";
import { GetAllProjectMdxQuery } from "@pages/projects";

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
  children: React.ReactNode;
}

const Featured = ({ title, type, children }: FeaturedProps) => {
  return (
    <StyledFeatured>
      <PageTitle title={title} section />
      <StyledFeaturedSection>
        <StyledCardContainer $grid={type === "projects" ? 2 : 3}>
          {children}
        </StyledCardContainer>
      </StyledFeaturedSection>
    </StyledFeatured>
  );
};

export default Featured;
