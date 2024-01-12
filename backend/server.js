import dotenv from "dotenv"
import connectDB from "./db/mongo.js";
import {app} from './app.js'
import { User } from './modules/user_modules.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({
    path: './env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 5001 , () => {
        console.log(`server runnning at:localhost:${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


//register user
app.post("localhost:5001/api/register",async(req,res)=>{
    try{
        const password=req.body.password;
        const c_password=req.body.c_password;
        if(password==c_password){
           const Register=new userRegister ({
            f_name:req.body.f_name,
            l_name:req.body.l_name,
            phone:req.body.phone,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password
           })
           const logged=await Register.save();
           res.status(201).render(index.html);
        }
        else{
            res.send("password is incorrect");
        }
     }catch(err){
    res.status(400)
    }
});

//login
app.post("localhost:5001/api/login",async(req,res)=>{
    try{
        const password=req.body.password;
        const c_password=req.body.c_password;
        if(password==c_password){
           const Login=new User({
           username:req.body.username,
            email:req.body.email,
            password:req.body.password
           })
           const logged=await Login.save();
           res.status(201).render(home.html);
        }
        else{
            res.send("password is incorrect");
        }
     }catch(err){
    res.status(400)
    }
});
app.use(express.static(path.join(__dirname, '../frontend')));
//redirect
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/login from/html/index.html'));
  });
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../frontend/login from/html/register'));
})
