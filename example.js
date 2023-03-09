const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello Welcome to ExpressJS");
});

app.get('/amar',(req,res)=>{
    res.send("Hello New Page");
})

app.listen(3000,()=>{
    console.log("Listening to the port 3000 , http://localhost:3000");
});