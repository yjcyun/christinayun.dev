import React from "react";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { GetSinglePostQuery } from "../../graphql-types";
import Layout from "../components/layout/layout";

const PostTemplate = ({ data }: PageProps<GetSinglePostQuery>) => {
  if (!data.mdx || !data.mdx.frontmatter) {
    return <div>Oops! Something went wrong.</div>;
  }

  const {
    mdx: {
      frontmatter: { title, date, categories },
      body,
    },
  } = data;

  return (
    <Layout>
      <h1>#{title}</h1>
      <time>{date}</time>
      {categories?.map((category) => (
        <button key={category}>{category}</button>
      ))}
      <MDXRenderer>{body}</MDXRenderer>
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
    }
  }
`;

export default PostTemplate;
