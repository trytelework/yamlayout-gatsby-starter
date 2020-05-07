import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const index = () => (<><Layout><SEO title="Home" /><h1>Hello World</h1><div className="pt-4"><p>Welcome to YAMLayout!</p></div><Link to="/page-2/">Go to page 2</Link></Layout></>);

export default index