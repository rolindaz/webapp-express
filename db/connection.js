// import mysql2
const mysql = require('mysql2')
// create credentials object variable
const credentials = {
    port: process.env.PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    db_name: process.env.DB_NAME
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