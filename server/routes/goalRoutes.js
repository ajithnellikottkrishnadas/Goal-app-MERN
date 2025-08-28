import express from "express";
import {getGoals,postGoal,updateGoals,deleteGoal} from "../controllers/goalController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();
//
// router.get(`/`, getGoals);
// router.post(`/`, postGoal)
//
router.route("/").get(protect,getGoals).post(protect,postGoal);
//
// router.put(`/:id`, updateGoals)
// router.delete(`/:id`, deleteGoal)
//
router.route("/:id").put(protect,updateGoals).delete(protect,deleteGoal);


export default router;