import React from "react"

const relatedPostCard = ({ post }) => {
  return (
    <div className="uk-text-small">
      {/* <img src={post.node.frontmatter.postImage} width="200" height="200"></img> */}
      <p className="uk-text-emphasis">{post.node.frontmatter.postTitle}</p>
      <p className="uk-text-muted">{post.node.frontmatter.postSubtitle}</p>
      <p className="uk-text-muted">{post.node.frontmatter.postDate}</p>
    </div>
  )
}

export default relatedPostCard
