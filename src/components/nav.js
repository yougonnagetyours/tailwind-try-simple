import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./nav.css"

const Nav = () => (
  <nav>
      <ul>
          <div>Brand</div>
          <li><Link to="/">Home</Link></li>
          <li><Link to="projects">Projekty</Link></li>
          <li><Link to="/">Kontakt</Link></li>
      </ul>
  </nav>
)

export default Nav
