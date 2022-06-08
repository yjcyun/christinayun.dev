import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Button from "./ui/button";

interface SeeMoreProps {
  to: string;
}

const StyledSeeMoreLink = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;
`;

const SeeMoreLink = ({ to }: SeeMoreProps) => {
  return (
    <StyledSeeMoreLink>
      <Link to={`/${to}`}>
        <Button>See All {to} ⟶</Button>
      </Link>
    </StyledSeeMoreLink>
  );
};

export default SeeMoreLink;
