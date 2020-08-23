import React from "react"
import { Link } from "gatsby"

const postSecondaryCard = ({ article }) => {
  return (
    <Link
      to={`/${article.node.frontmatter.postCategory}/${article.node.frontmatter.postSlug}`}
      className="uk-link-reset"
    >
      <div
        className="uk-card uk-card-default uk-grid-collapse uk-margin"
        uk-grid="true"
      >
        <div className="uk-width-1-3">
          <div className="uk-card-media-left uk-cover-container">
            <img
              src={article.node.frontmatter.postImage}
              alt={article.node.frontmatter.postImage}
              uk-cover="true"
            />
            <canvas width="600" height="600"></canvas>
          </div>
        </div>
        <div className="uk-width-expand">
          <div className="uk-card-body">
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
