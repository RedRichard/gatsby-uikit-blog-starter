import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default function Category({ data }) {
  const post = data.post

  return (
    <Layout>
      <SEO title="article" />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{post.frontmatter.postTitle}</h1>
          <h2>{post.frontmatter.postSubtitle}</h2>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Post($id: String = "cras-eget") {
    post: markdownRemark(frontmatter: { postSlug: { eq: $id } }) {
      frontmatter {
        postTitle
        postSlug
        postImage
        postDate
        postAuthor
        postCategory
        postSubtitle
      }
    }
  }
`
