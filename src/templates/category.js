import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
// import ArticlesComponent from "../components/articles"
import Layout from "../components/layout"

// export const query = graphql`
//   query Category($url: String!) {
//     articles: allStrapiArticle(filter: { category: { url: { eq: $url } } }) {
//       edges {
//         node {
//           strapiId
//           title
//           category {
//             name
//           }
//           image {
//             publicURL
//           }
//         }
//       }
//     }
//     category: strapiCategory(url: { eq: $url }) {
//       name
//     }
//   }
// `

const Category = () => {
  return (
    <Layout>
      <SEO title="category" />
      <div>Hola</div>
    </Layout>
  )
}

export default Category
