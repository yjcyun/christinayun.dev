import SnippetCard from "@components/ui/cards/snippet-card";
import { device } from "@constants/device";
import { GetAllSnippetsMdxQuery } from "@pages/snippets";
import React from "react";
import styled from "styled-components";

const StyledSnippetsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  margin-top: 3rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

type SnippetCardGridProps = {
  snippets: GetAllSnippetsMdxQuery["snippetsMdx"]["nodes"];
};

const SnippetCardGrid = ({ snippets }: SnippetCardGridProps) => {
  return (
    <StyledSnippetsGrid>
      {snippets.map(({ frontmatter, id }) => (
        <SnippetCard {...frontmatter} key={id} />
      ))}
    </StyledSnippetsGrid>
  );
};

export default SnippetCardGrid;
