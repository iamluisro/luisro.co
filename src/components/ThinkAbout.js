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
  margin: 1.25em 2.5em 1.25em 2.5em;
  grid-template-columns: 1fr;
`
const StyledPostDiv = styled.div`
  margin: 0.67em 0 0.67em 0;
  padding: 0em 0 0 0;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`

const StyledDescriptionPostDiv = styled.div`
  padding: 1.25em;
`

const AboutImg = styled.img`
  border-radius: 4px 4px 0 0;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 768px) {
    border-radius: 4px 0 0 4px;
  }
`

const StyledHeaderLink = styled(props => <Link {...props} />)`
  margin: 0 0 0 0;
  text-align: center;
  color: #684a83;
  font-size: 2em;
  text-decoration: none;
`

const StyledDescription = styled.div`
  margin: 1em 0 0 0;
  align-items: center;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.44);
`

const StyledPostLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: #684a83;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 250px 1fr;
    align-items: stretch;
  }
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
  width: 50%;
  font-size: 0.9rem;
  padding: 0.6rem;
  font-weight: 500;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
`

const StyledPublishedDate = styled.p`
  font-size: 0.67em;
  margin: 0.67em 0 0 0;
  color: #684a83;
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
          filter: { node_locale: { in: "en-US" } }
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
      <div>
        <StyledHeaderLink to="/thinkAbout">
          This is what I think about
        </StyledHeaderLink>
      </div>
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
            </StyledDescriptionPostDiv>
          </StyledPostLink>
        </StyledPostDiv>
      ))}
      <Link to="/thinkAbout" style={{ textDecoration: "none" }}>
        <MoreButton>More Thoughts</MoreButton>
      </Link>
    </ThinkContainer>
  )
}

export default ThinkAbout
