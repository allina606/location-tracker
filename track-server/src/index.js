const express = require('express')
const mongoose = require('mongoose')
const { username, password } = require('./mongooseAuthentication')

// represents entire application, can associate route hadnlers with it
const app = express()

const mongoUri = 'mongodb+srv://' + username + ':' + password + '@tracker-app-uvdeh.mongodb.net/test?retryWrites=true&w=majority'
// second param is options to prevent common errors / warning messages
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
})
// anytime mongoose successfully connected,  callback envoked
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance')
})
mongoose.connection.on('error', err => {
    console.log('Error connected to mongo', err)
})

// first route handler
app.get('/', (req, res) => {
    // req represents incoming http request
    // res is the outgoing response
    res.send('Hi There')
})

// app listens to specific port on our machine
app.listen( 3000, () => {
    console.log('Listening on port 3000')
})
