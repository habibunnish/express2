const express=require('express');
const app=express();
const port=3006;

//res.headersent()
app.get('/',(req,res)=>{
    console.log(res.headersSent);  //false
    res.send('ok');
    console.log(res.headersSent);  //true
});

//res.locals() 
//res.append(field [value])
app.use((req,res,next)=>{
    //make user and authernticated available in templates
    res.locals.user=req.user;
    res.locals.authenticated = !req.user.anonymous;
    res.append('Link',['<http://localhost/>','<http://localhost:3006/>']);
    res.append('Set-Cookie','foo=bar; Path=/; HttpPnly');
    res.append('warning','199 Miscecllaneous warning');
    next();
});

//res.attachment([filename])
/*
content-disposition : attachment; filename='logo.png
content-type: image/png
 */
res.attachment('path/to/logo.png');
res.cookie('name','tobi',{domain:'.example.com',path:'/admin',secure:true})
res.cookie('rememberme','1',{expires:new Date(Date.now() + 9000000),httpOnly:true});

//default encoding 
res.cookie('some_cross_domain_cookie','http://mysubdomain.example.com',{domain:'example.com'});
res.cookie('rememberme','1',{maxAge:900000, httpOnly:true});
res.cookie('name','tobi',{signed:true});

//to clear cookie
res.clearCookie('name',{path:'/admin'});

//res.download()
res.download('/report-12345.pdf','report.pdf',(err)=>{
    if(err){
        //handle error, but keep in mind the resp maybe partially-sent
    }else{
        //document a downlad credit, etc.
    }
});

//res.end([data][encoding])
res.end()
res.status(404).end();

//res.format()
res.format({
    'text/plain'(){
        res.send('hey');
    },
    'text/html'(){
        res.send('<p>hey</p>');
    },
    'application/json'(){
        res.send({message:'hey'});
    },
    default(){
        res.status(406).send('not acceptable');
    }
});

//res.jsonp()
res.jsonp(null);
res.jsonp({user:'tobi'});
res.status(500).jsonp({error:'message'});

//res.links(links)
res.links({
    next:'http://api.example.com/user?page=2',
    last :'http://api.example.com/users?page=5'
});

res.location('/foo/bar');
res.location('http://example.com');
res.location('back');
res.redirect('/foo/bar');
res.redirect('../login');


//res.redirect([status,path])
res.redirect(301,'http://localhost:3001');
res.redirect('../pagename');

//res.render(view,[locals],[callback])
/**send the rendered view to the client */
res.render('index');

/**if a callback is specified the rendered html string has to be sent explicitly */
res.render('index',(err,html)=>{
    res.send(html);
});

/**if u want to passa local variable to the view */
res.render('user',{name:'tobi'},(err,html)=>{
    res.send(html);
});

//res.sendfile(path,[option],[fn])



app.listen(port,()=>{
    console.log(`listen http://localhost:${port}`);
});