import mongoose from 'mongoose';
const san_schema=new mongoose.Schema({
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
    
}
},{Timestamp:true});

export const  sanitation =mongoose.model("sanitation",san_schema)