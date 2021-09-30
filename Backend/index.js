import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/SportsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    age: String

})

const User = new mongoose.model("User",userSchema)

//Routes 
app.post("/Login1", (req,res) => {
    const {email,password} = req.body
    User.findOne({email: email}, (err,user) => {
        if(user){
            if(password === user.password){
                res.send({message: "Login Successfull", user: user})
            }
            else{
                res.send({message:"Password didn't match"})
            }
        }
        else{
            res.send({message:"user not registered"})
        }
    })
})

app.post("/Register", (req,res) => {
    const {name,email,password,phone,age} = req.body
    User.findOne({email: email}, (err,user) => {
        if(user){
            res.send({message:"user already registered"})
        }
        else{
            const user = new User({
                name,email,password,phone,age
            })
            user.save(err=>{
                if(err)
                {
                    res.send(err);
                }
                else
                {
                    res.send({message:"Successfully Registered, Please login now"});
                }
            })
        }
    })
    
})

app.listen(9002,() => {
    console.log("BE started at port 9002")
})