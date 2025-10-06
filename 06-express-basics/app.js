const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => res.send('Welcome ro my Express server'));
app.get('/about', (req,res) => res.send('About Page'))
app.get('/users', (req, res) => res.json([{name: 'Peter'}, {name: 'James'}]))

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));