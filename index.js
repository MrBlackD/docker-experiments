const express = require('express');

const app = express()

app.get('/test',(req, res) => {
    res.send('Works')
})

app.get('/rnd',(req, res) => {
    res.send(Math.random().toString().slice(2))
})


app.listen(3000)