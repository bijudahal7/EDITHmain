
import mongoose from "mongoose";
const userschema = new mongoose.Schema({
f_name:{
     type:String,
     required:true,
   
     lowercase:true
},
l_name:{
     type:String,
     required:true,
    
     lowercase:true
},
email:{
     type:String,
     required:true,
     unique:true,
     lowercase:true
},
password:{
    type:String,
    required:true,
},
phone:{
     type:BigInt,
     required:true,
}
},{timestamps:true});
export const User=mongoose.model("User",userschema);