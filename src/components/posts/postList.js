import React from "react"

import Card from "../cards/postSecondaryCard"

const postList = ({ articles }) => {
  return (
    <div
      className="uk-grid-match uk-grid-column-medium uk-grid-row-medium uk-child-width-1-2@s uk-child-width-1-2@m uk-text-center"
      uk-grid="true"
    >
      {articles.map((article, i) => {
        return (
          <Card
            article={article}
            key={`article_${article.node.frontmatter.postSlug}`}
          />
        )
      })}
    </div>
  )
}

export default postList
