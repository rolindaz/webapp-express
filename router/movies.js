// import express
const express = require('express')
const router = express.Router()
//import controller
const movieController = require('../controller/movieController')

// create index route
router.get('/', movieController.index)

// export router
module.exports = router