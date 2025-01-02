import { ObjectId } from "mongodb";
import { User } from "../lib/db/models/user.model.js";
import { Place } from "../lib/db/models/place.model.js";
import { Booking } from "../lib/db/models/booking.model.js";
import { sendBookingEmail } from "../lib/nodemailer.js";

export const bookingController = {
    getAll: async (req, res) => {
        const email = req.query.email;
        const decodedEmail = req.decoded.email;

        if (email !== decodedEmail) {
            return res.status(403).send({ message: 'forbidden access' });
        }

        const query = { email: email };
        const bookings = await Booking.find(query).toArray();
        res.send(bookings);
    },

    getById: async (req, res) => {
        const id = req.params.id;
        const query = { _id: ObjectId(id) };
        const booking = await Booking.findOne(query);
        res.send(booking);
    },

    create: async (req, res) => {
    /**
     * expected data
     * {
     *  userId: 
     *  placeId:
     *  slot:
     * }
     */
        const data = req.body;
        if(!data.slot) throw new Error("Slot required to booking.")
        const user = await User.findById(ObjectId(data.userId));
        if(!user) throw new Error("User not found");

        const place = await Place.findById(ObjectId(data.placeId));
        if(!place) throw new Error("Place not found");

        const booking = await Booking.create({place, user, slot: data.slot})
        
        // send email about appointment confirmation 
        sendBookingEmail(user.email, data.slot)

        res.send(booking);
    }
}