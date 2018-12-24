import React, { Component } from 'react'
import styled from 'styled-components'

import './App.css'

import Terminal from './components/Terminal'

const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  border: 16px solid #2d313e;

  @media (max-width: 700px) {
    border: 0;
  }
`

class App extends Component {
  componentDidMount() {
    if (process.env.NODE_ENV !== 'production') {
      window.analytics = {
        track() {
          return console.log('not tracking, use in production only')
        }
      }
      return
    }
    var analytics = (window.analytics = window.analytics || [])
    if (!analytics.initialize)
      if (analytics.invoked)
        window.console &&
          console.error &&
          console.error('Segment snippet included twice.')
      else {
        analytics.invoked = !0
        analytics.methods = [
          'trackSubmit',
          'trackClick',
          'trackLink',
          'trackForm',
          'pageview',
          'identify',
          'reset',
          'group',
          'track',
          'ready',
          'alias',
          'debug',
          'page',
          'once',
          'off',
          'on'
        ]
        analytics.factory = function(t) {
          return function() {
            var e = Array.prototype.slice.call(arguments)
            e.unshift(t)
            analytics.push(e)
            return analytics
          }
        }
        for (var t = 0; t < analytics.methods.length; t++) {
          var e = analytics.methods[t]
          analytics[e] = analytics.factory(e)
        }
        analytics.load = function(t, e) {
          var n = document.createElement('script')
          n.type = 'text/javascript'
          n.async = !0
          n.src =
            'https://cdn.segment.com/analytics.js/v1/' + t + '/analytics.min.js'
          var a = document.getElementsByTagName('script')[0]
          a.parentNode.insertBefore(n, a)
          analytics._loadOptions = e
        }
        analytics.SNIPPET_VERSION = '4.1.0'
        analytics.load('vWEjzF0MaJ2k3UqIRWCxQlkQkrX9xHue')
        analytics.page()
      }
  }

  render() {
    return (
      <Container>
        <Terminal />
      </Container>
    )
  }
}

export default App
