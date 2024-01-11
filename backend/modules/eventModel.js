import mongoose,{Schema} from "mongoose";

 const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true
    },
   
    location: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

export const Event = mongoose.model("Event", eventSchema)