import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import PostList from "../components/posts/recentPostList"
import SocialMedia from "../components/socialMedia/socialMediaBanner"

import Img from "gatsby-image"

export default function Category({ data }) {
  const post = data.post
  const relatedPosts = data.related
  const socialMedia = data.socialMedia

  return (
    <Layout>
      <SEO title={post.frontmatter.aboutTitle} />
      <div className="uk-section uk-padding-remove">
        <div class="uk-light uk-cover-container uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle">
          <div uk-cover="true">
            <Img fluid={post.frontmatter.aboutImage.childImageSharp.fluid} />
          </div>
          <div className="centered main-background-image uk-padding">
            <h1 className="uk-text-normal uk-text-uppercase post-title-banner ">
              {post.frontmatter.aboutTitle
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")}
            </h1>
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
        aboutImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
          }
        }
      }
    }
  }
`
