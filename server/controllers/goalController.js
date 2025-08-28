import asyncHandler from "express-async-handler";
import Goals from "../models/goalModel.js"
import User from "../models/userModel.js";


const getGoals = asyncHandler(async (req, res) => {

    const goals = await Goals.find({ user: req.user.id })

    res.status(200).json(goals)
})


const postGoal = asyncHandler(async (req, res) => {


    if (!req.body.text) {
        throw new error(" add some text")
    }
    const goal = await Goals.create({
        text: req.body.text,
        user: req.user.id
    })
    console.log("goal:", goal);


    res.status(200).json(goal);
})

const updateGoals = asyncHandler(async (req, res) => {

    const goal = await Goals.findById(req.params.id);
    console.log(goal);


    if (!goal) {
        throw new error("goal not find")
    }

    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401)
        throw new Error("user not found")
    }
    // login user u goaluser um onn aano nokan
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error("user not authorized")
    }

    const updatedGoal = await Goals.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true
        }
    )

    res.status(200).json(updatedGoal)
})

const deleteGoal = asyncHandler(async (req, res) => {

    const goal = await Goals.findById(req.params.id);
    if (!goal) {
        throw new Error("goal not found");
    }
    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401)
        throw new Error("user not found")
    }

    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error("user not match")
    }

    await Goals.findByIdAndDelete(req.params.id)  // await goal.remove( )

    res.status(200).json({ message: `delete  goal id: ${req.params.id}`, id: req.params.id })
})

export { getGoals, postGoal, updateGoals, deleteGoal };