import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

const ConsoleLog = ({ children }) => {
  console.log(children)
  return false
}
const SociaStyle = styled.div`
	margin-top: 0.67em;
  text-align: center;
	display: block:
`

const SocialUl = styled.ul`
  list-style-type: none;
  margin-bottom: 0.67em;
  padding: 0;
`

const SocialLi = styled.li`
  display: inline;
  margin: 0 2.5em 0 0;
`

const SocialAnchor = styled.a`
  color: #212121;
  text-decoration: none;
  font-size: 1.2em;
`
const facebook = {
  color: "#3b5998",
}

const twitter = {
  color: "#38A1F3",
}

const linkedin = {
  color: "#0e76a8",
}

const github = {
  color: "#333",
}

const getColor = name => {
  if (name === "facebook") return facebook
  if (name === "twitter") return twitter
  if (name === "linkedin") return linkedin
  if (name === "github") return github
}

const SocialIcon = styled(props => <FontAwesomeIcon {...props} />)`
  color: ${props => props.theme.color};
  font-size: 2em;
`

const Social = () => (
  <SociaStyle>
    <SocialUl>
      <SocialLi target="_blank">
        <a href="https://www.github.com/iamluisro" target="_blank">
          <ThemeProvider theme={getColor("github")}>
            <SocialIcon icon={["fab", "github"]} />
          </ThemeProvider>
        </a>
      </SocialLi>
      <SocialLi target="_blank">
        <a href="https://www.linkedin.com/in/iamluisro" target="_blank">
          <ThemeProvider theme={getColor("linkedin")}>
            <SocialIcon icon={["fab", "linkedin"]} />
          </ThemeProvider>
        </a>
      </SocialLi>
      <SocialLi target="_blank">
        <a href="https://www.twitter.com/luis_rodriguez" target="_blank">
          <ThemeProvider theme={getColor("twitter")}>
            <SocialIcon icon={["fab", "twitter"]} />
          </ThemeProvider>
        </a>
      </SocialLi>
    </SocialUl>
  </SociaStyle>
)

export default Social
