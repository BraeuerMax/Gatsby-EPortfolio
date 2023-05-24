import { Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'

export default function Project() {
  return (
    <Layout>
      <div>
          <h1>Project Page</h1>
          <p>
            <Link to="/project/sample">1.Sample</Link>
          </p>
      </div>
    </Layout>
  )
}
