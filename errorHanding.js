//Example of Error Handing in Express JS.....

var express = require('express');
var app = express();

app.get('/', function(req, res){
   var err = new Error("Something went wrong");
   next(err);
});

//An error handling middleware
app.use(function(err, req, res, next) {
   res.status(500);
   res.send("Oops, something went wrong.")
});

app.listen(3000,()=>{console.log("http://localhost:3000")});