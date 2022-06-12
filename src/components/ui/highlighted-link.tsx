import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

interface SeeMoreProps {
  to: string;
  label: string;
}

const StyledHighlightedLink = styled(Link)`
  color: var(--accent);
  text-decoration: underline;
`;

const HighlightedLink = ({ to, label }: SeeMoreProps) => {
  return <StyledHighlightedLink to={to}>{label}</StyledHighlightedLink>;
};

export default HighlightedLink;
