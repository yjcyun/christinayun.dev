import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "@components/layout/layout";
import PageTitle from "@components/ui/page-title";
import Seo from "@components/ui/seo";
import Grid from "@components/ui/grid";
import SnippetCard from "@components/ui/cards/snippet-card";

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

      <Grid grid={2}>
        {snippets.map(({ frontmatter, id }) => (
          <SnippetCard {...frontmatter} key={id} />
        ))}
      </Grid>
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
