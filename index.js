import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
//const express = require('express'); // 1 - with latest npm we can use import statments
// go in package.json and add type: module 
// Step 2 ------------>>>>>>>> Routing
import Routes from './server/route.js';

const app = express(); // we need to do this with every express application to initilise it with app and then we run 
// it as a fuction

// To handle HTTP POST requests in Express.js version 4 and above, you need to install the middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Step 2 ------------------->
app.use('/tournaments', Routes);
//model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    age: String

})

const User = new mongoose.model("users",userSchema)

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
            res.send({message:"User Not Registered"})
        }
    })
})

app.post("/Register", (req,res) => {
    const {name,email,password,phone,age} = req.body
    User.findOne({email: email}, (err,user) => {
        if(user){
            res.send({message:"User Already Registered"})
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

const URL = 'mongodb://127.0.0.1:27017/Sportiza'

const PORT = process.env.PORT || '8080'; //2 - get the port from env file, if not available pick 8080


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => { 
    
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
    console.log("connection successfully")
}).catch((error) => {
    console.log('Error:', error.message)
})

