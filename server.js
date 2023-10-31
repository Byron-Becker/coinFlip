const express = require('express')
const app = express()
const PORT = 3000
const MongoClient = require('mongodb').MongoClient

app.listen(PORT, (req,res) => {
    console.log('Connected on Port 3000')
})