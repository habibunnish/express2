const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=process.env.port || 3001;

app.use(cookieParser());
app.get('/',(req,res)=>{
    res.cookie('mycookie','hello-world',{
        domain:'example.com',
        path:'/myapp',
        maxAge:1000*60*60*24
    });
    res.send('cookie-set')
})

// app.use(cookieParser('mysecret'));

// //lifeetime seeting
// app.get('/',(req,res)=>{
//     res.cookie('myCookie','hello world',{signed:true});
//     res.send('cookie lifetime u can see now');
// });

// //retrive lifetime of cookie
// app.get('/getlifetime',(req,res)=>{
//     const myCookie=req.signedcookies.myCookie;
//     if(myCookie){
//         res.send(`value of my cookie is ${myCookie}`);
//     }else{
//         res.send(`my cookie is not found`);
//     }
// })


app.listen(port,err=>{
    if(err){
        console.log(err);
    }
    console.log(`cookie is listening on http://localhost:${port}`);
});