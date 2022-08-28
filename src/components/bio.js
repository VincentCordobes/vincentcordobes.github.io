import React, { useState, useEffect } from "react"
import { DateTime } from "luxon"

function myAge() {
  const birthdate = DateTime.fromISO("1993-08-15")
  return DateTime.local().diff(birthdate, "years").toFormat("y")
}

function Bio(props) {
  const [age] = useState(myAge())
  return (
    <>
      <header style={{ marginBottom: "0.6em" }}>
        <h1 style={{ fontSize: "1.9em" }}>🦁 Vincent Cordobes</h1>
      </header>
      <p>
        Hi! I'm a {age} years old software engineer from France. I like
        functional programming and statically typed languages.
      </p>
      <p>
        You can find me on{" "}
        <a href="https://twitter.com/VincentCordobes">twitter</a>,{" "}
        <a href="https://github.com/VincentCordobes">github</a>,{" "}
        <a href="https://www.instagram.com/vincentcordobes/">instagram</a>,{" "}
        <a href="/rss.xml">rss</a>.
      </p>
      <hr />
      {/* <br /> */}
    </>
  )
}

export default Bio
