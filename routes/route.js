import express from "express";
import {
  LoginController,
  RegisterController,
} from "../controller/loginController.js";

const router = express.Router();

// GET request to get all users
router.get("/login", LoginController);
router.get("/register", RegisterController);

export default router;
