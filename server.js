const path = require('path')
const express = require('express')
const app = express()

function parseString (raw) {
  var date = new Date()
  if (raw.indexOf('-') > -1) {
    date = new Date(raw)
  } else if (date) {
    date = new Date(parseInt(raw))
  }

  if (date.toString() === 'Invalid Date') {
    return { 'error': date.toString() }
  }

  return { unix: date.getTime(), utc: date.toUTCString() }
}

app.use('/', express.static(path.join(__dirname, '/views')))

app.get('/api/timestamp/:date_string?', (req, res) => {
  var rawDate = req.params.date_string
  res.json(parseString(rawDate))
})

var port = process.env.PORT || 8080
app.listen(port, () => { console.log('Listening on port ', port) })
