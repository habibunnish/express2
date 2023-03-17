const express=require('express');
const app=express();
const port=8001;
const path=require('path');

/*express specific stuff*/
app.use('/static',express.static('static'));



/* PUG SPECIFIC STUFF */
/*set template engine as pug*/
app.set('view engine','pug');
//set view directory
app.set('views',path.join(__dirname,'views'));



/*our pug demo endpoint*/
app.get('/demopug', (req, res) => {
  res.status(200).render('demo', { title: 'Hey all', message: 'Hello there using pug !' })
})
app.get('/',(req,res)=>{
  const cont='this is content for express';
  const params={'title ':'this is a express pug title','content':cont}
  res.status(200).render('index',params);
})


// app.get('/',(req,res)=>{
//   res.status(201).send('this is first express app ');
// });

// app.get('/admin',(req,res)=>{
//     res.status(404).send('unauthorized page accessing');
// })
// app.post('/about',(req,res)=>{
//     res.send('this is post express about page');
//   });
app.listen(port,()=>{
  console.log(`listen on http://localhost:${port}`);
})