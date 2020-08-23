import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

export default function socialMediaBanner({ twitter, instagram, facebook }) {
  return (
    <div className="uk-grid">
      <div>
        {twitter && (
          <a href={`http://www.twitter.com/${twitter}`}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        )}
      </div>
      <div>
        {instagram && (
          <a href={`http://www.instagram.com/${instagram}`}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        )}
      </div>
      <div>
        {facebook && (
          <a href={`http://www.facebook.com/${facebook}`}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        )}
      </div>
    </div>
  )
}
