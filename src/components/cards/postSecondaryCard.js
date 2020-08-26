import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const postSecondaryCard = ({ article }) => {
  return (
    <Link
      to={`/${article.node.frontmatter.postCategory}/${article.node.frontmatter.postSlug}`}
      className="uk-link-reset"
    >
      <div
        className="uk-card uk-card-default uk-grid-collapse uk-margin uk-text-small"
        uk-grid="true"
      >
        {/* <div className="uk-width-1-3"> */}
        <div className="uk-width-1-3 uk-card-media-left uk-cover-container img-hover-zoom ">
          {/* <img
            src={article.node.frontmatter.postImage.childImageSharp.fluid}
            uk-cover="true"
            uk-img="true"
          /> */}
          <div uk-cover="true">
            <Img
              fluid={article.node.frontmatter.postImage.childImageSharp.fluid}
              uk-cover="true"
            />
          </div>
        </div>
        {/* </div> */}
        <div className="uk-width-expand">
          <div className="uk-card-body uk-padding-small">
            <h3 className="uk-card-title">
              {article.node.frontmatter.postTitle}
            </h3>
            <p>{article.node.frontmatter.postSubtitle}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default postSecondaryCard
