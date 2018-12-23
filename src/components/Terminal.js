import React, { Component, createRef } from 'react'
import styled from 'styled-components'

import noise from './noise.png'
import Entry from './Entry'

const TERMINAL_HEIGHT = 600
const GLITCH_HEIGHT = 128

const Wrapper = styled.div`
  position: relative;
`

const Container = styled.div`
  width: 990px;
  height: ${TERMINAL_HEIGHT}px;
  border-radius: 16px;
  background-color: #2d313e;
  background: url(${noise});
  overflow: hidden;
  box-shadow: 32px 32px 64px 0 rgba(45, 49, 62, 0.88);
  padding: 64px;
  padding-top: 32px;
  overflow-y: scroll;
`

const Glitch = styled.div`
  position: absolute;
  width: 100%;
  height: ${GLITCH_HEIGHT}px;
  background-color: white;
  opacity: 0.005;
  top: ${props => props.offset}px;
  left: 0;
  right: 0;
`

class Terminal extends Component {
  state = {
    glitchOffset: -GLITCH_HEIGHT,
    entries: [
      {
        command: 'whoami',
        error: false,
        output:
          'My name is Guillaume, I am a web developper and Product guy based in Paris, for now. I’m available for all kind of stuff. Find out more by using the terminal 🙃'
      }
    ]
  }
  constructor(props) {
    super(props)
    this.terminal = createRef()
  }
  updateGlitchOffset = () => {
    const { glitchOffset } = this.state
    if (glitchOffset >= TERMINAL_HEIGHT) {
      return this.setState({ glitchOffset: -GLITCH_HEIGHT })
    }
    return this.setState({ glitchOffset: glitchOffset + 1 })
  }
  scrollBottom = () => {
    this.terminal.current.scrollTop = this.terminal.current.scrollHeight
  }
  componentDidMount() {
    setInterval(() => {
      this.updateGlitchOffset()
    }, 5)
  }
  submit = entry => {
    this.setState(
      { entries: this.state.entries.concat([entry]) },
      this.scrollBottom
    )
  }
  render() {
    return (
      <Wrapper>
        <Glitch offset={this.state.glitchOffset} />
        <Container ref={this.terminal}>
          {this.state.entries.map(({ command, error, output }, index) => (
            <Entry
              key={index}
              command={command}
              error={error}
              output={output}
            />
          ))}
          <Entry onSubmit={this.submit} />
        </Container>
      </Wrapper>
    )
  }
}
export default Terminal
