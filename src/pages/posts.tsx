import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import { PostListQuery } from "../../graphql-types";

const Posts = ({ data }: PageProps<PostListQuery>) => {
  const {
    allMdx: { nodes: posts },
  } = data;

  return (
    <Layout>
      {posts.map((post) => {
        if (!post.frontmatter) {
          return <div key={post.id}>Oops! something went wrong</div>;
        }

        const { date, title } = post.frontmatter;

        return (
          <article key={post.id}>
            <div>{title}</div>
            <div>{date}</div>
          </article>
        );
      })}
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
