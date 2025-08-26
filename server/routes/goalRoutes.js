import express from "express";
import {getGoals,postGoal,updateGoals,deleteGoal} from "../controllers/goalController.js";

const router = express.Router();

// router.get(`/`, getGoals);
// router.post(`/`, postGoal)

router.route("/").get(getGoals).post(postGoal);

// router.put(`/:id`, updateGoals)
// router.delete(`/:id`, deleteGoal)

router.route("/:id").put(updateGoals).delete(deleteGoal);


export default router;