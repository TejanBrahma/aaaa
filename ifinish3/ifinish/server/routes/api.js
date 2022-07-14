const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb+srv://tejan:tejan@cluster0.3xo2x.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(db, err => {
    if (err) {
        console.log('err')
    }
    else {
        console.log('connected')
    }
})
router.get('/', (req, res) => {
    res.send('from API route')
})

router.post('/register', (req, res) => {
    let userData = req.body
    console.log(req.body)
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        }
        else {
            res.status(200).send(registeredUser)
        }
    })
})

module.exports = router