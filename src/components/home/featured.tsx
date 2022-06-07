import React from "react";
import styled from "styled-components";

import FeaturedProjectCard from "@components/cards/featured-project-card";
import PageTitle from "@components/page-title";

import heatherDick from "@images/projects/heather-dick.png";
import FeaturedBlogCard from "@components/cards/featured-blog-card";
import Button from "@components/button";
import { device } from "@constants/device";

const StyledFeatured = styled.section`
  margin-top: 3rem;
`;

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  margin-top: 2rem;

  @media ${device.tabletL} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledFeaturedSection = styled.section``;
const StyledButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;

  @media ${device.tabletL} {
    justify-content: flex-end;
  }
`;

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
          <StyledButtonContainer>
            <Button>View all projects</Button>
          </StyledButtonContainer>
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
          <StyledButtonContainer>
            <Button>View all blog posts</Button>
          </StyledButtonContainer>
        </StyledFeaturedSection>
      )}
    </StyledFeatured>
  );
};

export default Featured;
