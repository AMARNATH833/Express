var express=require('express')
var app=express();

app.get('/amar',(req,res)=>{
    res.send("Hello Amar");
});

app.get('/splash',(req, res)=>{
    res.send("You just called the post method at '/hello'!\n");
 });

app.listen(3000);