import mongoose, {Schema } from "mongoose";

const schema = new Schema({
    name: {type: String, required: true},
    email: {type:String, required: true},
    role: {type: String, enum: ["user","admin"], default: "user"}
},
{
    timestamps: true
})

export const User = mongoose.model("Users", schema);