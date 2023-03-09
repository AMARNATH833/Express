const express=require('express')
var app = express()

app.get('/world',(req,res)=>{
    res.send("hello js!")
})

app.listen(5000,()=>{console.log("http://localhost:5000")});