import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "@components/layout/layout";
import PageTitle from "@components/ui/page-title";
import PostsList from "@components/page/posts/list";
import FeaturedBlogCard from "@components/ui/cards/featured-blog-card";
import Featured from "@components/page/home/featured";
import BlogCard from "@components/ui/cards/blog-card";
import styled from "styled-components";

const StyledLatest = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  margin-top: 3rem;
`;

export type GetDevBlogMdxQuery = {
  blogMdx: {
    nodes: Array<{
      body: string;
      id: string;
      frontmatter: {
        description: string;
        date: string;
        title: string;
        slug: string;
      };
    }>;
  };
};

const Blog = ({ data }: PageProps<GetDevBlogMdxQuery>) => {
  const {
    blogMdx: { nodes: devPosts },
  } = data;

  console.log(devPosts);
  return (
    <Layout>
      <PageTitle
        title="Blog"
        description="This is where I write notes on what I learned and discovered. I thought I would share a piece of my knowledge with the world. Hope you find some of them useful!"
      />
      <StyledLatest>
        {devPosts.map(({ frontmatter, id }) => (
          <BlogCard {...frontmatter} key={id} />
        ))}
      </StyledLatest>
    </Layout>
  );
};

export const query = graphql`
  query GetAllDevBlogMdx {
    blogMdx: allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        body
        frontmatter {
          description
          date(formatString: "MMMM YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;

export default Blog;
