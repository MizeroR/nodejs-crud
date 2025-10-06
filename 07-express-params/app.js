const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res)=> {
    res.send('Welcome! Try /hello/YourName to see params in action')
})

app.get('/hello/:name', (req,res)=> {
    res.send(`Hello, ${req.params.name}!`)
})

app.get('/search', (req,res) => {
    res.send(`You searched for: ${req.query.q}`)
})

app.listen(PORT, ()=> console.log(`Server is running at http://localhost:${PORT}`))