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

// create show route function
function show(req, res) {
    const sql = 'SELECT * FROM movies WHERE id = ?;'
    const id = parseInt(req.params.id)
    connection.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            })
        }
        if (result.length === 0) {
            return res.status(404).json({
                error: true,
                message: 'Movie Not Found'
            })
        }
        console.log(result);
        res.json(result)
    })
}

// export route functions
module.exports = {
    index,
    show
}