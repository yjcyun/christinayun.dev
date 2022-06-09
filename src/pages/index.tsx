import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "@components/layout/layout";

import { HomePostListQuery } from "@graphql-types";
import Hero from "@components/page/home/hero";
import PageTitle from "@components/ui/page-title";
import FeaturedProjectCard from "@components/ui/cards/featured-project-card";
import Featured from "@components/page/home/featured";

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
