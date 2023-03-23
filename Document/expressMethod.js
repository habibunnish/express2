const express=require('express');
const app=express();
const port=3010;
const option=[
    {
        inflate:true,
        limit:'1mb'
    }
]
//strict property
app.use(express.json({strict:true}));

//reviver property 
app.use(express.json((key,value)=>{
    if(key ==='date'&& typeof value ==='string'){
        return new Date(value);
    }
    return value;
}));


//mmiddleware to parse json data
app.use(express.json(option));
app.post('/user',(req,res)=>{
    const {name,email}=req.body;
    if(!name || !email){
        res.status(400).send('name and email are req');
        return;
    }
    //log the new user object

        const newUser={name,email};
        res.send(`new user is created : ${JSON.stringify(newUser)}`);
        res.status(201).send('user created successfully');

    //error handling middleware
        app.use((err,req,res,next)=>{
            console.error(err.stack);
            res.status(500).send('something went wrong')
        })
  
});

app.post('/data',(req,res)=>{
    const {data}=req.body;
    if(data && data.date){
        console.log(`recived data with date :${data.date}`);
    }else{
        console.log('recived data without a date');
    }
   
    res.send('data recived successfully');
})
const server=app.listen(port,()=>{
    console.log(` server started on port http://localhost:${server.address().port}`);
});

