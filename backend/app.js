'use strict'

require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

app.get('/old', (req, res) => {
    res.redirect(301, '/new')
})

app.get('/new', (req, res) => {
    res.send('redirected to this route')
})

app.get('/', (req, res) => {
    res.send(req.method + req.url)
})

app.listen(PORT, (err) => {
    if(err) {
        console.log('Unable to start server", err')
        return
    }
    console.log(`Listening on port ${PORT}, http://localhost:${PORT}`)
})
