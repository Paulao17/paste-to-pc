var express = require('express')
var router = express.Router()
const Redis = require("ioredis")
const redis = new Redis()
const {
  v4: uuidv4
} = require('uuid');

// define the home page route
router.get('/', async function(req, res) {
  res.render('index', {
    title: 'Paste to PC',
    message: 'Hello there!'
  })
})

router.use((req, res, next) => {
  req.redis = redis
  next()
})

router.get('/n', (req, res) => {
  let uuid = uuidv()
  res.redirect('/b/' + uuid)
})

router.get('/b/:uuuid', (req, res) => {
  res.render('board', {
    title: 'Board ' + req.params.uuid,
    uuid: req.params.uuid
  })
})

module.exports = router
