//console.log('Sample node application')

const bodyParser = require('body-parser')
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const connectionStr = 'mongodb+srv://jlugo:xbox2701@cluster0.mme34.mongodb.net/<dbname>?retryWrites=true&w=majority'

const app = express()

app.listen( 3000, () => console.log("Listing in 3000") )



MongoClient.connect(
    connectionStr,
    { useUnifiedTopology: true },
    (err, client) => {
        if (err) return console.error(err);

        console.log("Connected to Database Server");
        const db = client.db('star-wars-quotes')
        const quotesCollections = db.collection('quotes')

        // Middleweares
        app.use( bodyParser.urlencoded(
            {extended: true}
            )
        )
        app.use(bodyParser.json())
        app.use(express.static('public'))


        app.post('/quotes', (req,res) => {
            quotesCollections.insertOne(req.body)
            .then( result => {res.redirect('/')})
            .catch(error => console.error(error))
            }
        )
        
        app.get( '/', (req, res) => { 
            db.collection('quotes').find().toArray()
            .then( result => {res.render('index.ejs', {quotes: result})})
            .catch( error => console.error(error))
        } )

        app.put( '/quotes' , (req, res) =>
            {
                console.log(req.body) 
                quotesCollections.findOneAndUpdate(
                    {
                        name: 'Dark Vader'
                    },
                    { $set: { name: req.body.name, quote: req.body.quote } },
                    {upsert: true}
                )
                .then(result=> console.log(result))
                .catch(error => console.error(error))
                
            }
        )

        app.delete('/quotes', (req,res)=> {
            quotesCollections.deleteOne(
                {
                    name: req.body.name
                }
            )
            .then(result => res.json("Delete Dark Quote"))
            .catch(error => console.error(error))
        })

        
        
    }
);



//app.get( endPoint example '/', callback function )
//app.get('/', (req, res) => res.sendFile(__dirname + '/index.html') )




// Explore
// use
// get
// post
// express
// body parser
// req, res







