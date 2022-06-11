import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "@components/layout/layout";

import Hero from "@components/page/home/hero";

import Featured from "@components/page/home/featured";
import { GetAllProjectMdxQuery } from "./projects";

// markup
const IndexPage = ({ data }: PageProps<GetAllProjectMdxQuery>) => {
  const {
    allMdx: { nodes: projects },
  } = data;

  return (
    <Layout>
      <Hero />
      <Featured type="projects" title="Featured Projects" data={projects} />
      <Featured type="blog" title="Latest Blog Posts" />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query GetFeaturedProjectMdx {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { featured: { eq: true } }
      }
    ) {
      nodes {
        frontmatter {
          description
          featured
          liveLink
          sourceLink
          tags
          title
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`;
