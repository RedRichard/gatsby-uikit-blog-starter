import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import PostList from "../components/posts/postList"
import NameBanner from "../components/misc/pageTitleBanner"

export default function AuthorPosts({ data }) {
  const articles = data.articles.edges
  const author = data.author

  return (
    <Layout>
      <SEO title="category" />
      <NameBanner
        title={author.frontmatter.authorName
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
    author: markdownRemark(frontmatter: { authorSlug: { eq: $id } }) {
      frontmatter {
        authorName
        authorSlug
      }
    }
  }
`
