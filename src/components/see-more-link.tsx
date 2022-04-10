import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

interface SeeMoreProps {
  to: string;
}

const StyledSeeMoreLink = styled.div`
  margin-top: 3rem;
  font-weight: 800;
  text-decoration: underline;
`;

const SeeMoreLink = ({ to }: SeeMoreProps) => {
  return (
    <StyledSeeMoreLink>
      <Link to={`/${to}`}>See more {to}...</Link>
    </StyledSeeMoreLink>
  );
};

export default SeeMoreLink;
