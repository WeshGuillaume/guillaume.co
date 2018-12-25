const commands = {
  whoami() {
    return `My name is Guillaume, I am a web developper and Product guy based in Paris, for now. I’m available for all kind of stuff. Find out more by using the terminal 🙃`
  },
  education() {
    return `
After getting a Baccalauréat in Economics and Management, I attended University (Economics) in Marseille, France, before attending a school named 42 in Paris in computer science where I learned unix, javascript, C and A LOT MORE.
    `.trim()
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
  clear(_, context) {
    return context.clear
  },
  social() {
    return `
${commands.linkedin()}
${commands.github()}
${commands.twitter()}
${commands.instagram()}
    `.trim()
  },
  github() {
    return `Github: https://github.com/GuillaumeBadi`
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
  contact() {
    return `
Email: hello@guillaume.co
📌 Paris, France
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
    return `
To get to know me better, you can type a few of the following commands:

help: access to this help message
whoami: my basic introduction
education: list where I went to school
skills: Get a non-exhautive list of what I can do

clear: Clean up that terminal
    `.trim()
  }
}
export default function terminal(command, context) {
  const result = (commands[command.split(' ')[0]] || commands['notFound'])(
    command,
    context
  )
  window.analytics.track('Terminal > Input', {
    command,
    unknown: !commands[command]
  })
  return result
}
