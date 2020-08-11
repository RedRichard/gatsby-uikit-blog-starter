import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"

const Header = () => (
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
    <nav
      className="uk-navbar-container uk-margin uk-padding uk-padding-remove-bottom uk-padding-remove-top uk-margin-remove-bottom"
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
              query {
                allStrapiCategory {
                  edges {
                    node {
                      name
                      strapiId
                      url
                    }
                  }
                }
              }
            `}
            render={data =>
              data.allStrapiCategory.edges.map((category, i) => {
                return (
                  <li key={category.node.strapiId}>
                    <Link to={`/${category.node.url}`}>Artículos</Link>
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
