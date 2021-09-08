const express=require("express");

const app = express();
app.get("/",function(req,res){
  res.send("<h1>Hello World</h1>");
});
app.get("/contact",function(req,res){
  res.send("vishal@gmail.com")
})
app.get("/about",function(req,res){
  res.send("I am vishal kumar who own this website")
})
app.listen(3000,function(){
  console.log("Server has started at port 3000");
});
