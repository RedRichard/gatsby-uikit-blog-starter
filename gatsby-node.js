exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
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
  const categories = result.data.categories.edges

  categories.forEach((category, index) => {
    createPage({
      path: `/category/${category.node.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase()}`,
      component: require.resolve("./src/templates/category.js"),
      context: {
        id: category.node.strapiId,
      },
    })
  })
}
