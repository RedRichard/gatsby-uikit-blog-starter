import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/posts/postList"
import TitleBanner from "../components/misc/pageTitleBanner"

const allPosts = () => {
  return (
    <Layout>
      <SEO title="Todo" />

      <TitleBanner
        title={"Todas las entradas"
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")}
      />

      <StaticQuery
        query={graphql`
          query AllPosts {
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
                    postImage {
                      childImageSharp {
                        fluid(maxWidth: 300) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
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
                <PostList articles={data.allMarkdownRemark.edges} />
              </div>
            </div>
          </>
        )}
      />
    </Layout>
  )
}

export default allPosts
