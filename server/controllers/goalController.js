import asyncHandler from "express-async-handler";
import Goals from "../models/goalModel.js"


const getGoals = asyncHandler(async (req, res) => {

    const goals = await Goals.find()

    res.status(200).json(goals)
})


const postGoal = asyncHandler(async (req, res) => {


    if (!req.body.text) {
        throw new error(" add some text")
    }
    const goal = await Goals.create({
        text: req.body.text
    })

    res.status(200).json(goal);
})

const updateGoals = asyncHandler(async (req, res) => {

    const goal = await Goals.findById(req.params.id);

    if (!goal) {
        throw new error("goal not find")
    }
    const updatedGoal = await Goals.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true
        }
    )

    res.status(200).json(updatedGoal)
})

const deleteGoal = asyncHandler(async (req, res) => {

    const goal= await Goals.findById(req.params.id);
    if(!goal){
        throw new error("goal not found");
    }

    await Goals.findByIdAndDelete(req.params.id)  // await goal.remove( )

    res.status(200).json({ message: `delete  goal id: ${req.params.id}` , id: req.params.id })
})

export { getGoals, postGoal, updateGoals, deleteGoal };