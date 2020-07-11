import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import posed, { PoseGroup } from "react-pose"
import { reverse, range } from "lodash/fp"
import Layout from "../components/layout"

// specify for each step buildIn et buildOut
// it might be enough to trick to animation
// We could then manage to get real transformation for elements
// that persists between steps
const steps = [
  `
      E---F---G  topic
     /
A---B---C---D  master`,
  `
            topic 
            ↓
A---B---C---D  master          somewhere: E---F---G`,
  `
              E' topic 
             /
A---B---C---D  master          somewhere: F---G`,
  `
              E'--F' topic 
             /
A---B---C---D  master          somewhere: G`,
  `
              E'--F'--G' topic
             /
A---B---C---D  master`,
]

function Rebase() {
  const [step, setStep] = useState(0)
  const [displayed, setDisplay] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setDisplay(true)
    }, 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <Layout>
      <button
        onClick={() => {
          setStep(Math.abs((step - 1) % steps.length))
        }}
      >
        back
      </button>{" "}
      <button
        onClick={() => {
          setStep((step + 1) % steps.length)
        }}
      >
        next ({step})
      </button>
      <Ascii displayed={displayed} value={steps[step]} />
    </Layout>
  )
}

const Box = posed.div({
  initialPose: "closed",
  // closed: { staggerChildren: 25 },

  open: {
    staggerChildren: 15,
  },
})

const Item = posed.div({
  open: {
    scale: 1,
    transition: { type: "spring", stiffness: 300 },
  },
  closed: {
    scale: 0,
    transition: { type: "spring", stiffness: 50 },
  },
})

function CommitTree({ motif }) {
  return motif.split("").map((c, i) => (
    <Item style={{ fontSize: 20 }} key={`c${i}`}>
      {c === " " ? "\u00A0" : c}
    </Item>
  ))
}

const AsciiLine = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: 500 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 500 },
  },
})

const Ascii = ({ value, displayed }) => {
  const [prevValue, setPrevValue] = useState(null)
  if (prevValue !== value) {
    setPrevValue(value)
  }
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column-reverse",
      }}
      pose={displayed ? "open" : "closed"}
    >
      <PoseGroup>
        {value
          .split("\n")
          .filter(Boolean)
          .reverse()
          .map((line) => (
            <AsciiLine key={line} style={{ display: "flex" }}>
              <CommitTree motif={line} />
            </AsciiLine>
          ))}
      </PoseGroup>
    </Box>
  )
}

export default Rebase
