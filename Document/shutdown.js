const express=require('express');
const http=require('http');
const app=express();
const port=3007;
const {createTerminus}=require('@godaddy/terminus');

app.get('/',(req,res)=>{
    res.send('iam here to teach u to graceful shutdown');

});

const server=http.createServer(app);

function onSignal(){
    console.log('server is starting cleanup')
};
async function onHealthCheck(){
    /* check if system is healthy like the db connection is alive
    resolves if health rejects if not*/

}
createTerminus(server,{
    signal:'SIGINT',
    healthChecks:{'/healthcheck':onHealthCheck},
    onSignal
})

// //graceful shutdown
// const server=app.listen(port);
// process.on('SIGTERM',()=>{
//     debug('sigterm signal recived : closing http server');
//     server.close(()=>{
//         debug('http server closed');
//     })
// });
app.listen(port,()=>{
    console.log(`listen on http://localhost:${port}`);
})