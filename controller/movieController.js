// import db connection
const connection = require('../db/connection')

// create index route function
function index(req, res) {
    const sql = 'SELECT * FROM movies;'
    connection.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            })
        }
        console.log(result);
        res.json(result)
    })
} 