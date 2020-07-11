import React, { useState, useEffect, forwardRef } from "react"
import posed, { PoseGroup } from "react-pose"
import Layout from "../components/layout"
import AnimatedAscii, {
  Somewhere,
  withCounter,
} from "../components/animated-ascii"

const Figure1 = () => {
  const steps = [
    `
            E---F  topicB
           /
      C---D  topicA
     /
A---B  master`,
    `
    topicB
    |
    | C---D  topicA
    ↓/
A---B  master`,
    `
     E'--F' topicB
    /
    | C---D  topicA
    |/
A---B  master`,
  ]
  const positions = [[-150, 80, 70], [-70, 0, 70], [], [], []]

  return (
    <AnimatedAscii
      steps={steps}
      positions={positions}
      renderExtra={(stepNumber) =>
        stepNumber == 1 &&
        withCounter((count) => (
          <Somewhere
            exitX={-30}
            exitY={-15}
            transform={"translate(68px, -94px)"}
            key={`somewhere${count}`}
          >
            E---F
          </Somewhere>
        ))
      }
    />
  )
}

export default Figure1
