const express=require('express')
var app=express();

app.get('/',(req,res)=>{
    res.sent("hello js!")
});

app.listen(2000)