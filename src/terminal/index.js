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
  contact() {
    return `
Email: hello@guillaume.co
📌 Paris, France
    `.trim()
  },
  email() {
    return `Email: hello@guillaume.co`
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
  return (commands[command] || commands['notFound'])(command, context)
}
