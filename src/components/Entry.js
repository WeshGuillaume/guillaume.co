import React, { Component } from 'react'
import styled from 'styled-components'

import terminal from '../terminal'

import Input from './Input'

const Container = styled.div`
  font-size: 16px;
  font-family: 'Fira Code';
  font-weight: 500;
  margin-top: 32px;
`

const PastCommand = styled.span`
  color: ${props => (props.error ? '#BE3B5D' : '#50d299')};
`

const Prompt = styled.span`
  color: #ff93f2;
  margin-right: 16px;
`

const Output = styled.p`
  color: white;
  max-width: 600px;
  font-weight: 300;
  line-height: 23px;
  white-space: pre-wrap;
`

class Entry extends Component {
  submit = command => {
    const OutputElement = command ? terminal(command) : ''
    if (OutputElement.context) {
      return this.props[OutputElement.context]()
    }
    const error = OutputElement === null
    this.props.onSubmit({
      error,
      output: error ? `guillaume.co: Command not found: ${command}` : <OutputElement />,
      command
    })
  }

  shouldComponentUpdate({ command }) {
    return command !== this.props.command
  }

  render() {
    const { command, output, error } = this.props
    return (
      <Container>
        <Prompt>▶</Prompt>
        {command !== null ? (
          <PastCommand error={error}>{command}</PastCommand>
        ) : (
          <Input onSubmit={this.submit} />
        )}
        {output && <Output>{output}</Output>}
      </Container>
    )
  }
}

export default Entry
