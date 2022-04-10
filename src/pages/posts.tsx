import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "@components/layout/layout";
import PageTitle from "@components/page-title";

import { PostsPagePostListQuery } from "@graphql-types";
import List from "@components/posts/list";

// markup
const PostsPage = ({ data }: PageProps<PostsPagePostListQuery>) => {
  return (
    <Layout>
      <PageTitle title="Posts" />
      <List {...data} />
    </Layout>
  );
};

export default PostsPage;

export const query = graphql`
  query PostsPagePostList {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;
