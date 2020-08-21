import React from "react"

import Card from "../cards/relatedPostCard"

export default function recentPostList({ posts }) {
  return (
    <div className="uk-grid-divider" uk-grid="true">
      {posts.map((post, i) => {
        return (
          <Card post={post} key={`post_${post.node.frontmatter.postSlug}`} />
        )
      })}
    </div>
  )
}
