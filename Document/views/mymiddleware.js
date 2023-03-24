
module.exports=(req,res)=>{
    res.send(`this views directory is in  ${req.app.get('views')}`);
};