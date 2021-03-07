import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/nav.css"

const Nav = () => (
  <nav className="nav">
      <div className="brand">Brand</div>
      <ul>
          <li className="Li"><Link to="/"><p>Home</p></Link></li>
          <li className="Li"><Link to="projects"><p>Projekty</p></Link></li>
          <li className="Li"><Link to="/"><p>Kontakt</p></Link></li>
      </ul>
  </nav>
)

export default Nav

