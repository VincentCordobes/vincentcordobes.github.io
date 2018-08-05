import React from 'react'

class Bio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
    }
  }
  render() {
    return (
      <div>
        <header>
          <h1>🦁 Vincent Cordobes</h1>
        </header>
        <p>
          25 years old <br />
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
          :wq<div className="vim-cursor" />
        </div>
      </div>
    )
  }
}

export default Bio
