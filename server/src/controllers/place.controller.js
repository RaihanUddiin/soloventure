import { Place } from "../lib/db/models/place.model.js";
import {ObjectId} from 'mongodb'

export const placeController={
    getAll: async (req, res) => {
        try {
            const query = {};
            const places = await Place.find(query).toArray();
            res.send(places);
        } catch (error) {
            console.log("error on get places" + error)
            throw error;
        }
    },

    create: async (req, res) => {
        try {
            const place = req.body;
            const result = await Place.create(place);
            res.send(result);
        } catch (error) {
            console.log("error on create place" + error)
            throw error;
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) };
            const result = await Place.deleteOne(filter);
            res.send(result);
        } catch (error) {
            console.log("error on delete place" + error)
            throw error;
        }
    }
}