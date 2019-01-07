
import React, { Fragment } from 'react'

import Social from '../components/Commands/Social'
import Email from '../components/Commands/Email'

const commands = {
  whoami() {
    return `My name is Guillaume, I am a web developper and Product guy based in Paris, for now. I’m available for all kind of stuff. Find out more by using the terminal 🙃`
  },
  education() {
    return `
After getting a Baccalauréat in Economics and Management, I attended University (Economics) in Marseille, France, before attending a school named 42 in Paris in computer science where I learned unix, javascript, C and A LOT MORE.
    `.trim()
  },
  jah() {
    return `Rastafari !`
  },
  experience() {
    return `to be implemented...`
  },
  skills() {
    return `
After a few experiences, and some time learning on my own, I managed to master a few skills:
  - React
  - GraphQL
  - Apollo
  - Haskell
  - Node.js
  - Product Management
  - Basic intuition in machine learning main algorithms
  - An ok-level in UI Design
    `.trim()
  },
  notFound() {
    return null
  },
  clear: { context: 'clear' },
  social: Social,
  github() {
    return <Fragment>Github: <a target='_blank' href='https://github.com/GuillaumeBadi'>@GuillaumeBadi</a></Fragment>
  },
  hello() {
    return `I am ... not a chatbot, but hey !`
  },
  hi() {
    return commands.hello()
  },
  hey() {
    return commands.hello()
  },
  twitter() {
    return `Twitter: https://twitter.com/weshguillaume`
  },
  instagram() {
    return `Instagram: https://instagram.com/weshguillaume`
  },
  linkedin() {
    return `LinkedIn: https://www.linkedin.com/in/guillaume-badi-a06008b9/`
  },
  location() {
    return `📌 Paris, France`
  },
  contact() {
    return `
${commands.email()}
${commands.location()}
    `.trim()
  },
  email() {
    return `Email: hello@guillaume.co`
  },
  top() {
    return `Alway up for a drink, 100%`
  },
  uname() {
    return `GuillaumeOS v1.0.0`
  },
  ps() {
    return `You're the only one, I Promise`
  },
  ls() {
    return `/`
  },
  cd() {
    return `You're not going anywhere 😉`
  },
  school() {
    return commands.education()
  },
  help() {
    return (
      <p>
        <p>
          To get to know me better, you can type a few of the following commands:
        </p>

        <p>
          help: access to this help message
        </p>
        <p>
          whoami: my basic introduction
        </p>
        <p>
          education: list where I went to school
        </p>
        <p>
          skills: Get a non-exhautive list of what I can do
        </p>
        <p>
          contact: the <strong>privilege</strong> to get my contact info
        </p>
        <p>
          social: All my social links right in the terminal
        </p>

        <p>
          clear: Clean up that terminal
        </p>
      </p>
    )
  }
}
export default function terminal(command, context) {
  const Element = commands[command.split(' ')[0]]
  window.analytics.track('Terminal > Input', {
    command,
    unknown: !Element
  })
  return Element || null
}
