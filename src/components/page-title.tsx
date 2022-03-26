import React from "react";
import styled from "styled-components";

interface PageTitleProps {
  title: string;
  description?: string | React.ReactNode;
}

const StyledPageTitle = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
`;

const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <StyledPageTitle>
      <h1># {title}</h1>
      <p>{description}</p>
    </StyledPageTitle>
  );
};

export default PageTitle;
