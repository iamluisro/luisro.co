import React, { Fragment } from "react"
import {
  SEO,
  About,
  Sidebar,
  Info,
  Intro,
  ThinkAbout,
  PastWork,
  HowiHelp,
} from "../components"

const IndexPage = () => {
  return (
    <div className="main-container">
      <SEO title="Home" />
      <Sidebar>
        <About />
        <Intro />
      </Sidebar>
      <Info>
        <ThinkAbout />
        <PastWork />
        <HowiHelp />
      </Info>
    </div>
  )
}

export default IndexPage
