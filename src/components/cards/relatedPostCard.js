import React from "react"
import { Link } from "gatsby"

const relatedPostCard = ({ post }) => {
  return (
    <div className="uk-text-small">
      {/* <img src={post.node.frontmatter.postImage} width="200" height="200"></img> */}
      <Link
        to={`/${post.node.frontmatter.postCategory}/${post.node.frontmatter.postSlug}`}
        className="uk-link-reset"
      >
        <p className="uk-text-emphasis">{post.node.frontmatter.postTitle}</p>
      </Link>
      <p className="uk-text-muted">{post.node.frontmatter.postSubtitle}</p>
      <p className="uk-text-muted">{post.node.frontmatter.postDate}</p>
    </div>
  )
}

export default relatedPostCard
