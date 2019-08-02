import React from "react"

import {
  SEO,
  ThinkAbout,
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
