import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/nav.css"

const Nav = () => (
  <nav>
      <ul>
          <div>Brand</div>
          <li><Link to="/"><p>Home</p></Link></li>
          <li><Link to="projects"><p>Projekty</p></Link></li>
          <li><Link to="/"><p>Kontakt</p></Link></li>
      </ul>
  </nav>
)

export default Nav

