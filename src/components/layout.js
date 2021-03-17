/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container fluid="md">
        <main>{children}</main>
        <Container>
        <footer>
          © {new Date().getFullYear()}, Built by <a href="https://github.com/otaviobarbosa617">Otavio</a> using
          {` `}
          <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>
        </footer>
        </Container>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
