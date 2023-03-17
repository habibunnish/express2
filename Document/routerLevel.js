const cookieParser = require('cookie-parser');
const express=require('express');
const app=express();
const port=2024;
const router=express.Router();
const cookieParser=require('cookie-parser');

//a middleware function with no mounth path  this code is executed for every req to the router
router.use((req,res,next)=>{
    console.log('request type :',req.originalUrl);
    next();
},(req,res,next)=>{
    console.log('req-type :',req.method);
    next();
})

router.get('/user/:id', (req, res, next) => {
    // if the user ID is 0, skip to the next router
    if (req.params.id === '0') next('route')
    // otherwise pass control to the next middleware function in this stack
    else next()
  }, (req, res, next) => {
    // render a regular page
    res.render('regular')
  })
  
  // handler for the /user/:id path, which renders a special page
  router.get('/user/:id', (req, res, next) => {
    console.log(req.params.id)
    res.render('special')
  })
  
  // mount the router on the app
  app.use('/', router)


router.use((req,res,next)=>{
    if(!req.headers['x-auth'])return next('router')
    next();
})
router.get('/people/:id',(req,res)=>{
    res.send('HELLO,PERSON');
})
app.use('/admin',router,(req,res)=>{
    res.sendStatus(401);
});

//cookie parsing middleware
app.use(cookieParser());

app.listen(port,()=>{
    console.log(`its listen on http://localhost:${port}`);
});