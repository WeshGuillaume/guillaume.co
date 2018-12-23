import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: inline;
`

const InputElement = styled.input`
  outline: none;
  font-size: 16px;
  border: 0;
  font-family: 'Fira Code';
  font-weight: 500;
  color: transparent;
  background: none;
  text-shadow: 0 0 0 ${props => (props.error ? '#BE3B5D' : '#50d299')};
`

const Caret = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  opacity: 1;
  left: ${props => props.offset * 9.7}px;
  width: 9px;
  height: 19px;
  background: rgba(255, 255, 255, 0.31);
  animation: blinker 1s linear infinite;

  @keyframes blinker {
    25% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
  }
`

class Input extends Component {
  state = {
    value: '',
    error: false
  }

  updateInput1 = ({ target: { value } }) => {
    if (value.length >= 21) {
      return this.setState({
        error: true,
        value: this.state.value
      })
    }
    return this.setState({ value: value, error: false })
  }

  keyDown = ({ key }) => {
    const value = this.state.value
    if (key === 'Enter' && value.trim() !== '') {
      this.setState({ value: '', error: false }, () =>
        this.props.onSubmit(value)
      )
    }
  }

  render() {
    return (
      <Container>
        <Caret offset={this.state.value.length} />
        <InputElement
          error={this.state.error}
          onKeyDown={this.keyDown}
          autoFocus
          value={this.state.value}
          onChange={this.updateInput1}
        />
      </Container>
    )
  }
}

export default Input
