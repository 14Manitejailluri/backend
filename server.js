const express=rerquire("express");
const app=express();
app.listen(30000,function(reqr,res){
    console.log("server is running");
})
app.get("/",function(req,res){
    res.send("hello");
})