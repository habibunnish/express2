const express=require('express');
const app=express();
const port=3001;

app.get('/file/:name',(req,res,next)=>{
    const option={
        root:path.join(__dirname,'public'),
        dotfiles:'deny',
        headers:{
            'x-timestamp':Date.now(),
            'x-sent':true
        }
    }
    const filename=req.params.name
    res.sendFile(filename,option,(err)=>{
        if(err){
            next(err)
        }else{
            console.log('sent',filename)
        }
    })
});

//tp provide fine-grained support for serving files
app.get('/user/:uid/photos:file',(req,res)=>{
    const uid=req.params.uid
    const file=req.params.file

    req.user.mayViewFilesFrom(uid,(yes)=>{
        if(yes){
            res.sendFile(`/uploads/${uid}/${file}`);
        }else{
            req.statusCode(403).send('soory u cant see that');
        }
    })
})


app.listen(port,()=>{
    console.log(`app listen on http://localhost:${port}`);
})