import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = () => (
  <nav>
      <ul>
          <Link to="home">Home</Link>
          <Link to="projects">Projekty</Link>
      </ul>
  </nav>
)

export default Nav
