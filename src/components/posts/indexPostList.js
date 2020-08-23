import React from "react"

import MainCard from "../cards/postMainCard"
import SecondaryCard from "../cards/postSecondaryCard"

const indexPostList = props => {
  const recentPosts = props.recentPosts
  const olderPosts = props.olderPosts

  return (
    <>
      <div
        className="uk-grid-match uk-grid-column-medium uk-grid-row-medium uk-child-width-1-2@s uk-child-width-1-2@m uk-text-center"
        uk-grid="true"
      >
        {recentPosts.map((post, i) => {
          return (
            <MainCard
              article={post}
              key={`post_${post.node.frontmatter.postSlug}`}
            />
          )
        })}
      </div>
      <div
        className="uk-grid-match uk-grid-column-medium uk-grid-row-medium uk-child-width-1-2@s uk-child-width-1-2@m uk-text-center"
        uk-grid="true"
      >
        {olderPosts.map((post, i) => {
          return (
            <SecondaryCard
              article={post}
              key={`post_${post.node.frontmatter.postSlug}`}
            />
          )
        })}
      </div>
    </>
  )
}

export default indexPostList
