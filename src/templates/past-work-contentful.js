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

  @media only screen and (min-width: 768px) {
    padding: 2em 8em;
  }
`

const AboutImg = styled.img`
  align-items: center;
  margin-top: 0.67em;
  width: 100%;
`
const PostinLink = styled.p`
  margin: 0em;
  font-size: 3em;
  color: black;

  @media only screen and (min-width: 768px) {
    margin: 0.67em 2em 0 2em;
    padding: 0em;
  }
`

const StyledPost = styled.p`
  margin-top: 0.67em;
  font-size: 1.5em;
  color: black;

  @media only screen and (min-width: 768px) {
    margin: 0.67em 4em 0 4em;
    padding: 0em;
  }
`
const StyledTagsDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0.67em 0.67em 0.67em 0;

  @media only screen and (min-width: 768px) {
    margin: 0.67em 6em 0 6em;
  }
`

const StyledTagsBox = styled.div`
  background: rgba(0, 0, 0, 0.05);
  text-align: center;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.5);
  margin-right: 0.5em;
`
const StyledReadMoreDiv = styled.div`
  @media only screen and (min-width: 768px) {
    margin: 0.67em 6em 0 6em;
  }
`

const StyledPrevNextDiv = styled.div`
  display: flex;
`

const StyledPevNext = styled.p`
  margin-right: 0.67em;
`

const PastWorkContentfulTemplate = props => {
  const { title, body, heroImage, tags } = props.data.contentfulPastWork
  const { previous, next } = props.pageContext
  return (
    <>
      <PostContainer>
        <AboutImg src={heroImage.fluid.src} alt={heroImage.description} />
        <PostinLink>{title}</PostinLink>

        <StyledPost
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
        <StyledTagsDiv>
          Tags:&nbsp;
          {tags.map((tag, index) => (
            <StyledTagsBox key={index}> {tag} </StyledTagsBox>
          ))}
        </StyledTagsDiv>

        <StyledReadMoreDiv>
          Read More:
          <StyledPrevNextDiv>
            <StyledPevNext>
              {" "}
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}{" "}
            </StyledPevNext>
            <StyledPevNext>
              {" "}
              {next && (
                <Link to={next.slug} rel="prev">
                  {next.title} →
                </Link>
              )}{" "}
            </StyledPevNext>
          </StyledPrevNextDiv>
        </StyledReadMoreDiv>
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
