import React, { Component, createRef } from 'react'
import styled from 'styled-components'

import noise from './noise.png'
import Entry from './Entry'
import Introduction from './Introduction'

const TERMINAL_HEIGHT = 600
const GLITCH_HEIGHT = 128

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 32px 32px 64px 0 rgba(45, 49, 62, 0.88);
  border-radius: 16px;
`

const Container = styled.div`
  width: 990px;
  height: ${TERMINAL_HEIGHT}px;
  background-color: #2d313e;
  background: url(${noise});
  overflow: hidden;
  padding: 64px;
  padding-top: 32px;
  overflow-y: scroll;

  @media (max-width: 700px) {
    width: 100vw;
    height: 100vh;
    padding: 32px;
    padding-top: 0;
  }
`

const Glitch = styled.div`
  position: absolute;
  width: 100%;
  height: ${GLITCH_HEIGHT}px;
  background-color: white;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  opacity: 0.025;
  top: ${props => props.offset}px;
  left: 0;
  right: 0;
  animation: slider 5s linear infinite;

  @keyframes slider {
    0% {
      top: ${-GLITCH_HEIGHT}px;
    }
    100% {
      top: ${TERMINAL_HEIGHT}px;
    }
  }
`

class Terminal extends Component {
  state = {
    glitchOffset: -GLITCH_HEIGHT,
    entries: [
      {
        command: 'whoami',
        error: false,
        output:
          'My name is Guillaume, I am a web developper and Product guy based in Paris, for now. I’m available for all kind of stuff. Find out more by using the terminal 🙃 (type "help" to get an overview of the available commands)'
      }
    ]
  }
  constructor(props) {
    super(props)
    this.terminal = createRef()
  }
  clear = () => {
    this.setState({ entries: [] })
  }
  scrollBottom = () => {
    this.terminal.current.scrollTop = this.terminal.current.scrollHeight
  }
  submit = entry => {
    this.setState(
      { entries: this.state.entries.concat([entry]) },
      this.scrollBottom
    )
  }
  focus = () => {
    window.focus()
  }
  render() {
    return (
      <Wrapper onClick={this.focus}>
        <Glitch offset={this.state.glitchOffset} />
        <Container ref={this.terminal}>
          <Introduction />
          {this.state.entries.map(({ command, error, output }, index) => (
            <Entry
              key={index}
              command={command}
              error={error}
              output={output}
            />
          ))}
          <Entry clear={this.clear} onSubmit={this.submit} command={null} />
        </Container>
      </Wrapper>
    )
  }
}
export default Terminal
