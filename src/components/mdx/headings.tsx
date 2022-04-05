import React from "react";
import styled from "styled-components";

type HeadingType = {
  children: React.ReactNode;
};

const StyledH2 = styled.h2`
  margin: 36px 0 16px;
  font-size: 1.75rem;
`;

export const h2 = ({ children }: HeadingType) => {
  return <StyledH2>## {children}</StyledH2>;
};
