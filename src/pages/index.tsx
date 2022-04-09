import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "@components/layout/layout";
import About from "@components/about/about";
import Projects from "@components/projects/projects";
import Posts from "@components/posts/posts";
import Contact from "@components/contact/contact";

import { PostListQuery } from "@graphql-types";

// markup
const IndexPage = ({ data }: PageProps<PostListQuery>) => {
  return (
    <Layout>
      <About />
      <Projects />
      <Posts {...data} />
      <Contact />
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
