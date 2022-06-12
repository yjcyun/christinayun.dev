import React from "react";
import styled from "styled-components";

import BlogCard from "@components/ui/cards/blog-card";
import { GetDevBlogMdxQuery } from "@pages/blog";
import { device } from "@constants/device";

const StyledPostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  margin-top: 3rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

type PostsGridProps = { data: GetDevBlogMdxQuery["blogMdx"]["nodes"] };

const PostsGrid = ({ data }: PostsGridProps) => {
  return (
    <StyledPostsGrid>
      {data.map(({ frontmatter, id }) => (
        <BlogCard {...frontmatter} key={id} />
      ))}
    </StyledPostsGrid>
  );
};

export default PostsGrid;
