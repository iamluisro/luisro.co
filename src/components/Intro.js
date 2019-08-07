import React from "react"
import styled from "styled-components"

const IntroContainer = styled.div`
  display: grid;
  padding: 1.3em 2.5em 1.3em 2.5em;
  background-color: #684a83;
`
const IntroHead = styled.div`
  color: #ffff;
  font-size: 2em;
  margin: 0 0 0.67em 0;
  text-align: center;
`

const IntroTxt = styled.p`
  margin: 0 0 0 0;
  color: #ffff;
  font-size: 1.5em;
  text-align: justify;
`

export default function Intro() {
  return (
    <div className="Intro">
      <IntroContainer>
        <IntroHead>Thanks for being here!</IntroHead>
        <IntroTxt>
          My goal is to solve a customer's needs and provide the best customer
          experience to ensure company growth, employee satisfaction and
          customer delight.
        </IntroTxt>
      </IntroContainer>
    </div>
  )
}
