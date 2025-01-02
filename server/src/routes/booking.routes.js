import { Router } from "express";
import { bookingController } from "../controllers/booking.controller.js";
import { JWT } from "../middlewares/jwt.js";

const router = Router();

router.route("/bookings")
    .get(JWT.verify, bookingController.getAll)
    .post(JWT.verify, bookingController.create);

router.route("/bookings/:id")
    .get(bookingController.getById)

export default router;