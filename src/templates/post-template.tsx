import React from "react";
import styled from "styled-components";
import { graphql, Link, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout/layout";
import { device } from "../constants/device";
import { GetSinglePostQuery } from "../../graphql-types";
import TableOfContents from "../components/posts/table-of-contents";

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
`;

const PostTemplate = ({ data }: PageProps<GetSinglePostQuery>) => {
  if (!data.mdx || !data.mdx.frontmatter) {
    return <div>Oops! Something went wrong.</div>;
  }

  const {
    mdx: {
      frontmatter: { title, date, categories },
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
          <h1>#{title}</h1>
          <time>{date}</time>
          {categories?.map((category) => (
            <button key={category}>{category}</button>
          ))}
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
        categories
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
