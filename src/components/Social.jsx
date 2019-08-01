import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

const ConsoleLog = ({ children }) => {
  console.log(children)
  return false
}
const SociaStyle = styled.div`
	margin: 0 auto;
	display: block:
`

const SocialUl = styled.ul`
  list-style-type: none;
  margin-bottom: 0.67em;
  padding: 0;
`

const SocialLi = styled.li`
  display: inline;
  margin: 0 1em 0 0;
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
`

const Social = props => (
  <SociaStyle>
    <SocialUl>
      {props.social.map((item, index) => (
        <SocialLi key={`Social-${index}`} target="_blank">
          <a href={item.url} target="_blank">
            <ThemeProvider theme={getColor(item.name)}>
              <SocialIcon icon={["fab", item.name]} />
            </ThemeProvider>
          </a>
        </SocialLi>
      ))}
    </SocialUl>
  </SociaStyle>
)

export default Social
