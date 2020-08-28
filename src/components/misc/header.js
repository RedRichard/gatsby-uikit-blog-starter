import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import SocialMediaCard from "../socialMedia/socialMediaBanner"

class Header extends React.Component {
  render() {
    const categories = this.props.categories
    const socialMedia = this.props.socialMedia
    const metadata = this.props.metadata
    const aboutPage = this.props.aboutPage

    return (
      <>
        {/* Navbar in small screens */}
        <div className="uk-hidden@m">
          <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
            <nav
              className="uk-navbar-container uk-padding uk-padding-remove-vertical"
              uk-navbar="true"
            >
              <div className="uk-navbar-left">
                <ul className="uk-navbar-nav uk-logo">
                  <li className="uk-navbar-toggle">
                    <Link to="/">{metadata.siteMetadata.shortTitle}</Link>
                  </li>
                </ul>
              </div>

              <div className="uk-navbar-right">
                <ul className="uk-navbar-nav ">
                  <li>
                    <i
                      type="button"
                      className="uk-padding "
                      uk-toggle="target: #sidenav"
                    >
                      <FontAwesomeIcon icon={faBars} />
                    </i>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        {/* Navbar in big screens */}
        <div className="uk-visible@m">
          <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
            <nav
              className="uk-navbar-container uk-padding uk-padding-remove-vertical uk-margin-remove"
              uk-navbar="true"
            >
              <div className="uk-navbar-left">
                <ul className="uk-navbar-nav uk-logo">
                  <li className="uk-navbar-toggle">
                    <Link to="/">{metadata.siteMetadata.shortTitle}</Link>
                  </li>
                </ul>

                <ul className="uk-navbar-nav">
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
              <div className="uk-navbar-right">
                <ul className="uk-navbar-nav ">
                  <li>
                    <Link to="/about">{aboutPage.frontmatter.aboutTitle}</Link>
                  </li>
                </ul>
                <div className="uk-navbar-item">
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
          </div>
        </div>

        <div id="sidenav" uk-offcanvas="overlay: true;">
          <div className="uk-offcanvas-bar uk-flex uk-flex-column ">
            <ul className="uk-nav">
              {categories.edges.map((category, i) => {
                return (
                  <li key={category.node.frontmatter.categorySlug}>
                    <a href={`/${category.node.frontmatter.categorySlug}`}>
                      {category.node.frontmatter.categoryTitle}
                    </a>
                  </li>
                )
              })}
              <li>
                <a href="/about">About</a>
              </li>
              <SocialMediaCard
                twitter={socialMedia.frontmatter.siteTwitter}
                instagram={socialMedia.frontmatter.siteInstagram}
                facebook={socialMedia.frontmatter.siteFacebook}
              />
            </ul>
          </div>
        </div>
      </>
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
        metadata: site {
          siteMetadata {
            title
            shortTitle
          }
        }
        aboutPage: markdownRemark(frontmatter: { aboutTitle: { ne: null } }) {
          frontmatter {
            aboutTitle
          }
        }
      }
    `}
    render={data => (
      <Header
        categories={data.categories}
        socialMedia={data.socialMedia}
        metadata={data.metadata}
        aboutPage={data.aboutPage}
      />
    )}
  />
)
