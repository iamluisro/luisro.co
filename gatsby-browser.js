/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const { GlobalStyles } = require("./src/styles")
const Layout = require("./src/components/layout").default

exports.wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </>
)
