const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=process.env.port || 3002;

app.use(cookieParser());

//set cookie
app.get('/',(req,res)=>{
    res.cookie('username','nisha.afroz');
    res.cookie('password','Habi@5555');

    res.send('cookie has been sent successfully');
});
//retrieve cookie
app.get('/getcookie',(req,res)=>{
    const username=req.cookies.username;
    const password=req.cookies.password;
    res.send(`username is : ${username}`);
    res.send(`password is : ${password}`);
});

//delete a cookie
app.get('/delete',(req,res)=>{
    res.clearCookie('username');
    res.clearCookie('password');
    res.send(`cookie has been delted`);
}) 




app.listen(port,err=>{
    if(err){
        console.log(err);
    }
    console.log(`cookie is listening on http://localhost:${port}`);
});
