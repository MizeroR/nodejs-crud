const express = require('express');
const app = express();
app.use(express.json());

let todos = [
    {id: 1, task: 'Drink water'},
    {id: 2, task: 'Go to the gym'}
]

app.get('/todos', (req,res)=> res.json(todos))

app.post('/todos', (req,res) => {
    const newTodo = {id: todos.length + 1, task: req.body.task}
    todos.push(newTodo)
    res.json(newTodo)
})

app.delete('/todos/:id', (req,res)=> {
    todos = todos.filter(t=> t.id != req.params.id)
    res.json({message: 'Task deleted'})
})

app.listen(3000, ()=> console.log('Todo API running at http://localhost:3000'))