import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderStyled = styled.div`
  margin: 0;
  max-width: 960;
  padding: 0.5em 0.5em 0.5em 0.5em;
  background: #684a83;
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.5);
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`

const HeaderLogo = styled.p`
  color: white;
  font-size: 2em;
  text-decoration: none;
  margin: 0 0 0 0;
`

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <Link to="/" style={{ textDecoration: "none" }}>
      {" "}
      <HeaderLogo>iamluisro.co </HeaderLogo>
    </Link>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
