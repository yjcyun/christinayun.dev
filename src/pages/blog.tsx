import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "@components/layout/layout";
import PageTitle from "@components/ui/page-title";
import PostsGrid from "@components/page/posts/posts-grid";
import Seo from "@components/ui/seo";

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
        tags: string[];
      };
    }>;
  };
};

const Blog = ({ data }: PageProps<GetDevBlogMdxQuery>) => {
  const {
    blogMdx: { nodes: devPosts },
  } = data;

  return (
    <Layout>
      <Seo
        title="Blog about React, JavaScript, and Web Development"
        description="Christina Yujeong Yun writes about frontend development, React and miscellaneous software topics she has learnt and discovered."
      />
      <PageTitle
        title="Blog"
        description="This is where I write notes on what I learned and discovered. I thought I would share a piece of my knowledge with the world. Hope you find some of them useful!"
      />
      <PostsGrid data={devPosts} />
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
          tags
        }
        id
      }
    }
  }
`;

export default Blog;
