const express=require('express');
const app=express();
const port=3001;
const options={
    dotfile:'ignore',
    etag:false,
    extensions:['html','html'],
    index:false,
    maxAge:'id',
    redirect:false,
    setHeaders (res,path,stat){
        res.stat('x-timestamp',Date.now());
    }
}
app.use(express.static('public',options));
app.get('/',(req,res)=>{
    console.log('this is static method properties');
    res.send('this is static options')
})
app.listen(port,()=>{
    console.log(`port listen on http://localhost:${port}`)
});