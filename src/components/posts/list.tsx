import React from "react";
import styled from "styled-components";

import { PostListQuery } from "../../../graphql-types";
import ListItem from "./list-item";

const StyledList = styled.div`
  margin-top: 2rem;
`;

const List = ({ allMdx }: PostListQuery) => {
  const { nodes: posts } = allMdx;

  return (
    <StyledList>
      {posts.map((post) => {
        if (!post.frontmatter) {
          return <div key={post.id}>Oops! something went wrong</div>;
        }

        return <ListItem key={post.id} {...post.frontmatter} />;
      })}
    </StyledList>
  );
};

export default List;
