import React from "react"
import Forms from "./Forms"
import styled from "styled-components"

const StyledDiv = styled.div`
  margin: 0.67em 0 0em 0;
`

const StyledHeader = styled.p`
  font-size: 2em;
  text-align: center;
  margin: 0 0 0.3em 0;
`

export default function HowiHelp() {
  return (
    <StyledDiv>
      <StyledHeader>How Can I help? </StyledHeader>
      <Forms />
    </StyledDiv>
  )
}
