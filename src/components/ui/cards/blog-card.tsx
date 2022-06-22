import React from "react";
import styled from "styled-components";
import { Link, navigate } from "gatsby";

import { device } from "@constants/device";
import Button from "@components/ui/button";
import { GetDevBlogMdxQuery } from "@pages/blog";

const StyledTitle = styled.h3`
  margin-bottom: 1.3rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text2};
`;

const StyledCard = styled(Link)`
  background-color: ${({ theme }) => theme.background3};
  transition: 0.2s;
  padding: 1.5rem;
  display: block;

  &:hover {
    transform: translateY(-0.3rem);

    ${StyledTitle} {
      color: ${(props) => props.theme.accentColor};
    }
  }

  @media ${device.tabletS} {
    padding: 2rem;
  }
`;

const StyledContent = styled.div`
  margin-top: 1.3rem;
`;

const StyledDate = styled.p`
  color: ${({ theme }) => theme.text5};
`;

const StyledTagsContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
`;

type BlogCardProps =
  GetDevBlogMdxQuery["blogMdx"]["nodes"][number]["frontmatter"];

const BlogCard = ({ date, title, slug, tags }: BlogCardProps) => {
  return (
    <StyledCard to={`/blog/${slug}`}>
      <StyledDate>{date}</StyledDate>
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
      </StyledContent>
      <StyledTagsContainer>
        {tags?.map((tag) => (
          <Button
            key={tag}
            type="pill"
            onClick={(e) => {
              e.preventDefault();
              navigate(`/blog/tags/${tag.toLocaleLowerCase()}`);
            }}
          >
            {tag}
          </Button>
        ))}
      </StyledTagsContainer>
    </StyledCard>
  );
};

export default BlogCard;
