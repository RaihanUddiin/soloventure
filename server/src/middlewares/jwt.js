import jwt from 'jsonwebtoken'

import env from 'dotenv'
import { User } from '../lib/db/models/user.model.js';
env.config();

export const JWT = {
    verify: (req, res, next) => {

        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send('unauthorized access');
        }
    
        const token = authHeader.split(' ')[1];
    
        jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
            if (err) {
                return res.status(403).send({ message: 'forbidden access' })
            }
            req.decoded = decoded;
            next();
        })
    
    },
    verifyAdmin: async (req, res, next) => {
                const decodedEmail = req.decoded.email;
                const query = { email: decodedEmail };
                const user = await User.findOne(query);
    
                if (user?.role !== 'admin') {
                    return res.status(403).send({ message: 'forbidden access' })
                }
                next();
            },

    sign : (email) => {
        return jwt.sign({ email }, process.env.ACCESS_TOKEN, { expiresIn: '1h' })
    }
}