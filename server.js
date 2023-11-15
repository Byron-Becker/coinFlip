const express = require('express')
const app = express()
const PORT = 3000
const MongoClient = require('mongodb').MongoClient

MongoClient.connect()

app.listen(PORT, (req,res) => {
    console.log('Connected on Port 3000')
})

// null, undefined, nan, false, zero or -0, empty string
// any array,function or object that has something or is empty
// nonzero, string, date, symbol


// innerText, textContent, or innerHTML

// hide the details show the essentials, simple, managemable, and 






















