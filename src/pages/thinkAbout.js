import React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment"
import styled from "styled-components"

const ConsoleLog = ({ children }) => {
  console.log(children)
  return false
}

const ThinkPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 0.67em 0 0.67em;
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

const StyledHeaderThink = styled.p`
  margin: 2.5em 0 0em 0;
  font-weight: 500;
  color: #684a83;
  font-size: 2em;
  text-align: center;
  text-decoration: none;
`

const StyledHeaderLink = styled(props => <Link {...props} />)`
  font-size: 1.5em;
  text-decoration: none;
`

const StyledHeaderPost = styled.p`
  margin: 0 0 0 0;
  font-size: 1.5em;
  font-weight: 700;
  color: black;
`

const StyledPublishedDate = styled.p`
  font-size: 0.67em;
  margin: 0.67em 0 0 0;
`

const AboutImg = styled.img`
  border-radius: 4px 4px 0 0;
  align-items: center;
  width: 100%;
`

const StyledDescription = styled.p`
  margin: 1em 0 0 0;
  align-items: center;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.44);
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
`

const StyledTagsContainer = styled.div`
  text-align: center;
`

const StyledTags = styled.div`
  display: inline;
  float: center;
`

const thinkAbout = props => {
  const {} = props.data.allContentfulBlogPost.edges
  const posts = props.data.allContentfulBlogPost.edges
  const blogTags = props.data.allContentfulBlogPost.distinct

  return (
    <ThinkPageContainer>
      <StyledHeaderThink>This is what I think about</StyledHeaderThink>
      <StyledTagsContainer>
        Topics:
        {blogTags.map((tag, index) => (
          <StyledTags key={index}> {tag} | </StyledTags>
        ))}
      </StyledTagsContainer>
      {posts.map(({ node: post }) => (
        <StyledPostDiv key={post.id}>
          <Link to={`/${post.slug}`} style={{ textDecoration: "none" }}>
            <AboutImg
              src={post.heroImage.fluid.src}
              alt={post.heroImage.description}
            />
            <StyledDescriptionPostDiv>
              <StyledHeaderPost>{post.title}</StyledHeaderPost>
              <StyledDescription
                dangerouslySetInnerHTML={{
                  __html: post.description.childMarkdownRemark.html,
                }}
              />
              <StyledPublishedDate>
                Published: {moment(post.publishDate).format("MMM DD, YYYY")}
              </StyledPublishedDate>
              <ReadPostButton>Read More</ReadPostButton>
            </StyledDescriptionPostDiv>
          </Link>
        </StyledPostDiv>
      ))}

      <ConsoleLog>
        {blogTags.map((tag, index) => (
          <div key={index}>{tag}</div>
        ))}
      </ConsoleLog>
    </ThinkPageContainer>
  )
}

export default thinkAbout

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }

    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      distinct(field: tags)
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
