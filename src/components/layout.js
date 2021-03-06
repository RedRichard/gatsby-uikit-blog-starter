import React from "react"
import PropTypes from "prop-types"

import Header from "./misc/header"
import Footer from "./misc/footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
