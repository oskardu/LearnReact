import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="headerGroup">
    <link to="/"><img src={require('../images/logo-designcode.svg')} width="30"/></link>
    <link to="/courses">Courses</link>
    <link to="/downloads">Downloads</link>
    <link to="/workshops">Workshops</link>
    <link to="/buy"><button>Buy</button></link>
    </div>
  </div>
)

export default Header
