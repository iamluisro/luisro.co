import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const ConsoleLog = ({ children }) => {
  console.log(children)
  return false
}

const PostContainer = styled.div`
  margin: 3.5em 0.67em 0em 0.67em;
  padding: 0.67em;
`

const AboutImg = styled.img`
  align-items: center;
  margin-top: 0.67em;
  width: 100%;
`
const PostinLink = styled.p`
  margin: 0em;
  font-size: 2em;
  font-weight: 700;
  color: black;
`

const StyledPost = styled.p`
  margin-top: 0.67em;
  font-size: 1em;
  color: black;
`
const StyledTags = styled.div`
  display: inline;
  float: center;
`

const PastWorkContentfulTemplate = props => {
  const { title, body, heroImage, tags } = props.data.contentfulPastWork
  const { previous, next } = props.pageContext
  return (
    <>
      <PostContainer>
        <PostinLink>{title}</PostinLink>
        <AboutImg src={heroImage.fluid.src} alt={heroImage.description} />

        <StyledPost
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
        <div>
          Topics:
          {tags.map((tag, index) => (
            <StyledTags key={index}> {tag} |</StyledTags>
          ))}
        </div>
        <ConsoleLog>
          {tags.map((tag, index) => (
            <StyledTags key={index}>{tag}</StyledTags>
          ))}
        </ConsoleLog>
        <p>
          {" "}
          {previous && (
            <Link to={previous.slug} rel="prev">
              ← {previous.title}
            </Link>
          )}{" "}
        </p>
        <p>
          {" "}
          {next && (
            <Link to={next.slug} rel="prev">
              {next.title} →
            </Link>
          )}{" "}
        </p>
      </PostContainer>
    </>
  )
}

export default PastWorkContentfulTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulPastWork(slug: { eq: $slug }) {
      title
      slug
      id
      tags
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        fluid {
          src
        }
        description
      }
    }
  }
`
