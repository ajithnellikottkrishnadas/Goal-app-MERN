import asyncHandler from "express-async-handler"


const getGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message:`Get goals`})
})


const postGoal=asyncHandler(async(req,res)=>{
      
        
        if(!req.body.text){
            throw new error(" add some text")
        }
        console.log(req.body.text);
      
        res.status(200).json({message:`post goal`})
})

const updateGoals=asyncHandler(async (req,res)=>{
    res.status(200).json({message:`updated ${req.params.id}`})
})

const deleteGoal= asyncHandler(async(req,res)=>{
    res.status(200).json({message:`delete  goal id: ${req.params.id}`})
})

export {getGoals,postGoal,updateGoals,deleteGoal};