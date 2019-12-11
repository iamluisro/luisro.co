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
  font-size: 3em;
  color: black;
`

const StyledPost = styled.p`
  margin-top: 0.67em;
  font-size: 1.5em;
  color: black;
`
const StyledTagsDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0.67em 0.67em 0.67em 0;
`

const StyledTagsBox = styled.div`
  background: rgba(0, 0, 0, 0.05);
  text-align: center;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.5);
  margin-right: 0.5em;
`

const StyledPrevNextDiv = styled.div`
  display: flex;
`

const StyledPevNext = styled.p`
  margin-right: 0.67em;
`

const BlogPostContentfulTemplate = props => {
  const { title, body, heroImage, tags } = props.data.contentfulBlogPost
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

        <div>
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
        </div>
      </PostContainer>
    </>
  )
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
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
