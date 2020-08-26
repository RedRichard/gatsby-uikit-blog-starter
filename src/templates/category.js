import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
// import ArticlesComponent from "../components/articles"
import Layout from "../components/layout"
import PostList from "../components/posts/postList"
import TitleBanner from "../components/misc/pageTitleBanner"

export default function Category({ data }) {
  const articles = data.articles.edges
  const category = data.category

  return (
    <Layout>
      <SEO title={category.frontmatter.categoryTitle} />
      <TitleBanner
        title={category.frontmatter.categoryTitle
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")}
      />
      <div className="uk-section uk-padding-remove-top">
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
            postImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
