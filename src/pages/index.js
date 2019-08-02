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
  const fbdata = useGetData()
  console.log(fbdata)

  return fbdata.length === 0 ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <SEO title="Home" />
      <Sidebar>
        <About
          avatar={fbdata.avatar}
          name={fbdata.name}
          profession={fbdata.profession}
          bio={fbdata.bio}
          address={fbdata.address}
          social={fbdata.social}
        />
      </Sidebar>

      <div>
        <Intro />
        <ThinkAbout />
        <PastWork />
        <HowiHelp />
        <form method="post" action="#" data-netlify="true" name="contact">
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="your name"
            required
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="your email"
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="your message"
            rows="4"
            required
          />
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </>
  )
}

export default IndexPage
