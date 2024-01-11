import mongoose from 'mongoose';
const p_schema=new mongoose.Schema({
name:{
    type:"string",
    required:true,
    unique:true,
    lowercase:true
},
phone_no:{
    type:bigint,
    required:true,
    unique:true,
},
email:{
    type:string,
    required:true,
    unique:true,
    
},


},{timestamps:true});
export const  plantation =mongoose.model("plantation",p_schema)