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

function getValue({ history, cursor, value }) {
  return history[cursor] || value
}

class Input extends Component {
  state = {
    value: '',
    history: [],
    error: false
  }

  constructor(props) {
    super(props)
    window.focus = this.focus.bind(this)
  }

  updateInput = ({ target: { value } }) => {
    if (value.length >= 21) {
      return this.setState({
        error: true,
        value: this.state.value,
        cursor: -1
      })
    }
    return this.setState({ value: value, error: false, cursor: -1 })
  }

  submit = () => {
    const value = getValue(this.state)
    this.setState(
      {
        value: '',
        error: false,
        history: (value.trim() ? [value] : []).concat(this.state.history),
        cursor: -1
      },
      () => this.props.onSubmit(value.trim())
    )
  }

  keyDown = e => {
    const { key, keyCode, ctrlKey } = e
    if (key === 'Enter') {
      this.submit()
    }

    if (keyCode === 38 && this.state.cursor < this.state.history.length - 1) {
      e.preventDefault()
      e.stopPropagation()
      this.setState({ cursor: this.state.cursor + 1 }, () =>
        this.moveCaretToTheEnd(this.input)
      )
    }

    if (keyCode === 40 && this.state.cursor > -1) {
      e.preventDefault()
      e.stopPropagation()
      this.setState({ cursor: this.state.cursor - 1 }, () =>
        this.moveCaretToTheEnd(this.input)
      )
    }

    if (keyCode === 67 && ctrlKey) {
      return this.setState(
        {
          value: '',
          error: false,
          cursor: -1
        },
        this.submit
      )
    }
  }

  moveCaretToTheEnd = () => {
    const length = getValue(this.state).length
    this.input.selectionStart = this.input.value.length
    this.input.selectionEnd = this.input.value.length
  }

  focus() {
    this.input.focus()
  }

  render() {
    const { cursor, value, history } = this.state

    return (
      <Container>
        <Caret offset={(history[cursor] || value).length} />
        <InputElement
          ref={i => (this.input = i)}
          error={this.state.error}
          onKeyDown={this.keyDown}
          autoFocus
          value={history[cursor] || value}
          onChange={this.updateInput}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </Container>
    )
  }
}

export default Input
