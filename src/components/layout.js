import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../less/style.less'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        
      <section className="mb-8 body w-full md:w-2/3 lg:w-1/2">
          {children}
        </section>

        <footer className="text-sm">
          <strong>© Daniel Strunk {new Date().getFullYear()}</strong>.{' '}
          Built using <a className="text-grey-600 no-underline" href="//www.gatsbyjs.org">Gatsby</a>{' '}
          and <a className="text-grey-600 no-underline" href="//tailwindcss.com/docs/what-is-tailwind/">Tailwind CSS</a>,{' '}
          and hosted on <a className="text-grey-600 no-underline" href="//pages.github.com/">GitHub Pages</a>.
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
