import React from "react";
import styled from "styled-components";

import { device } from "@constants/device";

const StyledH1 = styled.h1`
  font-size: 1.7rem;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.accentColor};

  @media ${device.tabletS} {
    font-size: 2rem;
  }
`;

const StyledH2 = styled.h2`
  color: ${(props) => props.theme.accentColor};
  font-size: 1.5rem;

  @media ${device.tabletS} {
    font-size: 1.7rem;
  }
`;

const StyledP = styled.p`
  margin-top: 1rem;
  max-width: var(--md-width);
  color: ${(props) => props.theme.text4};
`;

type PageTitleProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  section?: boolean;
};

const PageTitle = ({ title, description, section }: PageTitleProps) => {
  return (
    <div>
      {section ? <StyledH2>{title}</StyledH2> : <StyledH1>{title}</StyledH1>}
      {description && <StyledP>{description}</StyledP>}
    </div>
  );
};

export default PageTitle;
