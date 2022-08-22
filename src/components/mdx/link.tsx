import React from "react";
import styled from "styled-components";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const StyledLink = styled.a`
  color: ${(props) => props.theme.accentColor};
  text-decoration: underline;
`;

export const ExternalLink = ({ href, children, ...rest }: LinkProps) => {
  return (
    <StyledLink
      target="_blank"
      rel="noopener noreferrer nofollow"
      href={href}
      {...rest}
    >
      {children}
    </StyledLink>
  );
};
