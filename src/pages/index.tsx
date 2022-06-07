import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "@components/layout/layout";
import About from "@components/about/about";

import { HomePostListQuery } from "@graphql-types";
import Hero from "@components/home/hero";
import PageTitle from "@components/page-title";
import FeaturedProjectCard from "@components/cards/featured-project-card";
import Featured from "@components/home/featured";

// markup
const IndexPage = ({ data }: PageProps<HomePostListQuery>) => {
  return (
    <Layout>
      <Hero />
      <Featured type="projects" title="Featured Projects" />
      <Featured type="blog" title="Latest Blog Posts" />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomePostList {
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
