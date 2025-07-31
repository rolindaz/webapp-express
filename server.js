// import express
const express = require('express')
const PORT = process.env.PORT
const app = express()

// create app listener
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})

// create homepage route
app.get('/', (req, res) => {
    res.send('Welcome to our cool web app')
})