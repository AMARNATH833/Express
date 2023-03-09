var express=require('express')
var app=express()

const Logger=function(req,res,next){
    console.log('LOGGED IN SUCCESSFULLY')
    next() //If next() is given then the page will remains in the same page!.
}
app.use(Logger);

const requestTime=function(req,res,next){
    req.requestTime=Date.now()
    console.log(req.requestTime)
    next()
}
app.use(requestTime);

app.get('/',(req,res)=>{
    // res.send("Helllo MiddleWare !");
    let responseText='Hello MiddleWare<br>'
    responseText+=`<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
})

app.listen(3232,()=>{console.log("http://localhost:3232")})