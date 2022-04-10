import React from "react";
import styled from "styled-components";
import PageTitle, { PageTitleProps } from "./page-title";

interface SectionProps extends PageTitleProps {
  children?: React.ReactNode;
  smallMargin?: boolean;
}

const SectionContainer = styled.section<{ $smallMargin?: boolean }>`
  margin-bottom: ${(props) => (props.$smallMargin ? "3rem" : "4rem")};
`;

const Section = ({
  children,
  smallMargin = false,
  ...pageTitleProps
}: SectionProps) => {
  return (
    <SectionContainer $smallMargin={smallMargin}>
      <PageTitle section {...pageTitleProps} />
      {children && children}
    </SectionContainer>
  );
};

export default Section;
