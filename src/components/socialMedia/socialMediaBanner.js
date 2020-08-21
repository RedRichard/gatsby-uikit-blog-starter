import React from "react"

export default function socialMediaBanner({
  twitter,
  instagram,
  facebook,
  ratio,
}) {
  return (
    <div className="uk-grid">
      <div>
        {twitter && (
          <a href={`http://www.twitter.com/${twitter}`}>
            <i
              aria-label="Follow Twitter"
              uk-icon={`icon: twitter; ratio:${ratio}`}
            />
          </a>
        )}
      </div>
      <div>
        {instagram && (
          <a href={`http://www.instagram.com/${instagram}`}>
            <i
              aria-label="Follow Instagram"
              uk-icon={`icon: instagram; ratio:${ratio}`}
            />
          </a>
        )}
      </div>
      <div>
        {facebook && (
          <a href={`http://www.facebook.com/${facebook}`}>
            <i
              aria-label="Follow Facebook"
              uk-icon={`icon: facebook; ratio:${ratio}`}
            />
          </a>
        )}
      </div>
    </div>
  )
}
