const express=require('express');
const bodyparser=require('body-parser');
const router=express.Router();
const path=require('path');
//const app=express();
router.get('/form',function(req,res){
    //res.sendFile(path.join('handmade','public','form.html'));
    
   
    
    res.sendFile((path.resolve('public/form.html')));
});

module.exports=router;