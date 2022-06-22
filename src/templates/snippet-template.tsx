import React from "react";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { ImageDataLike } from "gatsby-plugin-image";

import Layout from "@components/layout/layout";
import SnippetsLogo from "@components/ui/snippets-logo";
import { device } from "@constants/device";
import { GetSingleSnippetQuery } from "@graphql-types";

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
  font-size: 1.7rem;

  @media ${device.tablet} {
    font-size: 2rem;
  }
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
