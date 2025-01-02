import { Router } from "express";
import { userController } from "../controllers/user.controllers.js";
import { JWT } from "../middlewares/jwt.js";

const router = Router();

router.route("/users")
    .get(JWT.verify, JWT.verifyAdmin, userController.getAll)
    .post(userController.create)

router.route('/users/admin/:email')
    .get(userController.getIsAdmin)

router.route(JWT.verify, JWT.verifyAdmin, '/users/admin/:id')
    .patch(userController.updateToAdmin)

export default router;