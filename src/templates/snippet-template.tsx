import React from "react";
import styled from "styled-components";
import { graphql, navigate, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "@components/layout/layout";
import Button from "@components/ui/button";
import { GetSingleSnippetQuery } from "@graphql-types";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import SnippetsLogo from "@components/ui/snippets-logo";
import useTheme from "@hooks/useTheme";

const StyledPostTemplate = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`;

const StyledArticle = styled.article`
  max-width: var(--md-width);
  width: 100%;
`;

const StyleadHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const StyledH1 = styled.h1`
  font-size: 2.5rem;
`;

const SnippetTemplate = ({ data }: PageProps<GetSingleSnippetQuery>) => {
  if (!data.mdx || !data.mdx.frontmatter) {
    return <div>Oops! Something went wrong.</div>;
  }

  const {
    mdx: {
      frontmatter: { title, image, language },
      body,
    },
  } = data;

  return (
    <Layout>
      <StyledPostTemplate>
        <StyledArticle>
          <StyleadHeading>
            <StyledH1>{title}</StyledH1>
            <SnippetsLogo image={image as ImageDataLike} alt={language!} />
          </StyleadHeading>
          <MDXRenderer>{body}</MDXRenderer>
        </StyledArticle>
      </StyledPostTemplate>
    </Layout>
  );
};

export const query = graphql`
  query GetSingleSnippet($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        language
        image {
          childImageSharp {
            gatsbyImageData(width: 40, placeholder: BLURRED)
          }
        }
        slug
      }
    }
  }
`;

export default SnippetTemplate;
