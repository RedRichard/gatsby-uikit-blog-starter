import React from "react"
import ReactDisqusComments from "react-disqus-comments"

export default function disqus({ post }) {
  return (
    <ReactDisqusComments
      shortname="letras-transformadoras"
      identifier={post.frontmatter.postSlug}
      title={post.frontmatter.postTitle}
      url={post.frontmatter.postSlug}
      category_id={post.postCategory}
    />
  )
}
