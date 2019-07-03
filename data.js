const mongoose=require('mongoose');
mongoose.Promise=global.Promise;


mongoose.connect('mongodb://localhost:27017/formdata',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('good one');
    }
    else{
        console.error(error);
    }
});

const schema=mongoose.Schema;

var userdatas=new schema({
  name:String,
  email:String,
  password:String,
  city:String
});
module.exports=mongoose.model("data",userdatas);
