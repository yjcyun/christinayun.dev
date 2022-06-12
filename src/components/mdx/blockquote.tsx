import React from "react";
import styled from "styled-components";

interface BlockquoteProps {
  children: React.ReactNode;
}

const StyledBlockquote = styled.blockquote`
  border-left: 4px solid var(--accent);
  padding: 1.25rem;
  background: var(--slate-000);
  margin: 1.5rem 0;
`;

export const Blockquote = ({ children }: BlockquoteProps) => {
  return <StyledBlockquote>{children}</StyledBlockquote>;
};
