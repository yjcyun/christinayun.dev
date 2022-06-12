import React from "react";
import styled from "styled-components";

import PageTitle from "@components/ui/page-title";
import { device } from "@constants/device";

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

type FeaturedProps = {
  title: string;
  type: "blog" | "projects";
  children: React.ReactNode;
};

const Featured = ({ title, type, children }: FeaturedProps) => {
  return (
    <StyledFeatured>
      <PageTitle title={title} section />

      <StyledCardContainer $grid={type === "projects" ? 1 : 2}>
        {children}
      </StyledCardContainer>
    </StyledFeatured>
  );
};

export default Featured;
