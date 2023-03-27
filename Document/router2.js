const express=require('express');
const app=express();
const router=express.Router();
const port=3009;

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

// /**when user is present in route path you may map user loading logic
//  to automatically provide req.user to the route or perform validation on the parameter input */
// router.param('/user',(req,res,next,id)=>{
//     /**try to get user details  from the user model and attach it to the req obj */
//     user.find(id,(err,user)=>{
//         if(err){
//             next(err)
//         }else if(user){
//             req.user=user
//             next()
//         }else{
//             next(new Error('failed to load user'));
//         }
//     })

// });

router.param((param,option)=>{
    return(req,res,next,val)=>{
        if(val===option){
            next()
        }else{
            res.sendStatus(403)
        }
    }
});


router.param('id',1337)
router.get('/user/:id',(req,res)=>{
    res.send('ok');
})


router.param((param,validator)=>{
    return(req,res,next,val)=>{
        if(validator(val)){
            next()
        }else{
            res.sendStatus(403);
        }
    }
});
router.param('id',(candidate)=>{
    return !isNaN(parseFloat(candidate))&& isFinite(candidate);
});

app.use(router);



app.listen(port,()=>{
    console.log(`listen on http://localhost:${port}`);
})