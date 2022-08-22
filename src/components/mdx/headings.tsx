import React from "react";
import styled from "styled-components";

type HeadingType = {
  children: React.ReactNode;
};

const StyledH2 = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.875rem;
`;

const StyledH3 = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

export const h2 = ({ children }: HeadingType) => {
  return <StyledH2>{children}</StyledH2>;
};

export const h3 = ({ children }: HeadingType) => {
  return <StyledH3>{children}</StyledH3>;
};
