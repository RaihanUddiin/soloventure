import { Router } from "express";
import { placeController } from "../controllers/place.controller.js";
import { JWT } from "../middlewares/jwt.js";

const router = Router();

router.route("/places")
    .get(JWT.verify, JWT.verifyAdmin, placeController.getAll)
    .post(JWT.verify, JWT.verifyAdmin, placeController.create)
    .delete(JWT.verify, JWT.verifyAdmin, placeController.delete)

export default router;