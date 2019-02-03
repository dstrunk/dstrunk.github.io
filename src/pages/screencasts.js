import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ScreencastsPage = () => (
  <Layout>
    <SEO title="Screencasts" keywords={[`gatsby`, `application`, `react`]} />

    <p>
      Watch this space for more curated videos. For now, check out my{' '}
      <a href="https://www.youtube.com/channel/UCUQni_X9a_Ts62M7NdOKBtg"
        target="_blank"
        rel="noopener noreferrer"
        className="">YouTube channel</a>.
    </p>
  </Layout>
)

export default ScreencastsPage
