const express = require('express')
const app = express()
const port = 3000

app.get('/todo', (req, res) => {
    res.redirect('/todos')
})

app.get('/todos', (req, res) => {
    res.send(["put on sock", "put on shoe", "tie laces"])
})
    

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})