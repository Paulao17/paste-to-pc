const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const router = require('./routes/index')

const PORT = 4000

app.set('view engine', 'pug')

app.use('/static', express.static('static'))
app.use('/', router)

io.on('connection', (socket) => {
	console.log('a user connected')
	socketRouter.route(socket)
})

http.listen(4000, () => {
  console.log('listening on *:' + PORT)
})
