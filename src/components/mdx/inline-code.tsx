import React from "react";
import styled from "styled-components";

interface InlineCodeProps {
  children: React.ReactNode;
}

const StyledInlineCode = styled.code`
  background-color: #263555;
  padding: 0.3rem;
  border-radius: 3px;
`;

export const InlineCode = ({ children }: InlineCodeProps) => {
  return <StyledInlineCode>{children}</StyledInlineCode>;
};
