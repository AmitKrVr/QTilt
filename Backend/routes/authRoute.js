import express from "express";
import {
  register,
  login,
  getMe,
  userStatus,
  logout,
} from "../controllers/authController.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.get("/status", userStatus);
router.post("/logout", logout);

export default router;
