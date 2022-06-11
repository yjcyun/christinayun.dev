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
    }
  `);

  result.data.projectTags.distinct.forEach((tag) => {
    createPage({
      path: `/projects/tags/${tag.toLowerCase()}`,
      component: path.resolve(`src/templates/project-tags-template.tsx`),
      context: { tag },
    });
  });
};
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const result = await graphql(`
//     {
//       allMdx {
//         nodes {
//           frontmatter {
//             slug
//           }
//         }
//       }
//     }
//   `);

//   result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
//     createPage({
//       path: `/posts/${slug}`,
//       component: path.resolve(`src/templates/post-template.tsx`),
//       context: {
//         slug,
//       },
//     });
//   });
// };

// result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
//   createPage({
//     path: `/posts/${slug}`,
//     component: path.resolve(`src/templates/post-template.tsx`),
//     context: {
//       slug,
//     },
//   });
// });
