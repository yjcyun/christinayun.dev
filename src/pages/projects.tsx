import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "@components/layout/layout";
import PageTitle from "@components/ui/page-title";
import HighlightedLink from "@components/ui/highlighted-link";
import Seo from "@components/ui/seo";
import Grid from "@components/ui/grid";
import ProjectCard from "@components/ui/cards/project-card";

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
      <Seo title="Projects" />
      <PageTitle
        title="Projects"
        description={
          <>
            These are some of the projects that I’ve made. Open source projects
            have Github link so feel free to check out the source code if you
            like the live site. View more in the{" "}
            <HighlightedLink to="/archive" label="archived list" />.
          </>
        }
      />
      <Grid grid={1}>
        {projects.map(({ frontmatter, id }) => (
          <ProjectCard key={id} {...frontmatter} />
        ))}
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query GetAllProjectMdx {
    projectsMdx: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { archived: { eq: false } }
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

export default PostsPage;
