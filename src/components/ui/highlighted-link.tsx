import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledHighlightedLink = styled(Link)`
  color: ${(props) => props.theme.accentColor};
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
