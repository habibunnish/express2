const express=require('express');
const app=express(); //main
const http=require('http');
const https=require('https');
const { userInfo } = require('os');

//app.listen
http.createServer(app).listen(3020);
// https.createServer(Option,app).listen(3010);

app.listen=function(){
    const server=http.createServer(this);
    return server.listen.apply(server, arguments);
}
app.param('user',(req,res,next,id)=>{
    userInfo.find(id,(err,user)=>{
        if(err){
            next(err)
        }else if(user){
            req.user=user;
            next();
        }else{
            next(new Error('failed to load user'));
        }
    })
})