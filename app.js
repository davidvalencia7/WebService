require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const hbs = require('hbs')


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

//Servir contenido estatico
app.use( express.static('public'))

app.get('/', (req,res) => {
    res.render('home', {
        name : 'David',
        title : 'Curso Node'
    })
})

app.get('/generic', (req,res) => {
    res.render('generic', {
        name : 'David',
        title : 'Curso Node'
    })
})

app.get('/elements', (req,res) => {
    res.render('elements', {
        name : 'David',
        title : 'Curso Node'
    })
})

app.get('*', (req,res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen( port , () => {
    console.log(`Example app listening at http://localhost:${port}`);
})