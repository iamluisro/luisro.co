import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import moment from "moment"

const ConsoleLog = ({ children }) => {
  console.log(children)
  return false
}

const ThinkContainer = styled.div`
  display: grid;
  margin: 1.25em;
  grid-template-columns: 1fr;
`
const StyledPostDiv = styled.div`
  margin: 0.67em 0 0.67em 0;
  padding: 0em 0 0.67em 0;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  border: 0;
`

const StyledDescriptionPostDiv = styled.div`
  padding: 1.25em;
`

const AboutImg = styled.img`
  border-radius: 4px 4px 0 0;
  align-items: center;
  width: 100%;
`

const StyledHeaderLink = styled(props => <Link {...props} />)`
  margin: 0 0 0 0;
  text-align: center;
  font-size: 2em;
  text-decoration: none;
`
const StyledDescription = styled.p`
  margin: 1em 0 0 0;
  align-items: center;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.44);
`

const StyledPostLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  margin: 0 0 0.67em 0;
`

const PostinLink = styled.p`
  margin: 0 0 0 0;
  font-size: 1.5em;
  font-weight: 700;
  color: black;
`

export const MoreButton = styled.button`
  display: grid;
  cursor: default;
  margin: auto;
  background-color: #684a83;
  color: white;
  width: 43%;
  font-size: 0.9rem;
  padding: 0.6rem;
  font-weight: 500;
  border-radius: 24px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
`

const StyledPublishedDate = styled.p`
  font-size: 0.67em;
  margin: 0.67em 0 0 0;
`

export const ReadPostButton = styled.button`
  cursor: default;
  background-color: #684a83;
  margin: 0.67em 0 0 0;
  color: white;
  width: 33%;
  font-size: 0.9rem;
  padding: 0.6rem;
  border-radius: 24px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
`

const ThinkAbout = props => {
  const posts = useStaticQuery(
    graphql`
      query GET_DATA {
        site {
          siteMetadata {
            title
            author
          }
        }

        allContentfulBlogPost(
          sort: { fields: [publishDate], order: DESC }
          limit: 3
        ) {
          edges {
            node {
              title
              id
              slug
              tags
              publishDate
              heroImage {
                fluid {
                  src
                }
              }
              description {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <ThinkContainer>
      <StyledHeaderLink to="/thinkAbout">
        This is what I think about
      </StyledHeaderLink>
      {posts.allContentfulBlogPost.edges.map(({ node: post }) => (
        <StyledPostDiv key={post.id}>
          <StyledPostLink to={`/${post.slug}`}>
            <AboutImg
              src={post.heroImage.fluid.src}
              alt={post.heroImage.fluid.src}
            />
            <StyledDescriptionPostDiv>
              <PostinLink> {post.title}</PostinLink>
              <StyledDescription
                dangerouslySetInnerHTML={{
                  __html: post.description.childMarkdownRemark.html,
                }}
              />
              <StyledPublishedDate>
                {" "}
                Published: {moment(post.publishDate).format("MMM DD, YYYY")}
              </StyledPublishedDate>
              <ReadPostButton>Read</ReadPostButton>
            </StyledDescriptionPostDiv>
          </StyledPostLink>
        </StyledPostDiv>
      ))}
      <Link to="/thinkAbout" style={{ textDecoration: "none" }}>
        <MoreButton>More Thoughts</MoreButton>
      </Link>
      <ConsoleLog></ConsoleLog>
    </ThinkContainer>
  )
}

export default ThinkAbout
