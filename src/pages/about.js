import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import PostList from "../components/posts/recentPostList"
import SocialMedia from "../components/socialMedia/socialMediaBanner"

export default function Category({ data }) {
  const post = data.post
  const relatedPosts = data.related
  const socialMedia = data.socialMedia

  return (
    <Layout>
      <SEO title={post.frontmatter.aboutTitle} />
      <div className="uk-section uk-padding-remove">
        <div className="uk-container uk-container-large uk-padding-remove-horizontal">
          <div
            className="uk-height-medium uk-flex uk-flex-left uk-flex-middle uk-background-cover uk-light"
            data-srcset={post.frontmatter.aboutImage}
            uk-img="true"
          >
            <div className="main-background-image uk-padding">
              <h1 className="uk-text-normal uk-text-uppercase">
                {post.frontmatter.aboutTitle}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid-divider uk-grid-medium" uk-grid="true">
            <div className="uk-text-justify uk-width-3-4@m">
              <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
              <SocialMedia
                twitter={socialMedia.frontmatter.siteTwitter}
                instagram={socialMedia.frontmatter.siteInstagram}
                facebook={socialMedia.frontmatter.siteFacebook}
                ratio="2"
              />
              <hr className="uk-divider-icon" />
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
  query AboutPost {
    post: markdownRemark(frontmatter: { aboutTitle: { ne: null } }) {
      frontmatter {
        aboutImage
        aboutTitle
      }
      html
    }
    socialMedia: markdownRemark(frontmatter: { siteTwitter: { ne: null } }) {
      frontmatter {
        siteFacebook
        siteInstagram
        siteTwitter
      }
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
            postImage
          }
        }
      }
    }
  }
`
