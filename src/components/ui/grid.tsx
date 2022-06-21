import React from "react";
import styled from "styled-components";

import { device } from "@constants/device";

const StyledGrid = styled.div<{ $grid: number }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  margin-top: 3rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(${(props) => props.$grid}, 1fr);
  }
`;

type GridProps = {
  grid: number;
  children: React.ReactNode;
};

const Grid = ({ grid, children }: GridProps) => {
  return <StyledGrid $grid={grid}>{children}</StyledGrid>;
};

export default Grid;
