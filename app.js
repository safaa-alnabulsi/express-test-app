const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


let TODOS = ["put on sock", "put on shoe", "tie laces"]

app.get('/',(req,res)=>{
    res.redirect('/todos')
 })
 
app.get('/todo', (req, res) => {
    res.redirect('/todos')
})

app.get('/todos', (req, res) => {
    res.send(TODOS)
})
    
app.get('/todos/:id', (req, res) => {
    const todo_id = req.params.id;  
    if(typeof TODOS[todo_id] === 'undefined') {
        res.status(404).send("Sorry can't find that!")
    }
    else {
        res.send({'title': TODOS[todo_id]})
    }
})

app.post('/todos', function (req, res) {
    const todo_text = req.body.title;  
    const UPDATED_TODOS = TODOS.push(todo_text)  
    console.log(UPDATED_TODOS)
    res.send('Got a POST request and updaed TODOS list!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})