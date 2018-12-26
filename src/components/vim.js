import React, { useState, useEffect } from 'react'

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

  useEffect(() => {
    const t = setTimeout(() => animateWq(setWq, 0), 1000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div>
      {':wq'.substring(0, wq)}
      {wq > 0 && <div className="vim-cursor" />}
    </div>
  )
}

export default Vim
