import React from "react";
import { graphql, PageProps } from "gatsby";
import { FiMinus } from "react-icons/fi";

import Layout from "@components/layout/layout";
import PageTitle from "@components/ui/page-title";
import ProjectCardGrid from "@components/page/projects/project-card-grid";
import { GetAllProjectMdxQuery } from "@pages/projects";

type GetProjectTagsQuery = {
  tag: string;
};

const ProjectTagsTemplate = (
  props: PageProps<GetAllProjectMdxQuery, GetProjectTagsQuery>
) => {
  const {
    data: {
      allMdx: { nodes: projects },
    },
  } = props;
  const {
    pageContext: { tag },
  } = props;

  return (
    <Layout>
      <PageTitle
        title={
          <>
            Tagged <FiMinus /> {tag}
          </>
        }
      />
      <ProjectCardGrid projects={projects} />
    </Layout>
  );
};

export const query = graphql`
  query GetTaggedProjectMdx($tag: String) {
    allMdx(
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
