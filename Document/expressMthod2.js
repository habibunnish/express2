const express=require('express');
const app=express();
const port=3004;
app.use(express.json({
    verify:(req,res,buf)=>{
        const contentType=req.headers['content-type'];
        if(contentType && contentType.startsWith('application/json')){
            try{
                const json=JSON.parse(buf);
                if(json && typeof json ==='object'){
                    return true;
                }

            }catch(err){
                console.error(err);
            }
        }
        res.statusCode(400).send('invalid json data');
        return false;
    }
}));
app.post('/data',(req,res)=>{
    console.log(`recieved data ${data}`);
    res.send('data recieved successfully');
});
app.listen(port,()=>{
    console.log(`port listen on http://localhost:${port}`);
})