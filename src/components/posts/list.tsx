import React from "react";
import styled from "styled-components";

import { GetDevBlogMdxQuery } from "@pages/blog";
import ListItem from "./list-item";

const StyledList = styled.ul`
  margin-top: 2rem;
`;

type PostsListProps = {
  posts: GetDevBlogMdxQuery["blogMdx"]["nodes"];
};

const PostsList = ({ posts }: PostsListProps) => {
  return (
    <StyledList>
      {posts.map(({ frontmatter, id }) => (
        <ListItem key={id} {...frontmatter} />
      ))}
    </StyledList>
  );
};

export default PostsList;
