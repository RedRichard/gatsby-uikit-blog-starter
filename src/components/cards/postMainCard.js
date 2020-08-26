import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const postMainCard = ({ article }) => {
  return (
    <Link
      to={`/${article.node.frontmatter.postCategory}/${article.node.frontmatter.postSlug}`}
      className="uk-link-reset"
    >
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top uk-cover-container uk-height-medium img-hover-zoom">
          <div uk-cover="true">
            <Img
              fluid={article.node.frontmatter.postImage.childImageSharp.fluid}
              uk-cover="true"
            />
          </div>
        </div>
        <div className="uk-card-body uk-card-small">
          <h3 className="uk-card-title">
            {article.node.frontmatter.postTitle}
          </h3>
          <p>{article.node.frontmatter.postSubtitle}</p>
        </div>
      </div>
    </Link>
  )
}

export default postMainCard
