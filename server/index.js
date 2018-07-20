const express = require('express')

const app = express()

app.get('/test', (req, res) => {
  res.sendHeader('Content-Type', 'text/plain')
  res.end('Ok baby')
})

app.listen(3000)

const date = new Date(Date.now())
console.log('\n\n\n' + date.toDateString() + ' - ' + date.toTimeString() + '')
console.log('Server running @localhost:3000\n\n')