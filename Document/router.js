const express=require('express');
const app=express();
const port=3002;
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('hello world');
});
// router.all('*',requireAuthentication,loaduser);

router.get('/commit',(req,res)=>{
    const from=req.params[0];
    const to=req.params[1] || 'HEAD'
    res.send(`commit range ${from}..${to}`);
});

//router.method(path,[callback],callback)
function fn(req,res,next){
    console.log('i come here');
    next('router');
}
router.get('/foo',fn,(req,res,next)=>{
    console.log('i dont come here');
});
router.get('/foo',(req,res,next)=>{
    console.log('i dont come here');
});
app.get('/foo',(req,res)=>{
    console.log('i come here too');
    res.send('good');
})

app.listen(port,()=>{
    console.log(`listen on http://localhost:${port}`);
})

