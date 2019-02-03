import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const TilPage = ({ data }) => (
  <Layout>
    <SEO title="Today I Learned" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Today I Learned</h1>

    {data.allMarkdownRemark.edges.map((post, i) => (
      <div>
        <h2>
          <Link to={post.node.fields.blogpath}>{post.node.frontmatter.title}</Link>
        </h2>
        <p>{post.node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export default TilPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { type: { in: "til" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 180)
          fields {
            blogpath
          }
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`
