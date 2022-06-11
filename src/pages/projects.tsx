import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "@components/layout/layout";
import PageTitle from "@components/ui/page-title";

import ProjectCardGrid from "@components/page/projects/project-card-grid";

export type GetAllProjectMdxQuery = {
  projectsMdx: {
    nodes: Array<{
      id: string;
      frontmatter: {
        description: string;
        featured: boolean;
        liveLink: string;
        sourceLink?: string | null;
        tags?: Array<string> | null;
        title: string;
        thumbnail: {
          childImageSharp: {
            gatsbyImageData: any;
          };
        };
      };
    }>;
  };
};

const PostsPage = ({ data }: PageProps<GetAllProjectMdxQuery>) => {
  const {
    projectsMdx: { nodes: projects },
  } = data;
  return (
    <Layout>
      <PageTitle
        title="Projects"
        description="These are some of the projects that I’ve made. Open source projects have Github link so feel free to check out the source code if you like the live site."
      />
      <ProjectCardGrid projects={projects} />
    </Layout>
  );
};

export const query = graphql`
  query GetAllProjectMdx {
    projectsMdx: allMdx(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
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

export default PostsPage;
