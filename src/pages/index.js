import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextList from "../components/posts/postList"

import Banner from "../images/main-banner.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="uk-section uk-section-default uk-padding-remove-top">
      <div className="uk-container uk-container-large uk-padding-remove-left uk-padding-remove-right">
        <img src={Banner} alt="Letras Transformadoras"></img>
      </div>
    </div>
    <StaticQuery
      query={graphql`
        query IndexPost {
          allMarkdownRemark(
            filter: { frontmatter: { postTitle: { nin: [null] } } }
            sort: { fields: frontmatter___postDate, order: DESC }
          ) {
            edges {
              node {
                frontmatter {
                  postTitle
                  postSubtitle
                  postSlug
                  postImage
                  postDate
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div className="uk-section uk-padding-remove-top">
            <div className="uk-container uk-container-large">
              <TextList articles={data.allMarkdownRemark.edges} />
            </div>
          </div>
        </>
      )}
    />
  </Layout>
)

export default IndexPage
