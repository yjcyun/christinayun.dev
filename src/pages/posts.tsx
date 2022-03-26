import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import List from "../components/posts/list";

import { PostListQuery } from "../../graphql-types";

const Posts = ({ data }: PageProps<PostListQuery>) => {
  return (
    <Layout>
      <p>
        These are components I've created and some snippets I want to keep
        around for future reference.
      </p>
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
        }
        id
      }
    }
  }
`;

export default Posts;
