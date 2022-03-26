import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const Posts = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data;

  return (
    <Layout>
      {posts.map((post) => {
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
  query MDXQuery {
    allMdx {
      nodes {
        frontmatter {
          date
          title
        }
        id
      }
    }
  }
`;

export default Posts;
