const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/build'))

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(port)
console.log('server started on port ' + port)
