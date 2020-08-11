import React from "react"
import { graphql } from "gatsby"

import ArticlesComponent from "../components/articles"
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
  return <div></div>
}

export default Category
