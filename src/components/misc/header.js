import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"

import SocialMediaCard from "../socialMedia/socialMediaBanner"

class Header extends React.Component {
  render() {
    const categories = this.props.categories
    const socialMedia = this.props.socialMedia

    return (
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
        <nav
          className="uk-navbar-container uk-padding uk-padding-remove-vertical uk-margin-remove"
          uk-navbar="true"
        >
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav uk-logo">
              <li className="uk-navbar-toggle">
                <span
                  className="uk-margin-small-right uk-hidden@m"
                  uk-navbar-toggle-icon="true"
                  uk-toggle="target: #sidenav"
                ></span>
                <Link to="/">Letras T</Link>
              </li>
            </ul>

            <ul className="uk-navbar-nav uk-visible@m">
              {categories.edges.map((category, i) => {
                return (
                  <li key={category.node.frontmatter.categorySlug}>
                    <Link to={`/${category.node.frontmatter.categorySlug}`}>
                      {category.node.frontmatter.categoryTitle}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="uk-navbar-right uk-visible@m">
            <ul className="uk-navbar-nav ">
              <li>
                <Link to="/about">Acerca de</Link>
              </li>
            </ul>
            <div class="uk-navbar-item">
              <div>
                <SocialMediaCard
                  twitter={socialMedia.frontmatter.siteTwitter}
                  instagram={socialMedia.frontmatter.siteInstagram}
                  facebook={socialMedia.frontmatter.siteFacebook}
                  ratio="1"
                />
              </div>
            </div>
          </div>
        </nav>

        <div id="sidenav" uk-offcanvas="flip: true" class="uk-offcanvas">
          <div class="uk-offcanvas-bar">
            <ul class="uk-nav">
              {categories.edges.map((category, i) => {
                return (
                  <li key={category.node.frontmatter.categorySlug}>
                    <Link to={`/${category.node.frontmatter.categorySlug}`}>
                      {category.node.frontmatter.categoryTitle}
                    </Link>
                  </li>
                )
              })}
              <li>
                <Link to="/about">Acerca de</Link>
              </li>
              <SocialMediaCard
                twitter={socialMedia.frontmatter.siteTwitter}
                instagram={socialMedia.frontmatter.siteInstagram}
                facebook={socialMedia.frontmatter.siteFacebook}
                ratio="1"
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query Header {
        categories: allMarkdownRemark(
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
        socialMedia: markdownRemark(
          frontmatter: { siteTwitter: { ne: null } }
        ) {
          frontmatter {
            siteFacebook
            siteInstagram
            siteTwitter
          }
        }
      }
    `}
    render={data => (
      <Header categories={data.categories} socialMedia={data.socialMedia} />
    )}
  />
)
