import React from "react"
import Avatar from "../images/luis_photo.jpeg"
import styled from "styled-components"
import Social from "../components/Social"

const ConsoleLog = ({ children }) => {
  console.log(children)
  return false
}

const AboutContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  margin: 0 0 0 0;
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
`
const AboutTxt = styled.div`
  text-align: center;
  font-size: 1.25em;
  margin: 0 0 0 0;
  margin: 0.25em 0 0.25em 0;
`
export default function About({
  avatar,
  name,
  address,
  bio,
  profession,
  social,
}) {
  return (
    <div className="About">
      <AboutContainer>
        <AboutAvatar src={Avatar} alt={name} />
        <AboutTxt>
          Currently finding myself. I'm learning to be a fullstack developer. I
          continue helping individuals learn about entrepreneurship through
          experiential programs. Music fan and music builder.
        </AboutTxt>
        <AboutTxt> {profession} </AboutTxt>
        <AboutTxt>{address}</AboutTxt>
        <Social social={social} />
      </AboutContainer>
    </div>
  )
}
