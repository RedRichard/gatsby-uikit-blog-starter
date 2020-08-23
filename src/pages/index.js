import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/posts/indexPostList"

import TitleBanner from "../components/misc/titleBanner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <TitleBanner />

    <StaticQuery
      query={graphql`
        query IndexPost {
          recent: allMarkdownRemark(
            filter: { frontmatter: { postTitle: { nin: [null] } } }
            sort: { fields: frontmatter___postDate, order: DESC }
            limit: 2
          ) {
            edges {
              node {
                frontmatter {
                  postTitle
                  postSubtitle
                  postSlug
                  postImage
                  postCategory
                  postDate
                }
              }
            }
          }
          older: allMarkdownRemark(
            filter: { frontmatter: { postTitle: { nin: [null] } } }
            sort: { fields: frontmatter___postDate, order: DESC }
            skip: 2
          ) {
            edges {
              node {
                frontmatter {
                  postTitle
                  postSubtitle
                  postSlug
                  postImage
                  postCategory
                  postDate
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div className="uk-section uk-padding-small">
            <div className="uk-container uk-container-large">
              <PostList
                recentPosts={data.recent.edges}
                olderPosts={data.older.edges}
              />
            </div>
          </div>
        </>
      )}
    />
  </Layout>
)

export default IndexPage
