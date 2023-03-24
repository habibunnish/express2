const cons = require('consolidate');
const express=require('express');
const app=express();
const port=3002;
const router=express.Router();

app.route('/events').all((req,res,next)=>{
    console.log('runs for all http verbs first think of it as route specific middleware')
    next();
})
.get((req,res,next)=>{
    res.json({});
})
.post(((req,res,next)=>{
    
    console.log('maybe add a new event')
    res.end();
}));

//set() property 
app.set('title','MY WORK');
app.get('title');

app.set('trust proxy',(ip)=>{
    if(ip ==='127.o.0.1' || ip ==='123.123.123.123') {
    return true
    }
    else {
    return false
    }
});

//to see time exmple
app.use((req,res,next)=>{
    console.log('time:%d',Date.now());
    next();
});

//this middleware will not allow the req to go beyond it
app.use((req,res,next)=>{
    res.send('HELLO WORLD');
});
//req will never reach this route
app.get('/',(req,res)=>{
    res.send('welcome');
})

//single middleware example
app.use((req,res,next)=>{
    console.log('to define and mount a middleware function locally')
    next();
});

router.get('/router',(req,res,next)=>{
    console.log('a router is valid middleware')
    next();
});
app.use(router);

app.listen(port,()=>{
    console.log(`port listenon http://localhost:${port}`);
});