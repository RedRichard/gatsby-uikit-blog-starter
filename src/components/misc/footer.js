import { StaticQuery, graphql } from "gatsby"
import React from "react"

import SocialMediaCard from "../socialMedia/socialMediaBanner"

class Footer extends React.Component {
  render() {
    const socialMedia = this.props.socialMedia

    return (
      <div className="uk-section">
        <div className="uk-container">
          <footer>
            <div className="uk-grid uk-padding uk-padding-remove-vertical">
              Nuestras redes sociales:{" "}
              <SocialMediaCard
                twitter={socialMedia.frontmatter.siteTwitter}
                instagram={socialMedia.frontmatter.siteInstagram}
                facebook={socialMedia.frontmatter.siteFacebook}
                ratio="1"
              />
            </div>
            <div>
              © {new Date().getFullYear()}, todos los derechos reservados.
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query Footer {
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
    render={data => <Footer socialMedia={data.socialMedia} />}
  />
)
