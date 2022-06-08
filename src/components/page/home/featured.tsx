import React from "react";
import styled from "styled-components";

import FeaturedProjectCard from "@components/ui/cards/featured-project-card";
import PageTitle from "@components/ui/page-title";

import heatherDick from "@images/projects/heather-dick.png";
import FeaturedBlogCard from "@components/ui/cards/featured-blog-card";
import Button from "@components/ui/button";
import { device } from "@constants/device";

const StyledFeatured = styled.section`
  margin-top: 3rem;
`;

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  margin-top: 1rem;

  @media ${device.tabletL} {
    grid-template-columns: repeat(3, 1fr);
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
          <StyledCardContainer>
            <FeaturedProjectCard alt="Heather Dick" src={heatherDick} to="/" />
            <FeaturedProjectCard alt="Heather Dick" src={heatherDick} to="/" />
            <FeaturedProjectCard alt="Heather Dick" src={heatherDick} to="/" />
          </StyledCardContainer>
        </StyledFeaturedSection>
      ) : (
        <StyledFeaturedSection>
          <StyledCardContainer>
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
