import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="uk-section uk-section-default uk-padding">
      <div className="uk-container uk-container-large">
        <h1>No encontrado :(</h1>
        <p>Revisa el link que usaste.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
