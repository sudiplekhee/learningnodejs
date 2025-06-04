const express=require("express")
const app=express()
require("./database/config")

app.set("view engine", "ejs")

//get todo - page
app.get("/",function(req,res){
    res.render("todo/get")
})

//add todo - page
app.get("/add", (req, res)=>{
    res.render("todo/add")
})

//update todo - page
app.get("/update", (req, res)=>{
    res.render("todo/update")
})

//login - page
app.get("/login", (req, res)=>{
    res.render("authentication/login")
})

//register - page
app.get("/register", (req, res)=>{
    res.render("authentication/register")
})

app.listen(4000,function(){
    console.log("The server is running on http://localhost:4000")
})