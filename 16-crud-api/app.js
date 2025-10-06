const express = require('express')
const app = express()

app.use(express.json())
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
})

app.get('/', (req, res) => res.json({message: 'Books API - visit /books'}))

let books = [
    {id: 1, title: '1984'},
    {id: 2, title: 'Brave New World'}
];

app.get('/books', (req,res) => res.json(books));

app.get('/books/:id', (req,res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    book ? res.json(book) : res.status(404).send('Not found')
})

app.post('/books', (req,res)=> {
    const newBook = {id: Date.now(), title: req.body.title};
    books.push(newBook)
    res.json(newBook)
})

app.put('/books/:id', (req,res) => {
    const book = books.find(b => b.id == req.params.id)
    if (!book) return res.status(404).send('Not found')
    book.title = req.body.title
    res.json(book)
})

app.delete('/books/:id', (req,res)=> {
    books = books.filter(b => b.id !== parseInt(req.params.id))
    res.json({message: 'Deleted'})
})

app.listen(3000, ()=> console.log('Server running at 3000'))