const express=require('express');
const app=express();
const port=4001;
const fs=require('fs');

app.get('/',(req,res)=>{
    throw new Error('BROKEN');  //EXPRESS WILL CATCH THIS ON ITS OWN
});


app.get('/',(req,res,next)=>{
    fs.readFile('/file-does-not-exist',(err,data)=>{
        if(err){
            next(err);
        }else{
            res.send(data);
        }
    });
});

app.get('/user/:id',async(req,res,next)=>{
    const user=await getUserById(req.params.id)
    res.send(user);
});

app.get('/',[
    function (req,res,next){
    fs.writeFile('/inacessible-path','data',next);
},
function(req,res){
    res.send('OK');
}]);

app.get('/',(req,res,next)=>{
    setTimeout(()=>{
        try{
            throw new Error('Broken');
        }catch(err){
            next(err);
        }
    },100)
});

app.get('/',(req,res,next)=>{
    promise.resolve().then(()=>{
        throw new Error('BROKEN');
    }).catch(next)
});

app.get('/error',[
    function(req,res,next){
        fs.readFile('/maybe-valid-file','utf-8',(err,data)=>{
            res.locals.data=data
            next(err)
        });
    },
    function(req,res){
        res.locals.data=res.locals.data.split(',')[1]
        res.send(res.locals.data)
    }
]);

//


app.get('/',(req,res,next)=>{
    fs.readFile('/file',(err,data)=>{
        if(err){
            next(err)
        }else{
            res.send(data);
        }
    })
})

app.listen(port,()=>{
    console.log(`error handling file listening on http://localhost:${port}`);

});
