import React from "react"
import styled from "styled-components"

const StyledH2 = styled.h2`
  margin: 0 0 0 0;
  text-align: center;
  font-size: 2em;
  color: #684a83;
  text-decoration: none;
`

const H2Styled = ({ name }) => <StyledH2>{name}</StyledH2>

export default H2Styled
