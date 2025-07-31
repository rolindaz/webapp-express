// import express
const express = require('express')
const router = express.Router()
//import controller
const movieController = require('../controller/movieController')

// create index route
router.get('/', movieController.index)

// create show route
router.get('/:id', movieController.show)

// export router
module.exports = router