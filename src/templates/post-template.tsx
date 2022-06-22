import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { graphql, navigate, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "@components/layout/layout";
import Button from "@components/ui/button";
import { GetSinglePostQuery } from "@graphql-types";

const StyledPostTemplate = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`;

const StyledArticle = styled.article`
  max-width: var(--md-width);
  width: 100%;

  time {
    font-size: 1rem;
  }
`;

const StyledH1 = styled.h1`
  font-size: 2.5rem;
`;

const StyleCategoriesContainer = styled.div`
  display: flex;
  gap: 5px;
  margin: 1rem 0;
`;

const PostTemplate = ({ data }: PageProps<GetSinglePostQuery>) => {
  if (!data.mdx || !data.mdx.frontmatter) {
    return <div>Oops! Something went wrong.</div>;
  }

  const {
    mdx: {
      frontmatter: { title, date, tags },
      body,
    },
  } = data;

  return (
    <Layout>
      <StyledPostTemplate>
        <StyledArticle>
          <StyledH1>{title}</StyledH1>
          <time>{date}</time>
          <StyleCategoriesContainer>
            {tags?.map((tag) => (
              <Button
                type="pill"
                key={tag}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/blog/tags/${tag!.toLocaleLowerCase()}`);
                }}
              >
                {tag}
              </Button>
            ))}
          </StyleCategoriesContainer>
          <MDXRenderer>{body}</MDXRenderer>
        </StyledArticle>
      </StyledPostTemplate>
    </Layout>
  );
};

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        tags
        date(formatString: "MMMM D, YYYY")
        slug
        title
      }
    }
  }
`;

export default PostTemplate;
