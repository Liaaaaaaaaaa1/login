import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// Ruta POST para registrar usuario
// /api/auth/register
router.post("/register", registerUser);

// Ruta POST para login
// /api/auth/login
router.post("/login", loginUser);

export default router;

