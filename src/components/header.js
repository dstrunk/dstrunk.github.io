import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent
    ? { className: 'nav__link nav__link--active' }
    : { className: 'nav__link' }
}

const PartialNavLink = props => (
  <Link getProps={isPartiallyActive} {...props}>
    {props.children}
  </Link>
)

const Header = ({ siteTitle }) => (
  <header className="mb-8">
      <h1 className="text-xl mb-4">
        <Link to="/" className="no-underline text-grey-900">{siteTitle}</Link>
      </h1>

      <nav class="nav">
        <Link to="/projects/"
          className="nav__link"
          activeClassName="nav__link--active">Projects</Link>
        <PartialNavLink to="/journal/"
          className="nav__link"
          activeClassName="nav__link--active">Journal</PartialNavLink>
        <PartialNavLink to="/til/"
          className="nav__link"
          activeClassName="nav__link--active">TIL</PartialNavLink>
        <PartialNavLink to="/blog/"
          className="nav__link"
          activeClassName="nav__link--active">Archive</PartialNavLink>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
