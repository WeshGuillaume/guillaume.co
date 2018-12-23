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
  background-color: #EFEFEF;
  border: 16px solid #2D313E;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Terminal />
      </Container>
    )
  }
}

export default App
