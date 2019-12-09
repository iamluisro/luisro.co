import React from "react"
import Avatar from "../images/luis_photo.jpeg"
import styled from "styled-components"
import Social from "./Social"

const ConsoleLog = ({ children }) => {
  console.log(children)
  return false
}

const AboutContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  margin: 0em 2.5em 1.33em 2.5em;
  padding-top: 4em;

  ${"" /* width: 100%;
  position: fixed;
  top: 0; */}
`
const AboutAvatar = styled.img`
  width: 150px;
  margin: 0 0 0 0;
  border-radius: 50%;
  padding: 0 0 0 0;
  justify-self: center;
  box-shadow: 0 2.5px 5px #684a8380;
`
const AboutName = styled.p`
  text-align: center;
  font-size: 2em;
`

const AboutShort = styled.p`
  text-align: center;
  font-size: 1em;
`

const AboutTxt = styled.p`
  text-align: center;
  font-size: 1.25em;
  margin: 0 0 0 0;
  margin: 0.25em 0 0.25em 0;
`
export default function About() {
  return (
    <div className="About">
      <AboutContainer>
        <AboutAvatar src={Avatar} alt="Luis Francisco Rodriguez Rodriguez" />
        <AboutName>Luis Fco Rodríguez Rodríguez</AboutName>
        <AboutShort>Product Manager turned developer</AboutShort>

        <AboutTxt>
          Currently finding myself. <br />
          I'm learning to be a fullstack developer. <br />I continue helping
          individuals learn about entrepreneurship through experiential
          programs. <br />
          Music fan and music builder.
        </AboutTxt>
        <AboutTxt>CDMX, México</AboutTxt>
        <Social />
      </AboutContainer>
    </div>
  )
}
