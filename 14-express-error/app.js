const express = require('express')
const app = express()

app.get('/', (req,res)=> res.send('Hello with Error Handling!'))

app.get('/error',(req,res,next)=>{
    next(new Error('Something went wrong!'))
})

app.use((err,req,res,next)=>{
    console.error(err.message);
    res.status(500).json({error:err.message})
})

app.listen(3000, ()=> console.log('Server running on 3000'))
