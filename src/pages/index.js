import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="heroGroup">
        <h1>Hi people</h1>
        <p>Welcome to your brand new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
    
  </div>
)

export default IndexPage
