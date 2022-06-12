const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      projectTags: allMdx(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        distinct(field: frontmatter___tags)
      }
      posts: allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      blogTags: allMdx(filter: { fileAbsolutePath: { regex: "/dev-blog/" } }) {
        distinct(field: frontmatter___tags)
      }
    }
  `);

  result.data.projectTags.distinct.forEach((tag: string) => {
    createPage({
      path: `/projects/tags/${tag.toLowerCase()}`,
      component: path.resolve(`src/templates/project-tags-template.tsx`),
      context: { tag },
    });
  });

  result.data.posts.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/blog/${slug}`,
      component: path.resolve(`src/templates/post-template.tsx`),
      context: {
        slug,
      },
    });
  });

  result.data.blogTags.distinct.forEach((tag: string) => {
    createPage({
      path: `/blog/tags/${tag.toLowerCase()}`,
      component: path.resolve(`src/templates/blog-tags-template.tsx`),
      context: { tag },
    });
  });
};
