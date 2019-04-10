import React, { useState, useEffect, forwardRef } from 'react'
import posed, { PoseGroup } from 'react-pose'
import Layout from '../components/layout'

// Don't look at this please this is an
// MVP of smth but it's absolutely horrible
// You have been warned...

const transition = { type: 'spring', stiffness: 300, damping: 50 }

const Line = posed.div({
  pre: {
    opacity: 0,
    transition: { duration: 500 },
  },
  enter: {
    opacity: 1,
    transition: { duration: 500 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 500 },
  },
})

const LineT = posed.div({
  pre: {
    opacity: 0,
    x: ({ preX }) => preX,
    transition,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition,
  },
  exit: {
    opacity: 0,
    x: ({ exitX }) => exitX,
    transition,
  },
})

export const Somewhere = posed(
  forwardRef(({ children, style, transform }, ref) => (
    <div ref={ref} style={style}>
      <div
        style={{
          fontSize: 13,
          color: '#b1b1b1',
          position: 'absolute',
          margin: 'auto',
          transform,
        }}
      >
        {normalize(`tmp: ${children}`)}
      </div>
    </div>
  ))
)({
  pre: {
    opacity: 0,
    x: 0,
    y: 0,
    transition: { duration: 500 },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 500 },
  },
  exit: {
    opacity: 0,
    x: ({ exitX }) => exitX,
    y: ({ exitY }) => exitY,
    transition,
  },
})

const buildLine = (() => {
  let counter = 0
  return ({ ascii, prefix, preX, exitX }) => (
    <LineT preX={preX} exitX={exitX} key={ascii + counter++}>
      {normalize(ascii)}
    </LineT>
  )
})()

const buildStat = (() => {
  let counter = 0
  return ({ ascii }) => <Line key={ascii + counter}>{normalize(ascii)}</Line>
})()

export const withCounter = (() => {
  let counter = 0
  return fn => fn(counter++)
})()

const steps = prefix => [
  [
    buildLine({ ascii: '      X---Y---Z  topic', preX: 40, exitX: -87 }),
    buildLine({ ascii: '     /', preX: 40, exitX: 32 }),
    buildStat({ ascii: 'A---B---C  master' }),
  ],
  [
    buildLine({ ascii: '        topic', preX: 87, exitX: 50 }),
    buildLine({ ascii: '        ↓', preX: -32, exitX: 10 }),
    buildStat({ ascii: 'A---B---C  master' }),
    <Somewhere key={`somewhere${prefix}`}>X---Y---Z</Somewhere>,
  ],
  [
    buildLine({ ascii: "          X'--Y'--Z' topic", preX: -40, exitX: -40 }),
    buildLine({ ascii: '         /', preX: -10, exitX: -40 }),
    buildStat({ ascii: 'A---B---C  master' }),
  ],
]

const buildAnimatedAscii = ({ steps, positions, renderExtra }) => {
  const stepsLines = steps.map(ascii => {
    const [_, ...rest] = ascii.split('\n')
    return rest
  })

  const missingPosition = positions.some(
    linePosition =>
      linePosition.length !== stepsLines.length && linePosition.length > 0
  )
  if (missingPosition) {
    throw new Error('There must be positions for each steps!')
  }

  const m = stepsLines.every(stepLines => stepLines.length === positions.length)
  if (!m) {
    throw new Error('Positions.length must be equal to the number of lines')
  }

  return stepsLines
    .map((step, stepIndex) => {
      return step.map((line, lineIndex) => {
        const linePositions = positions[lineIndex]
        if (!linePositions.length) {
          return buildStat({ ascii: line })
        } else {
          const config = {
            ascii: line,
            preX: -linePositions[(stepIndex - 1 + steps.length) % steps.length],
            exitX: linePositions[stepIndex],
          }
          return buildLine(config)
        }
      })
    })
    .map((step, i) => {
      renderExtra && step.push(renderExtra(i))
      return step
    })
}

const DISTANCE_CHAR_RATIO = 0.1

function Rebase({ steps, positions, renderExtra }) {
  const [step, setStep] = useState(0)
  return (
    <Layout>
      <div
        style={{
          width: 272,
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: -5,
          userSelect: 'none',
          position: 'relative',
          lineHeight: 1.5,
        }}
      >
        <figure
          style={{ cursor: 'pointer' }}
          onClick={() => setStep((step + 1) % steps.length)}
        >
          <div className="mono" style={{ fontSize: 16 }}>
            <PoseGroup preEnterPose="pre">
              {buildAnimatedAscii({ steps, positions, renderExtra })[step]}
            </PoseGroup>
          </div>
          <figcaption style={{ marginTop: 15 }}>
            Step {step} (tap to animate)
          </figcaption>
        </figure>
      </div>
    </Layout>
  )
}

function normalize(text) {
  return text.replace(/\s/g, '\u00A0')
}

export default Rebase
