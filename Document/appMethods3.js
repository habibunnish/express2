const express=require('express');
const app=express();
const port=3005;
const blog=express();
const blogadmin=express();

//path properties using
app.use('/blog',blog);
blog.use('/admin',blogadmin);

console.log(app.path());
console.log(blog.path());
console.log(blogadmin.path());


// app.render(view,[locals],callback) propertiy
app.render('email',{name:'habi'},(err,html)=>{
    console.log('returns the rendered html of a view the call back function ');
});

//param method of app properties
app.param('id',(req,res,next,id)=>{
    console.log('called once only')
    next()

});
app.param(['id','page'],(req,res,next,value)=>{
    console.log('called once with ',value);
    next();
})
app.get('/person/:id/:page',(req,res,next)=>{
    console.log('although this person matches');
    next();
});
app.get('/person/:id/:page',(req,res)=>{
    console.log('this also matches to for person');
    res.end();
})
app.get('/user/:id',(req,res,next)=>{
    console.log('although this matches');
    next()
});
app.get('/user/:id',(req,res)=>{
    console.log('and this matches too');
    res.end();
});
app.listen(port,err=>{
    if(err){
        console.log(err);
    }else{
        console.log(`listening on http://localhost:${port}`);
    }
    
})