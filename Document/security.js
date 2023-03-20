const express=require('express');
const app=express()
const port=4001
const session=require('express-session');
const Session=require('cookie-session');
const compression=require('compression');

app.use(compression());
app.set('trust proxy',1)  //trust first proxy
app.use(session({
    secret:'s3Cur3',
    name:'sessionId'
}));

app.get('/',(req,res)=>{
    console.log(session);
    res.send(' set cookie secuirty options ');
});

const expiryDate=new Date(Date.now() + 60*60*1000)
app.use(Session({
    name:'Session',
    keys:['key1','key2'],
    cookie:{
        secure:true,
        httpOnly:true,
        domain:'example.com',
        path:'Document/security',
        expires:expiryDate
    }
}))

app.listen(port,()=>{
    console.log(`app listening on http://localhost:${port}`);
})