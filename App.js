const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send("Hello World!")
})

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

app.listen(port || 3001, () => {
    console.log(`listening on port ${port}`)
})
