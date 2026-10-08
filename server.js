const express=require("express");
const app=express();
app.listen(30000,function(req,res){
    console.log("server is running");
})
app.get("/",function(req,res){
    res.send("hello");
})