const express = require('express')
const users = require('./users.js')
const bodyParser = require('body-parser')
const pretty = require('prettyjson')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/connect', (req, res) => {
  const user = users.find(u => {
    return(u.username === req.body.username
        && u.password === req.body.password)
  })

  console.log('A new user logged in:')
  console.log(pretty.render(user))

  if(user) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(Object.assign({}, user, {password: ''})))
  } else {
    res.status(500).end()
  }
})

app.listen(3000)

const date = new Date(Date.now())
console.log('\n\n\n' + date.toDateString() + ' - ' + date.toTimeString() + '')
console.log('Server running @localhost:3000\n\n')