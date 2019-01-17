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
      X---Y---Z  topic
     /
A---B---C  master`,
    `
        topic
        ↓
A---B---C  master`,
    `
          X'--Y'--Z' topic
         /
A---B---C  master`,
  ]
  const positions = [[-87, 50, -40], [32, 10, -40], []]

  return (
    <AnimatedAscii
      steps={steps}
      positions={positions}
      renderExtra={stepNumber =>
        stepNumber == 1 &&
        withCounter(count => (
          <Somewhere
            exitX={-10}
            exitY={-10}
            transform={'translate(108px, -47px)'}
            key={`somewhere${count}`}
          >
            X---Y---Z
          </Somewhere>
        ))
      }
    />
  )
}

export default Figure1
