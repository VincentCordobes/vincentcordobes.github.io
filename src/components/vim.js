import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'

function animateWq(setWq, i) {
  setTimeout(() => {
    setWq(i)
    if (i < 3) {
      animateWq(setWq, i + 1)
    }
  }, 200)
}

function Vim() {
  const [wq, setWq] = useState(0)

  return (
    <div>
      {wq === 0 && <Waypoint onEnter={() => animateWq(setWq, wq)} />}
      {':wq'.substring(0, wq)}
      <div className="vim-cursor" />
    </div>
  )
}

export default Vim
