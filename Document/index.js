const express=require('express');
const app=express();
const path=require('path');
const port=3001;

app.use(express.static(path.join(__dirname,'public')));

//get request
// app.get('/',(req,res)=>{
//     res.send('HELLO EVERYONE');
// });

//all() - used to load middleware functions at a path for all http request
app.all('/secret',(req,res,next)=>{
    res.send('hello');
    console.log('accessing the secret section..');
    next();
})


app.listen(port,()=>{
    console.log(`example app listening on port http://localhost:${port}`);
});
