import { Router } from "express";
import { paymentController } from "../controllers/payment.controller.js";

const router = Router();

router.route("payments")
    .post(paymentController.create);

router.route("payments/intent")
    .post(paymentController.createIntent);

export default router;