const express=require('express');
const app=express();
const port=2022;



// app.use((req,res,next)=>{
//     res.send('middleware example this is')
//     console.log('Time',Date.now());
//     next();
// });

//function is executed for an type of http request, loading a seriies of middleware
app.use('/user/:id',(req,res,next)=>{
    // console.log('REQUEST TYPE:',req.method);
    console.log('REQUEST URL:',req.originalUrl);
    next();
},(req,res,next)=>{
    res.send('USER');
    console.log('REQUEST TYPE:',req.method);
    next();
})

//middleware substack example handling get req to user/id path
app.get('/person/:id',(req,res,next)=>{
    //if id is 0 skip to next rout
    if(req.params.id==='0')next('route');
    //otherwise pass the control to the next middleware function in the stack
    else next()
},(req,res,next)=>{
    //send a reqular response
    res.send('regular');
})
//handler for the user id path which send a special res
app.get('/person/:id',(req,res,next)=>{
    res.send('special');
});

// //ARRAY OF REUSABLITIY
// function logOriginalUrl(req,res,next){
//     console.log('REQEUST URL :',req.originalUrl);

//     next();
// }
// function logMethod(req,res,next){
//     console.log('REQUEST TYPE :',req.method)
//     next();
// }
// const logStuff=[logMethod,logOriginalUrl]
// app.get('/log/:id',logStuff,(req,res,next)=>{
//     res.send('USER INFO');
// })

app.listen(port,()=>{
    console.log(`this app listen on http://localhost:${port}`);
})