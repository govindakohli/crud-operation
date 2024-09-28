const express = require("express")
const mongoose = require("mongoose")

const app = express()
const cors = require("cors")
const port = 4000

app.use(cors())
app.use(express.json())

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/batch10am').then(()=>console.log("MongoDB connected Succesfully "))
}


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model("User" ,userSchema )

app.get("/getUser/:id" , (req, res)=>{
    const id = req.params.id
    userModel.findById({_id:id})
    .then((value)=>{
    res.json(value)
    })
})

app.get("/" , (req,res)=>{
    userModel.find({})
      .then((data)=>res.json(data))
})
app.post("/create-newuser" , (req,res)=>{
    
    userModel.create(req.body)
    res.send("Hello from Create side ")

})

app.delete("/delete/:id" , (req , res )=>{
    const id = req.params.id
    userModel.findByIdAndDelete({_id:id})
    .then((value)=>{
        res.json(value)
    })
})

app.put("/Update_user/:id" , (req,res)=>{
    const id = req.params.id
    userModel.findByIdAndUpdate({_id:id}, {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    .then((value)=> res.json(value))
})



app.listen(port,()=>{console.log(`server started at ${port}`)})
