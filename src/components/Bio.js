import React from 'react'
import { DateTime } from 'luxon'

function myAge() {
  const birthdate = DateTime.fromISO('1993-08-15')
  return DateTime.local()
    .diff(birthdate, 'years')
    .toFormat('y')
}

class Bio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
      wq: 0,
      age: myAge(),
    }
  }

  animateWq(i) {
    setTimeout(() => {
      this.setState({
        wq: i,
      })
      if (i < 3) {
        this.animateWq(i + 1)
      }
    }, 200)
  }

  componentDidMount() {
    this.animateWq(0)
  }

  render() {
    return (
      <div>
        <header>
          <h1>🦁 Vincent Cordobes</h1>
        </header>
        <p>
          {this.state.age} years old <br />
          Software engineer <br />
          📍Paris
        </p>
        <p>
          I like functional programming, statically typed languages and I am
          very interested in Domain Driven Design.
        </p>
        <span>Social:</span>
        <ul>
          <li>
            <a href="https://twitter.com/VincentCordobes">twitter</a>
          </li>
          <li>
            <a href="https://github.com/VincentCordobes">github</a>
          </li>
          <li>
            <a href="https://www.instagram.com/vincentcordobes/">instagram</a>
          </li>
        </ul>
        <div>
          {':wq'.substring(0, this.state.wq)}
          {this.state.wq > 0 && <div className="vim-cursor" />}
        </div>
      </div>
    )
  }
}

export default Bio
