// import express
const express = require('express')
const PORT = process.env.PORT
const cors = require('cors')
const app = express()
const router = require('./router/movies')
const path = require('path')

// create app listener
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})

app.use(cors())

app.use(express.static('public'))
app.use(express.json())

// define base url
app.use('/api/movies', router)

// create homepage route
app.get('/', (req, res) => {
    res.send('Welcome to our cool web app')
})