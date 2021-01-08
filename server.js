//console.log('Sample node application')

const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.listen( 3000, () => console.log("Listing in 3000") )

app.use(bodyParser.urlencoded(
    {extended: true}
    ))

//app.get( endPoint example '/', callback function )
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html') )

app.post('/quotes', (req,res) => {
    console.log(req.body)
})

// Explore
// use
// get
// post
// express
// body parser
// req, res







