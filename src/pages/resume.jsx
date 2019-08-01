import React from "react"
import { Layout, SEO, Experience } from "../components"

export default function Resume() {
  return (
    <Layout>
      <SEO title="Luis Fco Rodriguez Resume" />
      <h1>This is the resume</h1>
      <Experience />
    </Layout>
  )
}
