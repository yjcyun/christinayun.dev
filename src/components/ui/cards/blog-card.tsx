import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

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

  &:hover {
    transform: translateY(-0.3rem);

    ${StyledTitle} {
      color: var(--accent);
    }
  }
`;

const StyledLink = styled(Link)`
  padding: 1.5rem;
  display: block;

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

const BlogCard = ({ date, description, title, slug }: BlogCardProps) => {
  return (
    <StyledCard>
      <StyledLink to={slug}>
        <StyledDate>{date}</StyledDate>
        <StyledContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledContent>
      </StyledLink>
    </StyledCard>
  );
};

export default BlogCard;
