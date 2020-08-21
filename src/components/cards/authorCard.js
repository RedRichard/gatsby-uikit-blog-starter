import React from "react"
import { Link } from "gatsby"

import SocialMediaCard from "../socialMedia/socialMediaBanner"

export default function authorCard({ author }) {
  return (
    <div uk-grid="true">
      <div className="uk-width-1-5">
        <img
          className="uk-border-pill"
          src={author.frontmatter.authorImage}
          alt={author.frontmatter.authorImage}
          width="200"
          height="200"
        ></img>
      </div>
      <div className="uk-text-justify uk-width-expand">
        <div>
          <Link
            to={`/author/${author.frontmatter.authorSlug}`}
            className="uk-link-reset"
          >
            <p className="uk-text-emphasis">{author.frontmatter.authorName}</p>
          </Link>
        </div>
        <div
          className="uk-text-small"
          dangerouslySetInnerHTML={{ __html: author.html }}
        ></div>
        <SocialMediaCard
          twitter={author.frontmatter.authorTwitter}
          instagram={author.frontmatter.authorInstagram}
          facebook={author.frontmatter.authorFacebook}
          ratio="1"
        />
        {/* <div className="uk-grid">
          <div>
            <a
              href={`http://www.twitter.com/${author.frontmatter.authorTwitter}`}
            >
              <i aria-label="Follow Twitter" uk-icon="twitter" />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  )
}
