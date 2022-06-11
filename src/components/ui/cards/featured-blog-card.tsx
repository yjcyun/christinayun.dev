import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { device } from "@constants/device";
import Button from "@components/ui/button";

const StyledCard = styled.div`
  padding: 1.5rem;
  background: var(--slate-800);

  @media ${device.tabletS} {
    padding: 2rem;
  }
`;

const StyledTitles = styled.div`
  margin-bottom: 2.5rem;
  margin-top: 1.3rem;
  h3 {
    margin-bottom: 1.3rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const StyledDate = styled.p`
  color: var(--slate-400);
`;

type FeaturedBlogCardProps = {
  date: string;
  description: string;
  title: string;
  to: string;
};

const FeaturedBlogCard = ({
  date,
  description,
  title,
  to,
}: FeaturedBlogCardProps) => {
  return (
    <Link to={to}>
      <StyledCard>
        <StyledDate>{date}</StyledDate>
        <StyledTitles>
          <h3>{title}</h3>
          <p>{description}</p>
        </StyledTitles>
      </StyledCard>
    </Link>
  );
};

export default FeaturedBlogCard;
