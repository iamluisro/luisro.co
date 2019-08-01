const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post-contentful.js`)
  const pastWorkPost = path.resolve(`./src/templates/past-work-contentful.js`)
  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              id
              slug
            }
          }
        }
        allContentfulPastWork {
          edges {
            node {
              title
              id
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allContentfulBlogPost.edges
  const pastWorkPosts = result.data.allContentfulPastWork.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.slug,
      component: blogPost,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })

  pastWorkPosts.forEach((pw, index) => {
    const previous =
      index === pastWorkPosts.length - 1 ? null : pastWorkPosts[index + 1].node
    const next = index === 0 ? null : pastWorkPosts[index - 1].node

    createPage({
      path: pw.node.slug,
      component: pastWorkPost,
      context: {
        slug: pw.node.slug,
        previous,
        next,
      },
    })
  })
}
