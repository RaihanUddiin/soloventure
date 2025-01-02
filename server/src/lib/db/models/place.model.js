import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {type: String, required: true},
    description: String,
    price: {type: Number, required: true},
    country: {type: String, required: true},
    continent: {type: String, required: true},
    image: {type: String, required: true}
},{
    timestamps: true
});

export const Place = mongoose.model("Places", schema);