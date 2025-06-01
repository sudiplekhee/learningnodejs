const express=require("express")
const app=express()
require("./database/config")

app.set("view engine", "ejs")

app.get("/",function(req,res){
    res.render("home")
})
app.get("/about", (req, res)=>{
    res.render("about")
})

app.listen(4000,function(){
    console.log("The server is running on http://localhost:4000")
})