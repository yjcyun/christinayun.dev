import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

import { GetAllSnippetsMdxQuery } from "@pages/snippets";

import SnippetsLogo from "@components/ui/snippets-logo";

const StyledTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

const StyledCard = styled(Link)`
  background: var(--slate-800);
  transition: 0.2s;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    transform: translateY(-0.3rem);

    ${StyledTitle} {
      color: var(--accent);
    }
  }
`;

type SnippetCardFrontmatter =
  GetAllSnippetsMdxQuery["snippetsMdx"]["nodes"][number]["frontmatter"];

const SnippetCard = ({
  title,
  slug,
  image,
  language,
}: SnippetCardFrontmatter) => {
  return (
    <StyledCard to={`/snippets/${slug}`}>
      <StyledTitle>{title}</StyledTitle>
      <SnippetsLogo
        image={image as ImageDataLike}
        alt={language}
        size="small"
      />
    </StyledCard>
  );
};

export default SnippetCard;
