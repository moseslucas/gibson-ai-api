const express = require('express')
const { mongoose } = require('mongoose')
const bodyParser = require('body-parser')
const Twit = require('twit')
const T = new Twit({
  consumer_key: '0ph7p4RwZmYW5b9ALKUMkwRy3',
  consumer_secret: 'KnvyKax25aucNN1c0yyhP8wLg2m5n9v9jv0s8GFcqsYHRDeo0Y',
  access_token: '1683189583-MyNA4b2dKqMFMZCDUvjuuXDx3GZ44Fv3MHQPWjo',
  access_token_secret: 'srWb6B4NGFAIvc0L8i1Yc4rM6TW74IYjeA6FS1KV63ZPX'
})

const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json())
// Add headers
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
	res.setHeader('Access-Control-Allow-Credentials', true)
	next()
})

app.post('/test', (req, res) => {
  res.send(req.body)
})

app.post('/twit/search', (req, res) => {
  T.get('users/search', { q: req.body.q, count: 10}, function(err, data, response) {
    res.send(data)
  })
})

app.listen(port, () => console.log('Sever is Running: OK'))

module.exports = app
