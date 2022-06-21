import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledHighlightedLink = styled(Link)`
  color: var(--accent);
  text-decoration: underline;
`;

type SeeMoreProps = {
  to: string;
  label: string;
};

const HighlightedLink = ({ to, label }: SeeMoreProps) => {
  return <StyledHighlightedLink to={to}>{label}</StyledHighlightedLink>;
};

export default HighlightedLink;
