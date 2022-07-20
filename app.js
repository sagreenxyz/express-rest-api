'use strict'

require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, (err) => {
    if(err) {
        console.log('Unable to start server", err')
        return
    }
    console.log(`Listening on port ${PORT}, http://localhost:${PORT}`)
})
