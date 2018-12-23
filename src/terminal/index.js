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
       444444444   222222222222222    
      4::::::::4  2:::::::::::::::22  
     4:::::::::4  2::::::222222:::::2 
    4::::44::::4  2222222     2:::::2 
   4::::4 4::::4              2:::::2 
  4::::4  4::::4              2:::::2 
 4::::4   4::::4           2222::::2  
4::::444444::::444    22222::::::22   
4::::::::::::::::4  22::::::::222     
4444444444:::::444 2:::::22222        
          4::::4  2:::::2             
          4::::4  2:::::2             
          4::::4  2:::::2       222222
        44::::::442::::::2222222:::::2
        4::::::::42::::::::::::::::::2
        444444444422222222222222222222
    `
  },
  notFound() {
    return ''
  }
}
export default function terminal(command) {
  return (commands[command] || commands['notFound'])(command)
}
