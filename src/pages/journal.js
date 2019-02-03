import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const JournalPage = ({ data }) => (
  <Layout>
    <SEO title="Journal" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Process Journal</h1>

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

export default JournalPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { type: { in: "journal" } } }
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
