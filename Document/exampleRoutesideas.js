const express=require('express');
const app=express();
const path=require('path');
const port=3002;
// const birds=require('./birds')
//ARRRAY OF CALLBACK FUNCTION CAN HANDLE A ROUTE
const cb0=function(req,res,next){
    console.log('cbo');
    next();
}
const cb1=function(req,res){
    res.send('HELLO FROM C!');
};
app.get('/example/c',[cb0,cb1]);

app.get('/example/d',[cb0,cb1],(req, res,next)=>{
    console.log('the response will be sent by the next function...')
    next();
},(req,res)=>{
    res.send('HELLO FROM D')
});

app.get('/',(req,res)=>{
    res.send('HELLO EVERYONE');
});

app.get('/ab?cd',(req,res)=>{
    res.send('abcd page this is');
});
app.get(/.*fly$/,(req,res)=>{
    res.send('butterfly, dragonfly but not butterflyman');
});
app.get('/users/:userId/books/:BookId',(req,res)=>{
    res.send('hhh',req.params);
});
app.all('/secret',(req,res,next)=>{
    res.send('hello');
    console.log('accessing the secret section..');
    next();
});

//route handlers
/* single callback function */
app.get('/example/a',(req,res)=>{
    res.send('HELLO FROM A!..');
});
/* Multiple callback  function */
app.get('/example/b',(req,res,next)=>{
    console.log('the res will be sent bbby next function....');
    next();
},(req,res)=>{
    res.send('HELLO FROM B!..');
});

//app.route
app.route('/book').get((req,res)=>{
    res.send('GET A RANDOM BOOK TO SEE...., ');
})
.post((req,res)=>{
    res.send('ADD A BOOK POST METHOD..., ');
})
.put((req,res)=>{
    res.send('UPDATE THE BOOK...., ');
});

app.use((req,res,next)=>{
    res.status(404).send('SORRY CANT FIND THAT');
});

//set up an error handler
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('something broke');
});

// app.use('/birds',birds);

app.listen(port,()=>{
    console.log(`example app listening on port http://localhost:${port}`);
});