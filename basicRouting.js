const express=require('express');
const app=express()

app.get('/',(req,res)=>{
    res.send('Get methods')
})

app.post('/',(req,res)=>{
    res.send('POST Request to the Home Page')
})

app.all('/secret',(req,res,next)=>{
    console.log("Accessing all the section of Routing")
    next()
})

app.listen(3444,()=>{console.log("http://localhost:3444")})