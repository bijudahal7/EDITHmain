import mongoose from "mongoose";
import { DB_NAME } from "../constant.js"


const connectDB=async()=>{
   try{
     const connectionInstance=await mongoose.connect(`${process.env.mongodb_uri}/${DB_NAME}`);
     console.log(`Connected to MongoDB !! DB HOST:${connectionInstance.connection.host}`);
   }catch(error){
   console.log("Error connecting",error)
   process.exit(1)
}}

export default connectDB