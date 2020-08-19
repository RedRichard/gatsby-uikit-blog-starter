import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
// import ArticlesComponent from "../components/articles"
import Layout from "../components/layout"
import PostList from "../components/posts/postList"

export default function Category({ data }) {
  const articles = data.articles.edges
  const category = data.category

  return (
    <Layout>
      <SEO title="category" />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h2>{category.frontmatter.categoryTitle}</h2>
        </div>
        <div className="uk-container uk-container-large">
          <PostList articles={articles} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Category($id: String!) {
    articles: allMarkdownRemark(
      filter: {
        frontmatter: { postTitle: { nin: [null] }, postCategory: { eq: $id } }
      }
      sort: { fields: frontmatter___postDate, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            postSlug
            postTitle
            postImage
            postDate
            postCategory
            postAuthor
            postSubtitle
          }
        }
      }
    }
    category: markdownRemark(frontmatter: { categorySlug: { eq: $id } }) {
      frontmatter {
        categoryTitle
      }
    }
  }
`
