
import { Router } from "express";
import { userLogin, userRegister } from "../controller/userController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";
import { createEventController, getEventController } from "../controller/eventController.js";

const router = Router();

// User authentication

router.post("/login", userLogin);
router.post("/register", userRegister);
// Protected endpoint
router.post("/create-event",authenticateUser, createEventController);
router.post("/get-event",authenticateUser, getEventController);

export default router;


