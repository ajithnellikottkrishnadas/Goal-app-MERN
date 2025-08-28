import mongoose from "mongoose";
import User from "../models/userModel.js"

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, "please add text value"]
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        requird: true,
        ref: User
    }
},
    {
        timestamps: true
    }
)

export default mongoose.model("Goal",goalSchema);