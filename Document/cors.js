const express=require('express');
const app=express();
const port=4000;
const cors=require('cors');
app.use(cors(
    {
        origin:'http://localhost:3002',
        allowedHeaders:['content-type','Authorization'],
        methods:['GET','POST','PUT','DELETE']
    }
  ));

app.get('/',(req,res)=>{
    res.status(200).json({title:'hello using cors iam doing'});

});
app.listen(port ,()=>{
    console.log(`listrning on http://localhost:${port}`)
});