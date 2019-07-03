const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const path=require('path');
const rauter=require('./routes/route');
const mongoose=require('./database/data');

app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'public')));

console.log(typeof(rauter));

app.get('/home',(rq,res)=>{
    res.sendFile(path.join(__dirname,'public','form.html'));
});
app.post('/add',(req,res)=>{
    var newdata=new mongoose(req.body);
    newdata.save().then(res=>{
        console.log('inserted');
        console.log(res);
    }).catch(err=>{
        console.error(error);
        console.log('nhi gaya');
    })
});
mongoose.find({
    name:'Nishant'
}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.error(err);
});

mongoose.deleteMany({
    name:'Nishant'
}).then(res=>{
    console.log('removed');
}).catch(err=>{
    console.error(err);
});

app.use('/handmade',rauter);





app.listen(3000,function(){
   console.log('server connected');
});