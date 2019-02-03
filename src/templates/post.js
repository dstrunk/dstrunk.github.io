import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Post({ data, pageContext }) {
  const { markdownRemark: post } = data
  const date = moment(post.frontmatter.date).isValid() ?
    moment(post.frontmatter.date).format('MMMM Do, YYYY') :
    ''

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h2>{post.frontmatter.title}</h2>
      <datetime>{date}</datetime>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
