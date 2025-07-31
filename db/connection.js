// import mysql2
const mysql = require('mysql2')
// create credentials object variable
const credentials = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}
// connect to database
const connection = mysql.createConnection(credentials)

connection.connect((err) => {
    if (err) {
        throw err
    }
    console.info('Connection to db successful')
})

// export connection
module.exports = connection