import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1.5),
        }}
      >
        <p>
        <img
          src={profilePic}
          alt={`Nadim Tuhin`}
          style={{
            borderRadius: '50%',
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            float: 'left',
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
          Written by <strong>Nadim Tuhin</strong> who lives and works in Dhaka, Bangladesh building useful things.{' '}
          <a href="https://twitter.com/nadimtuhin">
            Follow on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
