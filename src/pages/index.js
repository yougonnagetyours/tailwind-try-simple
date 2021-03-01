import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"

//import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Nav />
    <div className="main"></div>
    <div className="footer"></div>
  </div>
)

export default IndexPage
