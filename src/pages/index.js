import React from "react"

import {
  SEO,
  ThinkAbout,
  Sidebar,
  About,
  Intro,
  PastWork,
  HowiHelp,
  useGetData,
} from "../components"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Sidebar>
        <About />
      </Sidebar>
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
