const express = require('express')
const app = express()
const router = express.Router()
const http = require('http')
const { Server } = require('socket.io')
var querystring = require('querystring');

const cors = require('cors')
app.use(cors())

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }
})

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`)

  socket.on('client_allData', (fJsn) => {
    saveData(fJsn)
    console.log(fJsn)
    socket.emit('server_allData', fJsn)
  })
})

server.listen(3001, () => {
  console.log("---Server Running on PORT: 3001---");
})


// import data from './json/dataJSON.json'


app.use('/api/', require('./routes.js') )



// idk if this is even working because of React Frontend
// //! must go at the bottom of exp.get calls
app.use((req, res) => {
  res.status(404).render("404", "<h1>404</h1>")
})

// //* WATCHER ######################################
// const chokidar = require('chokidar')
// const watcher = chokidar.watch('client/react-frontend/public/root', {
//   persistent: true
// })
// watcher.on('ready', () => {
//   console.log('[[ Chokidar is now WATCHING ]]')
// })
// watcher.on('add', path => {
//   getMedia_cntr.getMedia_cntr_funct
//   console.log(path, '[[ FILE ADDED ]]')
// })
// watcher.on('unlink', path => {
//   getMedia_cntr.getMedia_cntr_funct
//   console.log(path, '[[ FILE REMOVED ]]')
// })
// watcher.on('change', path => {
//   getMedia_cntr.getMedia_cntr_funct
//   console.log(path, '[[ FILE CHANGED ]]')
// })
// //*  ######################################


// * ######################### Functions
const path = require('path')
const fs = require('fs')

const saveData = (data) => {
  const stringifyData = JSON.stringify(data)
  // console.log("------ Writing media1.json-------")
  fs.writeFileSync('json/dataJSON.json', stringifyData), err => {
    if (err) throw err;
  }
}