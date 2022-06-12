import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { FiMinus, FiArrowLeft } from "react-icons/fi";

import Layout from "@components/layout/layout";
import PageTitle from "@components/ui/page-title";
import ProjectCardGrid from "@components/page/projects/project-card-grid";
import { GetAllProjectMdxQuery } from "@pages/projects";
import styled from "styled-components";

const StyledBackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  &:hover {
    text-decoration: underline;
  }
`;

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
      <StyledBackLink to="/projects">
        <FiArrowLeft />
        Back to all projects
      </StyledBackLink>
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
