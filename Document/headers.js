const express=require('express');
const app=express();
const port=3009;

app.get('/',(req,res)=>{
    const data='Hello world'
    res.set({
        'content-type':'application/json',
        'X-My-Header':'My-Value'
    });
    // res.send('Hello world');
    res.send(JSON.stringify(data));
});

app.listen(port,err=>{
    if(err){
        return console.log(err);
    }
    console.log(`app listening on http://localhost:${port}`);
});