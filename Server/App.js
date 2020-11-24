
const express = require('express')
const mongoose = require('mongoose')
const Recipe = require('./models/recipe')
//mongoDB username and pass from command line args
const dbUser = process.argv[2]
const dbPass = process.argv[3]
const port = process.env.PORT || 3001
const connectionString = `mongodb+srv://${dbUser}:${dbPass}@cluster0.7qsp9.mongodb.net/Cluster0?retryWrites=true&w=majority`

//Express app
const app = express()

//Connecting to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>{
        console.log("Connected to db successfully")
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })
    .catch((err) => {
        console.log("error connecting to db: " + err)
    }) 
app.get('/', (req, res) => {
    res.send("Hello World!")
})

//Routes
app.get('/login', (req, res) => {
    res.send("login screen!")
})

app.get('/recipes/create', (req, res) => {
    const recipe = new Recipe({
        name:'Steak',
        ingredients:{
            'Steak':2,
            'Potatoes':4
        },
        userid:'1235'
    })

    recipe.save()
        .then((result) =>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        })
})

app.get('/recipes/edit/:id', (req, res) => {
    res.send(`Editing recipe with the ID of ${req.params.id}`)
})

app.get('/recipes/:id', (req, res) => {
    Recipe.find({userid:req.params.id})
        .then((result) => {
            res.send(`recipe list for user ${req.params.id}: \n` + result)
        })
        .catch((err) =>{
            console.log(err)
        })
})

app.use((req, res) => {
    res.status(404).send('404, Page not found!')
})
