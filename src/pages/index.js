import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextList from "../components/texts/textList"

import Banner from "../images/main-banner.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery
      query={graphql`
        query {
          allStrapiArticle(filter: { category: { text: { eq: 1 } } }) {
            edges {
              node {
                title
                subtitle
                strapiId
                image {
                  publicURL
                }
                url
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div className="uk-section uk-section-default uk-padding-remove-top">
            <div className="uk-container uk-container-large uk-padding-remove-left uk-padding-remove-right">
              <img src={Banner} alt="Letras Transformadoras"></img>
            </div>
          </div>
          <div className="uk-section uk-padding-remove-top">
            <div className="uk-container uk-container-large">
              <TextList articles={data.allStrapiArticle.edges} />
            </div>
          </div>
        </>
      )}
    />
  </Layout>
)

export default IndexPage
