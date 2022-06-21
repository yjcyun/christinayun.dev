import React from "react";
import Layout from "@components/layout/layout";
import PageTitle from "@components/ui/page-title";
import Seo from "@components/ui/seo";
import { graphql, PageProps } from "gatsby";
import SnippetCardGrid from "@components/page/snippets/snippet-card-grid";

export type GetAllSnippetsMdxQuery = {
  snippetsMdx: {
    nodes: Array<{
      id: string;
      frontmatter: {
        title: string;
        language: string;
        image: {
          childImageSharp: {
            gatsbyImageData: any;
          };
        };
        slug: string;
      };
    }>;
  };
};

const Snippets = ({ data }: PageProps<GetAllSnippetsMdxQuery>) => {
  const {
    snippetsMdx: { nodes: snippets },
  } = data;

  return (
    <Layout>
      <Seo title="Code Snippets" />
      <PageTitle
        title="Snippets"
        description="These are code snippets I've collected and saved."
      />

      <SnippetCardGrid snippets={snippets} />
    </Layout>
  );
};

export const query = graphql`
  query GetAllSnippetsMdx {
    snippetsMdx: allMdx(filter: { fileAbsolutePath: { regex: "/snippets/" } }) {
      nodes {
        frontmatter {
          title
          language
          image {
            childImageSharp {
              gatsbyImageData(width: 50, placeholder: BLURRED)
            }
          }
          slug
        }
        body
        id
      }
    }
  }
`;

export default Snippets;
