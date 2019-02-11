const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send('hello')
});

app.listen(3000,()=>{
    console.log('start service at port 3000')
});