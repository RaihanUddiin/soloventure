import { ObjectId } from "mongodb";
import { User } from "../lib/db/models/user.model.js";

export const userController = {
    getAll: async (req, res) => {
        const query = {};
        const users = await User.find(query).toArray();
        res.send(users);
    },
    
    getIsAdmin: async (req, res) => {
        const email = req.params.email;
        const query = { email }
        const user = await User.findOne(query);
        res.send({ isAdmin: user?.role === 'admin' });
    },
    
    create: async (req, res) => {
        const user = req.body;
        console.log(user);
        // TODO: make sure you do not enter duplicate user email
        // only insert users if the user doesn't exist in the database
        const result = await User.create(user);
        res.send(result);
    },
    
    updateToAdmin: async (req, res) => {
        const id = req.params.id;
        const filter = { _id: ObjectId(id) }
        const options = { upsert: true };
        const updatedDoc = {
            $set: {
                role: 'admin'
            }
        }
        const result = await User.updateOne(filter, updatedDoc, options);
        res.send(result);
    }
}