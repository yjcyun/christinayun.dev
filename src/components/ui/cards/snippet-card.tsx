import React from "react";
import styled from "styled-components";
import { Link, navigate } from "gatsby";

import { device } from "@constants/device";
import Button from "@components/ui/button";
import { GetDevBlogMdxQuery } from "@pages/blog";

const StyledTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

const StyledCard = styled(Link)`
  background: var(--slate-800);
  transition: 0.2s;
  padding: 1rem;
  display: block;

  &:hover {
    transform: translateY(-0.3rem);

    ${StyledTitle} {
      color: var(--accent);
    }
  }
`;

type SnippetCardProps = { title: string; slug: string };

const SnippetCard = ({ title, slug }: SnippetCardProps) => {
  return (
    <StyledCard to={`/snippets/${slug}`}>
      <StyledTitle>{title}</StyledTitle>
      <img src="" alt="Javascript" />
    </StyledCard>
  );
};

export default SnippetCard;
