import * as React from "react";

import Layout from "@components/layout/layout";
import About from "@components/about/about";
import Projects from "@components/projects/projects";
import Posts from "@components/posts/posts";
import { graphql, PageProps } from "gatsby";
import { PostListQuery } from "@graphql-types";

// markup
const IndexPage = ({ data }: PageProps<PostListQuery>) => {
  return (
    <Layout>
      <About />
      <Projects />
      <Posts {...data} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query PostList {
    allMdx(limit: 5, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;
