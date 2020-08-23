import React from "react"
import { Link } from "gatsby"

const postMainCard = ({ article }) => {
  return (
    <Link
      to={`/${article.node.frontmatter.postCategory}/${article.node.frontmatter.postSlug}`}
      className="uk-link-reset"
    >
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top uk-cover-container uk-height-medium img-hover-zoom">
          <img
            src={article.node.frontmatter.postImage}
            alt={article.node.frontmatter.postImage}
            uk-cover="true"
          />
        </div>
        <div className="uk-card-body uk-card-small">
          <h3 className="uk-card-title">
            {article.node.frontmatter.postTitle}
          </h3>
          <p>{article.node.frontmatter.postSubtitle}</p>
        </div>
      </div>
    </Link>
    // </div>
  )
}

export default postMainCard
