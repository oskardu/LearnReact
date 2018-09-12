import React from 'react'
import Link from 'gatsby-link'
import './header.css' /* 引入header.css */

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="headerGroup">
    <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30"/></Link>
    <Link to="/courses">Course</Link>
    <Link to="/downloads">Downloads</Link>
    <Link to="/workshops">Workshops</Link>
    <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)

export default Header





