import React from "react"

const pageTitleBanner = props => {
  const title = props.title
  return (
    <div className="uk-section uk-section-default uk-padding">
      <div className="uk-container uk-container-large">
        <div className="page-title-banner">{title}</div>
      </div>
    </div>
  )
}

export default pageTitleBanner
