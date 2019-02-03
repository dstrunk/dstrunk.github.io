import React from 'react'
import { Link, graphql } from 'gatsby'
import moment from 'moment'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Archive" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Archived blog posts</h1>

    <p><strong>First up!</strong> If you're interested in web development, follow along in my {' '}
      <Link to="/journal">Process Journal</Link> week-to-week as I learn new technologies and provide thoughts on my experiences. I'm also maintaining a more general <Link to="/til">Today I Learned</Link>, consisting of ad-hoc, tweet-sized chunks of general development goodies.
    </p>

    <p>I've been blogging since 2012. In that time, I've picked up some new languages (from Ruby to PHP and JavaScript), switched jobs (design to Magento and Laravel development), and switched editors too many times to count (vim to PhpStorm to VSCode to vim to …).</p>

    <p>All that to say, these posts have been around for a long time. And they will continue to stick around. I will always keep these posts on my site for posterity's sake, but I do not see myself maintaining a general web blog for the foreseeable future. I much prefer the idea of a process journal that maintains an overarching scope towards a specific goal. Be it building a new application or learning a new technology, I find that keeping a process journal focused on updates centered around a dedicated goal keep my eyes from wandering towards the new and shiny as a general-use blog might. For that reason, please consider this blog archived.</p>

    {data.allMarkdownRemark.edges.map((post, i) => (
      <div>
        <h2>
          <Link to={post.node.fields.blogpath}>{post.node.frontmatter.title}</Link>
        </h2>
        <datetime>{moment(post.node.fields.jekyllDate).format('MMMM Do, YYYY')}</datetime>
        <p>{post.node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { type: { in: "blog" } } },
      sort: { order: DESC, fields: [fields___jekyllDate] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 180)
          fields {
            blogpath
            jekyllDate
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
