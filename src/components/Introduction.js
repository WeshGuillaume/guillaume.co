import React, { Component } from 'react'
import moment from 'moment'
import styled from 'styled-components'

const lastLogin = localStorage.getItem('lastLogin')
localStorage.setItem('lastLogin', moment().format('MMMM Do YYYY, h:mm a'))

const Text = styled.span`
  color: white;
  max-width: 600px;
  font-weight: 500;
  line-height: 23px;
  white-space: pre-wrap;
`

const values = ['(/•-•)/', '\\(•-•\\)']

const content = emoji => `
Welcome${lastLogin ? ' back' : ''} on my portfolio ${emoji}
${lastLogin ? `Last login: ${lastLogin}` : ''}
`

export default class Introduction extends Component {
  state = {
    index: 0
  }

  update = () => {
    this.setState({ index: this.state.index ? 0 : 1 })
  }

  componentDidMount() {
    setInterval(this.update, 500)
  }

  render() {
    const { index } = this.state
    return <Text>{content(values[index])}</Text>
  }
}
