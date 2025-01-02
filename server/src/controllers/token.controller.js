import { User } from "../lib/db/models/user.model.js";
import { JWT } from "../middlewares/jwt.js";

export const tokenController = {
    get: async (req, res) => {
        const email = req.query.email;
        const query = { email: email };
        const user = await User.findOne(query);
        if (user) {
            const token = JWT.sign(email);
            return res.send({ accessToken: token });
        }
        res.status(403).send({ accessToken: '' })
    }
}