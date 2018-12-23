const commands = {
  whoami() {
    return `My name is Guillaume, I am a web developper and Product guy based in Paris, for now. I’m available for all kind of stuff. Find out more by using the terminal 🙃`
  },
  help() {
    return `
To get to know me better, you can type a few of the following commands:

help: access to this help message
experience: discover my previous professional experience
education: list where I went to school
    `.trim()
  },
  education() {
    return `
After getting a Baccalauréat in Economics and Management, I attended University (Economics) in Marseille, France, before attending a school named 42 in Paris in computer science where I learned unix, javascript, C and A LOT MORE.
    `.trim()
  },
  notFound() {
    return ''
  }
}
export default function terminal(command) {
  return (commands[command] || commands['notFound'])(command)
}
