import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { MdEast } from "react-icons/md";

import PillButton from "@components/pill-buttons";
import { device } from "@constants/device";

const StyledCard = styled.div`
  padding: 1.5rem;
  background: var(--dark-grayish-blue);
  border-radius: 10px;
  position: relative;

  @media ${device.tabletS} {
    padding: 2.5rem 2rem;
  }
`;

const StyledMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.3rem;
`;

const StyledTitles = styled.div`
  margin-bottom: 2.5rem;

  h3 {
    margin-bottom: 1.3rem;
  }
`;

const StyledArrow = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8572fb;
  border-radius: 10px 0 10px 0;
`;

const StyledMdEast = styled(MdEast)`
  color: var(--white);
  width: 1.5rem;
  height: 1.5rem;
`;

type FeaturedBlogCardProps = {
  date: string;
  description: string;
  tag: string;
  title: string;
  to: string;
};

const FeaturedBlogCard = ({
  date,
  description,
  tag,
  title,
  to,
}: FeaturedBlogCardProps) => {
  return (
    <Link to={to}>
      <StyledCard>
        <StyledMeta>
          <PillButton>{tag}</PillButton>
          <p>{date}</p>
        </StyledMeta>
        <StyledTitles>
          <h3>{title}</h3>
          <h5>{description}</h5>
        </StyledTitles>
        <StyledArrow>
          <StyledMdEast />
        </StyledArrow>
      </StyledCard>
    </Link>
  );
};

export default FeaturedBlogCard;
