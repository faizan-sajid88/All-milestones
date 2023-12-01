const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended:false}))


 

mongoose.connect("mongodb+srv://faizansajid:faizan88@cluster0.hfmew2r.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongo db connceted ")
     app.listen(3000,()=>{
     console.log("server start")
})
})
.catch((error) => console.log("error",error))





 app.get("/",(req,res)=>{
     res.send("Hello World")
 })
 app.get("/name",(req,res)=>{
     res.send("faizan")
 })
 console.log(port)