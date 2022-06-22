import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "@components/layout/layout";
import Table from "@components/archive/table";
import PageTitle from "@components/ui/page-title";
import Seo from "@components/ui/seo";

export type GetArchivedProjectsMdxQuery = {
  projectsMdx: {
    nodes: Array<{
      id: string;
      frontmatter: {
        liveLink: string;
        sourceLink?: string | null;
        tags?: Array<string> | null;
        title: string;
        date: string;
      };
    }>;
  };
};

const Archive = ({ data }: PageProps<GetArchivedProjectsMdxQuery>) => {
  const {
    projectsMdx: { nodes: projects },
  } = data;

  return (
    <Layout>
      <Seo title="Archived Projects" />
      <PageTitle title="Archived Projects" />
      <Table data={projects} />
    </Layout>
  );
};

export const query = graphql`
  query GetArchivedProjectsMdx {
    projectsMdx: allMdx(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          liveLink
          sourceLink
          tags
          title
          date(formatString: "MMM YYYY")
        }
        id
      }
    }
  }
`;

export default Archive;
