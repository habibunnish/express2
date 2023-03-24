const express=require('express');
const app=express(); //main
const port=3001;
const admin=express()  //subapp
// const https=require('https');



// admin.on('mount',(app)=>{
//     console.log('admin mounted');
//     console.log(app);   //refer to parent app
// });

admin.get('/',(req,res)=>{
    res.send('admin homepage');
});
app.get('/',(req,res)=>{
    res.send('admin');
})

app.use('/admin',admin);
app.all('/secret',(req,res,next)=>{
    console.log('accessing the secret section.....');
    next();
})
app.all('/api/*',(req,res)=>{
    res.send('requireAuthentication')
});
app.delete('/',(req,res)=>{
    res.send('delte req to admin homepage');
})
app.disable('trust proxy');
app.get('trust proxy');

app.enable('trust proxy');
app.get('trust proxy');

app.engine('pug',require('pug').__express);

//to map different extension to template engine.
app.engine('html',require('ejs').renderFile);

//consolidate.js library maps node template engines to follow this convention 
const engines=require('consolidate');
app.engine('haml',engines.haml);
app.engine('html',engines.hogan);

app.set('title','my site');
app.get('title');


//param
app.param('user',(req,res,next,id)=>{
    URLSearchParams.find(id,(err,user)=>{
        if(err){
            next(err)
        }else if(user){
            req.user=user
            next()
        }else{
            next(new Error('failed to load user'));
        }
    })
})

app.listen(port,()=>{
    console.log(`listen on http://localhost:${port}`);
});