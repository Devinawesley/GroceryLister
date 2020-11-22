
const express = require('express')
const mongoose = require('mongoose')
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
    })
    .catch((err) => {
        console.log("error connecting to db")
    }) 
app.get('/', (req, res) => {
    res.send("Hello World!")
})

//Routes
app.get('/login', (req, res) => {
    res.send("login screen!")
})

app.get('/recipes', (req, res) => {
    res.send("Recipe list!")
})

app.get('/recipes/create', (req, res) => {
    res.send("Create a new recipe!")
})

app.get('/recipes/edit/:id', (req, res) => {
    res.send(`Editing recipe with the ID of ${req.params.id}`)
})

//Uses environment port or 3001 if environment port is undefined. 
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
