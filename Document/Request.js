const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    const data=[
        {
            id:1,name:'john',
            id:2,name:'abi',
        }
    ];
    res.json(data);
});
app.post('/',(req,res)=>{
    res.send('this is post method');
});

app.put('/',(req,res)=>{
    res.send('this is put method');
});
app.delete('/',(req,res)=>{
    res.send('delete method this is')
});

app.listen(port,() =>{
    console.log(`port listening on http://localhost:${port}`);
})