var express=require('express');
var router=express.Router();

router.get('/',function(req,res){
    res.sent('GET route on things');
});

router.post('/',function(req,res){
    res.sent('POST route on things');
});

module.exports=router;