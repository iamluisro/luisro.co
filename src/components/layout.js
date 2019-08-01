/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import styled from "styled-components"

const Footer = styled.div`
  padding: 0.67em;
  background-color: #684a83;
  text-align: center;
  color: #ffff;
`

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer>
      iamluisro.co © {new Date().getFullYear()},{" "}
      <span role="img" aria-label="emoji">
        Built with ❤️ in CDMX
      </span>
    </Footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
