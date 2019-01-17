import React, { useState, useEffect, forwardRef } from 'react'
import posed, { PoseGroup } from 'react-pose'
import Layout from '../components/layout'
import AnimatedAscii, {
  Somewhere,
  withCounter,
} from '../components/animated-ascii'

const Figure1 = () => {
  const steps = [
    `
E---F---G---H---I  topicA`,
    `
E ← topicA`,
    `
E---H'--I' topicA`,
  ]
  // const positions = [[-150, 70, 80]]
  const positions = [[0, 0, 0]]

  return (
    <AnimatedAscii
      steps={steps}
      positions={positions}
      renderExtra={stepNumber =>
        stepNumber === 1 &&
        withCounter(count => (
          <Somewhere
            exitX={-40}
            exitY={0}
            transform={'translate(182px, -21px)'}
            key={`somewhere${count}`}
          >
            H---I
          </Somewhere>
        ))
      }
    />
  )
}

export default Figure1
