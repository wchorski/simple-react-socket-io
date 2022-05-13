console.log('-------------------------------------------------------------')
console.log("----------------------routes.js------------------------------");
console.log('-------------------------------------------------------------')

const express = require('express')
router = express.Router()
controllers = require('./controllers')

router.get('/media1',       controllers.controllers_funct)

module.exports = router