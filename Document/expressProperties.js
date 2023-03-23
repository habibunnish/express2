const express=require('express');
const app=express();  //main app
const admin=express();  //sub app
const secret=express(); //sub-sub app
const router=express.Router();
const port=3008;
app.locals.title='My-App';
app.locals.strftime=require('strftime');
app.locals.email='my@app.com';

app.get('/',(req,res)=>{
    console.dir(app.locals.title);
    console.dir(app.locals.email);
    res.send('propeties');
});
admin.get('/',(req,res)=>{
    console.log(admin.mountpath)  //admin
    res.send('admin Homepage');

});
secret.get('/',(req,res)=>{
    console.log(secret.mountpath);
    res.send('admin secret page');
})

router.get('/router',(req,res)=>{
    res.send('router example');
})
app.use(['/adm*n','/manager'],admin);
app.use('/secr*t',secret);


app.listen(port,()=>{
    console.log(`listen on http://localhost:${port}`);
})