import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return(
    <div>
        <Layout>

        <h1>pyHealth</h1>
        <h2>We use python to solve healthcare challenges.</h2>
        <p><Link to="/contact">Contact us</Link> for your projects.</p>

        </Layout>
    </div>
  )
}

export default IndexPage
