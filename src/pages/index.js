import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm Hooni</h1>
    <p>Full stack Developer</p>
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
