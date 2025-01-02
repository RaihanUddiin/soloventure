import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    place: {type : Schema.Types.ObjectId, ref: "Places", required: true},
    user: {type: Schema.Types.ObjectId, ref: "Users", required: true},
    slot: {type: String, required: true}
},{
    timestamps: true
})

export const Booking = mongoose.model("Bookings", schema);