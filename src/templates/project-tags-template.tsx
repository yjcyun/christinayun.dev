import React from "react";
import { graphql, PageProps } from "gatsby";
import { FiMinus } from "react-icons/fi";

import BackLink from "@components/ui/back-link";
import Layout from "@components/layout/layout";
import PageTitle from "@components/ui/page-title";
import ProjectCardGrid from "@components/page/projects/project-card-grid";
import { GetAllProjectMdxQuery } from "@pages/projects";
import Seo from "@components/ui/seo";

type GetProjectTagsQuery = {
  tag: string;
};

const ProjectTagsTemplate = (
  props: PageProps<GetAllProjectMdxQuery, GetProjectTagsQuery>
) => {
  const {
    data: {
      projectsMdx: { nodes: projects },
    },
  } = props;
  const {
    pageContext: { tag },
  } = props;

  return (
    <Layout>
      <Seo title={`${tag} Projects`} />
      <BackLink to="projects" label="projects" />
      <PageTitle
        title={
          <>
            Tagged <FiMinus /> "{tag}"
          </>
        }
      />
      <ProjectCardGrid projects={projects} />
    </Layout>
  );
};

export const query = graphql`
  query GetTaggedProjectMdx($tag: String) {
    projectsMdx: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { tags: { eq: $tag } }
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

export default ProjectTagsTemplate;
