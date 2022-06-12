import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "@components/layout/layout";
import Hero from "@components/page/home/hero";
import Featured from "@components/page/home/featured";
import ProjectCard from "@components/ui/cards/project-card";
import BlogCard from "@components/ui/cards/blog-card";

import { GetAllProjectMdxQuery } from "./projects";
import { GetDevBlogMdxQuery } from "./blog";

type GetIndexDataQuery = GetAllProjectMdxQuery & GetDevBlogMdxQuery;

const IndexPage = ({ data }: PageProps<GetIndexDataQuery>) => {
  console.log(data);
  const {
    projectsMdx: { nodes: projects },
  } = data;
  const {
    blogMdx: { nodes: devPosts },
  } = data;

  return (
    <Layout>
      <Hero />
      <Featured type="projects" title="Featured Projects">
        {projects.map(({ frontmatter, id }) => (
          <ProjectCard {...frontmatter} key={id} />
        ))}
      </Featured>
      <Featured type="blog" title="Latest Blog Posts">
        {devPosts.map(({ frontmatter, id }) => (
          <BlogCard {...frontmatter} key={id} />
        ))}
      </Featured>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query GetFeaturedProjectMdx {
    projectsMdx: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { featured: { eq: true } }
      }
      limit: 2
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
    blogMdx: allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 2
    ) {
      nodes {
        frontmatter {
          description
          date(formatString: "MMMM YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;
