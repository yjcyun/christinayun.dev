import React from "react";
import styled from "styled-components";

export interface PageTitleProps {
  title: string;
  description?: string | React.ReactNode;
  section?: boolean;
}

const StyledPageTitle = styled.div``;

const StyledH1 = styled.h1`
  font-size: 2.5rem;
  border-bottom: 5px solid var(--secondary);
  padding-bottom: 5px;
  display: inline-block;
`;

const StyledH2 = styled.h2`
  font-size: 1.7rem;
  color: var(--accent);
`;

const StyledP = styled.p`
  margin-top: 3rem;
  font-size: 1.2rem;
  max-width: 700px;
`;

const PageTitle = ({ title, description, section }: PageTitleProps) => {
  return (
    <StyledPageTitle>
      {section ? <StyledH2>{title}</StyledH2> : <StyledH1>{title}</StyledH1>}
      {description && <StyledP>{description}</StyledP>}
    </StyledPageTitle>
  );
};

export default PageTitle;
