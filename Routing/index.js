var express=require('express');
var app=express();

var things=require('./router.js')

app.use('/router',things);

app.listen(4200);