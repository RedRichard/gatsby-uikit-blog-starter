exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        posts: allMarkdownRemark(
          filter: { frontmatter: { postTitle: { nin: [null] } } }
          sort: { fields: frontmatter___postDate, order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                postSlug
              }
            }
          }
        }
        categories: allMarkdownRemark(
          filter: { frontmatter: { categoryTitle: { nin: [null] } } }
          sort: { fields: frontmatter___categoryTitle, order: ASC }
        ) {
          edges {
            node {
              frontmatter {
                categorySlug
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Variables for new pages:
  const posts = result.data.posts.edges
  const categories = result.data.categories.edges

  // articles.forEach((article, index) => {
  //   createPage({
  //     path: `/article/${article.node.strapiId}`,
  //     component: require.resolve("./src/templates/article.js"),
  //     context: {
  //       id: article.node.strapiId,
  //     },
  //   })
  // })

  categories.forEach((category, index) => {
    createPage({
      path: `/${category.node.frontmatter.categorySlug}`,
      component: require.resolve("./src/templates/category.js"),
      context: {
        id: category.node.frontmatter.categorySlug,
      },
    })
  })

  posts.forEach((post, index) => {
    createPage({
      path: `/${post.node.frontmatter.postCategory}/${post.node.frontmatter.postSlug}`,
      component: require.resolve("./src/templates/post.js"),
      context: {
        id: post.node.frontmatter.postSlug,
      },
    })
  })
}
