import React from "react";
import styled from "styled-components";
import { Link, navigate } from "gatsby";

import { device } from "@constants/device";
import Button from "@components/ui/button";
import { GetDevBlogMdxQuery } from "@pages/blog";

const StyledTitle = styled.h3`
  margin-bottom: 1.3rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const StyledCard = styled.div`
  background: var(--slate-800);
  transition: 0.2s;
  padding: 1.5rem;
  display: block;
  cursor: pointer;

  &:hover {
    transform: translateY(-0.3rem);

    ${StyledTitle} {
      color: var(--accent);
    }
  }
  @media ${device.tabletS} {
    padding: 2rem;
  }
`;

const StyledContent = styled.div`
  margin-top: 1.3rem;
`;

const StyledDescription = styled.p`
  color: var(--slate-400);
`;

const StyledDate = styled.p`
  color: var(--slate-500);
`;

type BlogCardProps =
  GetDevBlogMdxQuery["blogMdx"]["nodes"][number]["frontmatter"];

const BlogCard = ({ date, title, slug, tags }: BlogCardProps) => {
  return (
    <StyledCard role="link" onClick={() => navigate(`/blog/${slug}`)}>
      <StyledDate>{date}</StyledDate>
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
      </StyledContent>
      <StyledTagsContainer>
        {tags?.map((tag) => (
          <Link to={`/blog/tags/${tag.toLocaleLowerCase()}`} key={tag}>
            <Button key={tag} type="pill">
              {tag}
            </Button>
          </Link>
        ))}
      </StyledTagsContainer>
    </StyledCard>
  );
};

export default BlogCard;
const StyledTagsContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
`;
