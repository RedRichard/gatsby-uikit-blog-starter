import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import PostList from "../components/posts/recentPostList"

export default function Category({ data }) {
  const post = data.post
  const relatedPosts = data.related

  return (
    <Layout>
      <SEO title={post.frontmatter.postTitle} />
      <div className="uk-section uk-padding-remove">
        <div className="uk-container uk-container-large uk-padding-remove-horizontal">
          <div
            className="uk-height-medium uk-flex uk-flex-left uk-flex-middle uk-background-cover uk-light"
            data-srcset={post.frontmatter.postImage}
            uk-img="true"
          >
            <div className="main-background-image uk-padding">
              <h1 className="uk-text-normal uk-text-uppercase">
                {post.frontmatter.postTitle}
              </h1>
              <h2 className="uk-text-lead">{post.frontmatter.postSubtitle}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid-divider uk-grid-medium" uk-grid="true">
            <div className="uk-text-justify uk-width-3-4@m">
              <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
              <h4>{post.frontmatter.postDate}</h4>
            </div>
            <div className="uk-text-justify uk-width-expand@m">
              <p className="uk-text-lead">Publicaciones recientes</p>
              <PostList posts={relatedPosts.edges} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Post($id: String!) {
    post: markdownRemark(frontmatter: { postSlug: { eq: $id } }) {
      frontmatter {
        postTitle
        postSlug
        postImage
        postDate(formatString: "DD-MM-YYYY")
        postAuthor
        postCategory
        postSubtitle
      }
      html
    }
    related: allMarkdownRemark(
      limit: 3
      sort: { fields: frontmatter___postDate, order: DESC }
      filter: { frontmatter: { postTitle: { nin: [null] } } }
    ) {
      edges {
        node {
          frontmatter {
            postAuthor
            postCategory
            postDate(formatString: "DD-MM-YYYY")
            postTitle
            postSubtitle
            postImage
          }
        }
      }
    }
  }
`
