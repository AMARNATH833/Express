const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("Hello Amarnath!")
})

app.listen(3333,()=>console.log("http://localhost:3333"))