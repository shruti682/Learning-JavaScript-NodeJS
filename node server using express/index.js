const express=require('express');

const app=express();

// app.METHOD(PATH,HANDLER);
app.get('/',(req,res)=>{
    res.send("HomePage");
});

app.get('/about',(req,res)=>{
    res.send(`AboutPage\n Name: ${req.query.myname}`);
});

app.listen(8000,()=>console.log("Server started"));