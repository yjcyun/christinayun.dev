import React from "react";
import styled from "styled-components";

interface BlockquoteProps {
  children: React.ReactNode;
}

const StyledBlockquote = styled.blockquote`
  border-left: 2px solid var(--faint-accent);
  padding: 1.25rem;
  background: rgb(241, 245, 249);
  margin: 1.5rem 0;
`;

export const Blockquote = ({ children }: BlockquoteProps) => {
  return <StyledBlockquote>{children}</StyledBlockquote>;
};
