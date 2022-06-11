import React from "react";
import styled from "styled-components";
import { graphql, Link, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout/layout";
import { device } from "../constants/device";
import { GetSinglePostQuery } from "../../graphql-types";
import TableOfContents from "../components/page/posts/table-of-contents";
import Button from "@components/ui/button";

const StyledPostTemplate = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;

  @media ${device.laptopM} {
    margin-right: -17rem;
  }
`;

const StyledArticle = styled.article`
  max-width: 43rem;
  width: 100%;

  time {
    font-size: 1rem;
  }
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
      headings,
    },
  } = data;

  const nonNullHeadings: { depth: number; value: string }[] | null | undefined =
    headings?.map((heading) => {
      return { depth: heading!.depth!, value: heading!.value! };
    });

  return (
    <Layout>
      <StyledPostTemplate>
        <StyledArticle>
          <h1>{title}</h1>
          <time>{date}</time>
          <StyleCategoriesContainer>
            {tags?.map((tag) => (
              <Button type="pill" key={tag}>
                {tag}
              </Button>
            ))}
          </StyleCategoriesContainer>
          <MDXRenderer>{body}</MDXRenderer>
        </StyledArticle>
        {nonNullHeadings && nonNullHeadings.length > 0 && (
          <TableOfContents headings={nonNullHeadings} />
        )}
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
      headings {
        depth
        value
      }
    }
  }
`;

export default PostTemplate;
