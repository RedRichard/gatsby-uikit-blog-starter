import React from "react"

const Footer = () => (
  <div className="uk-section">
    <div className="uk-container">
      <footer>
        © {new Date().getFullYear()}, hecho con amor y {``}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </div>
)

export default Footer
