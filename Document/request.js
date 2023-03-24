const express=require('express');
const app=express();
const port=3002;
const bodyParser=require('body-parser');
const multer=require('multer');
const upload=multer();  //for parsing multipart /form-data
const qs=require('qs');

app.get('/user/:id',(Req,res)=>{
    res.send(`user ${req.params.id}`);
});

// index.js
app.get('/views',require('./views/mymiddleware'));

//req.baseurl
const greet=express.Router();
greet.get('/',(req,res)=>{
    console.log(req.baseUrl)  //greet
    res.send(' BASE URL PERFORMING');
})
app.use(['/gre*t','/hel{2}o'],greet)   //loading router on '/greet'

app.listen(port,()=>{
    console.log(`lisetning on http://localhost:${port}`);
});

//req.body property
app.use(bodyParser.json())  //for parsing application/json
app.use(bodyParser.urlencoded({extended:true}))   //for parsing application/x-www-form-urlencodedd

app.post('/profile',upload.array(),(req,res,next)=>{
    console.log(req.body);
    res.json(req.body);
});

app.get('/request',(req,res)=>{
host:'example.com:300'
//cookie() property
console.dir(req.cookies.name);

//req.fresh
console.dir(req.fresh);

})

/* Contains the host derived from the Host HTTP header
req.host()   Host:'example.com:3000' */
console.log(req.host);

// Host:'[::1]:3000'
console.dir(req.host);

/* req.originalUrl 
GET /search?q=something */
console.dir(req.originalUrl);

 app.use('/admin',(req,res,next)=>{
    console.dir(req.originalUrl);
    console.dir(req.baseUrl);
    console.dir(req.path);
    console.dir(req.ip);   // 127.0.0.1 */
    console.dir(req.hostname); //Contains the hostname derived from the Host HTTP header, Host:'example.com:3000'
    next();
 });

 //req.path()
 console.dir(req.path);

 //req.protocol() it returns either http or https
 console.dir(req.protocol);

 //req.query()
 app.setting('query parser',(str)=> qs.parse(str, { /* */}));

 //req.route
 app.get('/user/:id?',(req,res)=>{
    console.log(req.route)
    res.send('GET');
 });

 //REQ.SECURE()
 req.protocol === 'https';

 //req.signedCookies
console.dir(req.signedCookies.user);

//req.stale
console.dir(req.stale);

//req.subdomain()
console.dir(req.subdomains);

//req.xhr
console.dir(req.xhr);





