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
  const data = useGetData()
  console.log(data)

  return data.length === 0 ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <SEO title="Home" />
      <Sidebar>
        <About
          avatar={data.avatar}
          name={data.name}
          profession={data.profession}
          bio={data.bio}
          address={data.address}
          social={data.social}
        />
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
