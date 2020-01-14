/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          copyrightDate
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          <p>Copyright © Morel Stackhouse {data.site.siteMetadata.copyrightDate} onwards.</p>
          <p>Ortho-Bionomy® is a registered trademark of the Society of Ortho-Bionomy International, Inc. and is used with permission.</p>
          <p>Society of Ortho-Bionomy International® is a registered trademark that indicates membership in the Society, and it is used with permission.</p>
          <p>This site is maintained ♥ <Link to="https://hire.amygroshek.com">with love</Link>.</p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
