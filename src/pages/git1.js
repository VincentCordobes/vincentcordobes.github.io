import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import posed, { PoseGroup } from 'react-pose'
import { reverse, range } from 'lodash/fp'
import Layout from '../components/layout'

const transition = { type: 'spring', stiffness: 200, damping: 50 }

const Line = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: 200 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 200 },
  },
})

const Line1 = posed.div({
  enter: {
    opacity: 1,
    x: 0,
    transition,
  },
  exit: {
    opacity: 0,
    x: ({ m }) => m,
    transition,
  },
})

const steps = [
  [
    <Line1 m={-62} key={'1dkfj'}>
      {normalize('      E---F---G  topic')}
    </Line1>,
    <Line1 m={87} key={'2dkf'}>
      {normalize('     /')}
    </Line1>,
    <Line key={'3dfjd'}>{normalize('A---B---C---D  master')}</Line>,
  ],
  [
    <Line1 m={62} key={'4dfj'}>
      {normalize('            topic')}
    </Line1>,
    <Line1 m={-87} key={'5dfkj'}>
      {normalize('            ↓')}
    </Line1>,
    <Line key={'6dfkj'}>{normalize('A---B---C---D  master')}</Line>,
  ],
]

function Rebase() {
  const [step, setStep] = useState(0)
  return (
    <Layout>
      <button
        onClick={() => {
          setStep(Math.abs((step - 1) % steps.length))
        }}
      >
        back
      </button>{' '}
      <button
        onClick={() => {
          setStep((step + 1) % steps.length)
        }}
      >
        next ({step})
      </button>
      <div className="mono" style={{ fontSize: 20 }}>
        <PoseGroup>{steps[step]}</PoseGroup>
      </div>
    </Layout>
  )
}

function normalize(text) {
  return text.replace(/\s/g, '\u00A0')
}

export default Rebase
