const { Router } = require('express');
const express=require('express');
const router=express.Router();

//MIDDLEWARE THAT IS SPECIFIC TO THIS ROUTER
router.use((req,res,next)=>{
    console.log('TIME:',Date.now());
    next();
})
//define the home page route 
router.get('/',(req,res)=>{
    res.send('BIRDS HOME PAAGE THIS IS');
});
//DEFINE THE ABOUT ROUTE 
router.get('/about',(req,res)=>{
    res.send('ABOUT BIRDS..');
});
module.exports=router;