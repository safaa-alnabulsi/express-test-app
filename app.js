const express = require('express')
const app = express()
const port = 3000
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
        res.send(TODOS[todo_id])
    }
    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})