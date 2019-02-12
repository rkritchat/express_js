const express = require('express')
const app = express()
var UserService = require('../service/UserService')

app.get("/",(req,res)=>{
    UserService.getUserDetail(1, (result)=>{
        console.log("This is controller " + result)
        res.send(result)
    })
});

app.listen(3000,()=>{
    console.log('start service at port 3000')
});