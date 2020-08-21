import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"

const Header = () => (
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
    <nav
      className="uk-navbar-container uk-padding uk-padding-remove-vertical uk-margin-remove"
      uk-navbar="true"
    >
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav uk-logo">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <ul className="uk-navbar-nav">
          <StaticQuery
            query={graphql`
              query BlogCategories {
                allMarkdownRemark(
                  filter: { frontmatter: { categoryTitle: { nin: [null] } } }
                  sort: { fields: frontmatter___categoryTitle, order: ASC }
                ) {
                  edges {
                    node {
                      frontmatter {
                        categoryTitle
                        categorySlug
                      }
                    }
                  }
                }
              }
            `}
            render={data =>
              data.allMarkdownRemark.edges.map((category, i) => {
                return (
                  <li key={category.node.frontmatter.categorySlug}>
                    <Link to={`/${category.node.frontmatter.categorySlug}`}>
                      {category.node.frontmatter.categoryTitle}
                    </Link>
                  </li>
                )
              })
            }
          />
        </ul>
      </div>
    </nav>
  </div>
)

export default Header
