import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import PostList from "../components/posts/recentPostList"
import AuthorCard from "../components/cards/authorCard"
import Disqus from "../components/comments/disqus"
import Img from "gatsby-image"

export default function Category({ data }) {
  const post = data.post
  const relatedPosts = data.related
  const author = data.author

  return (
    <Layout>
      <SEO title={post.frontmatter.postTitle} />
      <div className="uk-section uk-padding-remove">
        <div class="uk-light uk-cover-container uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle">
          <div uk-cover="true">
            <Img fluid={post.frontmatter.postImage.childImageSharp.fluid} />
          </div>
          <div className="centered main-background-image uk-padding">
            <h1 className="uk-text-normal uk-text-uppercase post-title-banner ">
              {post.frontmatter.postTitle
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")}
            </h1>
            <h2 className="uk-text-lead post-subtitle-banner">
              {post.frontmatter.postSubtitle}
            </h2>
          </div>
        </div>
      </div>
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid-divider uk-grid-medium" uk-grid="true">
            <div className="uk-text-justify uk-width-3-4@m">
              <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
              <h4>{post.frontmatter.postDate}</h4>
              <AuthorCard author={author} />
              <hr className="uk-divider-icon" />
              <Disqus post={post} />
            </div>
            <div className="uk-text-justify uk-width-expand@m">
              <p className="uk-text-lead">Recent</p>
              <PostList posts={relatedPosts.edges} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Post($id: String!, $authorSlug: String!) {
    post: markdownRemark(frontmatter: { postSlug: { eq: $id } }) {
      frontmatter {
        postTitle
        postSlug
        postImage {
          childImageSharp {
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        postDate(formatString: "DD-MM-YYYY")
        postAuthor
        postCategory
        postSubtitle
      }
      html
    }
    author: markdownRemark(frontmatter: { authorSlug: { eq: $authorSlug } }) {
      frontmatter {
        authorName
        authorSlug
        authorTwitter
        authorFacebook
        authorInstagram
        authorImage {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
            postSlug
            postCategory
            postDate(formatString: "DD-MM-YYYY")
            postTitle
            postSubtitle
          }
        }
      }
    }
  }
`
