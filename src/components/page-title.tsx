import React from "react";
import styled from "styled-components";

export interface PageTitleProps {
  title: string;
  description?: string | React.ReactNode;
  section?: boolean;
}

const StyledPageTitle = styled.div`
  h1,
  h2 {
    margin-bottom: 1rem;
    color: var(--white);
    border-bottom: 5px solid var(--neon-green);
    padding-bottom: 5px;
    display: inline-block;
    font-size: 36px;
  }
`;

const PageTitle = ({ title, description, section }: PageTitleProps) => {
  return (
    <StyledPageTitle>
      {section ? <h2>{title}</h2> : <h1>{title}</h1>}
      <p>{description}</p>
    </StyledPageTitle>
  );
};

export default PageTitle;
