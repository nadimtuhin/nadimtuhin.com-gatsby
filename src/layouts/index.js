import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if ([rootPath, '/scattered-thoughts'].includes(location.pathname)) {
      header = (
        <header style={{
          marginBottom: rhythm(1.5),
        }}>
        <h1
          style={{
            ...scale(1.5),
            marginTop: 0,
            fontWeight: 600
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Scattered Thoughts
          </Link>
        </h1>

          <nav>
            <a> Shattered Thoughts </a> |
            <a> Book Reviews </a> |
            <a> Programming </a>
          </nav>
        </header>
      )
    } else {
      header = (
        <h3
          style={{
            fontWeight: 600,
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Scattered Thoughts
          </Link>
        </h3>
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
      </Container>
    )
  }
}

export default Template
