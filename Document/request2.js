const express=require('express');
const app=express();
const port=3001;
 app.get('/',(req,res)=>{
    console.dir(req.xhr);
    console.dir(req.subdomains);
    // Accept: text/html
req.accepts('html')
// => "html"

// Accept: text/*, application/json
req.accepts('html')
// => "html"
req.accepts('text/html')
// => "text/html"
req.accepts(['json', 'text'])
// => "json"
req.accepts('application/json')
// => "application/json"

// Accept: text/*, application/json
req.accepts('image/png')
req.accepts('png')
// => false

// Accept: text/*;q=.5, application/json
req.accepts(['html', 'json'])
// => "json"
    res.send('request methods')
 });

 //req.range() parse header from request

//  const range=req.range(1000);
//  if(range.type ==='bytes'){
//     range.forEach((r)=>{
//         //do something with r.start and r.end
//     });
//  };

 app.listen(port,()=>{
    console.log(`listen on http://localhost:${port}`);
 });
