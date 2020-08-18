exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        articles: allMarkdownRemark(
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

  // Create blog articles pages.
  const articles = result.data.articles.edges
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
        id: category.node.categorySlug,
      },
    })
  })
}
