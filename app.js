const express=require('express');
const app=express();
app.listen(3000,function(){
    console.log('live on 3000');
})
app.use(express.static("public"));
app.get('/',function(req,res){
    res.sendFile(__dirname +'/index.html');
})