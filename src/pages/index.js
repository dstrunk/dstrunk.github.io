import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <p>
      I'm <a href="//twitter.com/dstrunk" target="_blank" rel="noopener noreferrer">@dstrunk</a>, {' '}
      a web developer building the best products I can using PHP, JavaScript,{' '}
      and thoughtful UI. I enjoy building applications in Laravel, Vue, React and Magento.
    </p>

    <p>
      I am currently expanding my knowledge of programming concepts by sharing{' '}
      what I'm working on via weekly{' '}
      <Link to="/journal">journal updates</Link> and ad-hoc{' '}
      <Link to="/til">Today I Learned</Link> posts.
    </p>
  </Layout>
)

export default IndexPage
