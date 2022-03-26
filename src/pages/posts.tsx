import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout/layout";
import List from "../components/posts/list";

import { PostListQuery } from "../../graphql-types";
import PageTitle from "../components/page-title";

const Posts = ({ data }: PageProps<PostListQuery>) => {
  return (
    <Layout>
      <PageTitle
        title="Posts"
        description="These are components I've created and some snippets I want to keep
        around for future reference."
      />
      <List {...data} />
    </Layout>
  );
};

export const query = graphql`
  query PostList {
    allMdx {
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

export default Posts;
