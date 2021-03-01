import React from "react"
import { Link } from "gatsby"

//import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1 className="w-full bg-gray-900 h-screen flex justify-between" >Hi people</h1>
    <p className="font-medium text-gray-600 text-2xl" >Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </div>
)

export default IndexPage
