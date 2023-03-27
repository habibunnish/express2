const express=require('express');
const multer = require('multer');
const app=express();
const path=require('path')
const port=3010;

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('multer');
});
app.listen(port,()=>{
    console.log(`listen on http://localhost:${port}`);
})