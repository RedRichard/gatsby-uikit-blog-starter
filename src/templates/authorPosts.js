import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
// import ArticlesComponent from "../components/articles"
import Layout from "../components/layout"
import PostList from "../components/posts/postList"

export default function AuthorPosts({ data }) {
  const articles = data.articles.edges
  const author = data.author

  return (
    <Layout>
      <SEO title="category" />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h2>{author.frontmatter.authorName}</h2>
        </div>
        <div className="uk-container uk-container-large">
          <PostList articles={articles} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AuthorPosts($id: String!) {
    articles: allMarkdownRemark(
      filter: {
        frontmatter: { postTitle: { nin: [null] }, postAuthor: { eq: $id } }
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
    author: markdownRemark(frontmatter: { authorSlug: { eq: $id } }) {
      frontmatter {
        authorName
        authorSlug
      }
    }
  }
`
