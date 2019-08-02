import React from "react"

import { SEO, ThinkAbout, Intro, PastWork, HowiHelp } from "../components"

import About from "../components/About"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <div>
        <About />
      </div>
      <div>
        <Intro />
        <ThinkAbout />
        <PastWork />
        <HowiHelp />
      </div>
    </>
  )
}

export default IndexPage
