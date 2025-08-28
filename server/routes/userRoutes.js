import express from "express";
import {registerUser, loginUser, getUser} from "../controllers/userController.js"
import protect from "../middleware/authMiddleware.js";

const route= express.Router();

route.post("/", registerUser);
route.post("/login",loginUser);
route.get("/user",protect, getUser);


export default route;