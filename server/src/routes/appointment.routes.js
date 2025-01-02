import { Router } from "express";
import { appointmentController } from "../controllers/appointment.controller.js";

const router = Router();

router.route("/appointments")
    .get(appointmentController.getAll)

export default router;