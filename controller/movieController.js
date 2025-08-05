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

// create storeReview function
function storeReview(req, res) {
    const { id } = req.params
    const { rating, comment } = req.body
    const sql = 'INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)'
    connection.execute(sql, [id, name, vote, text], (err, result) => {
        if (err) return res.status(500).json({
            error: true,
            message: err.message
        })
        res.status(201).json({
            error: false,
            message: 'Review added successfully',
            review: {
                id: result.insertId,
                movie_id: id,
                name,
                vote,
                text
            }
        })
    })
}

// export route functions
module.exports = {
    index,
    show,
    storeReview
}