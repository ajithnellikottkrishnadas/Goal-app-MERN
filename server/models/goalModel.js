import mongoose from "mongoose";

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, "please add text value"]
    }
},
    {
        timestamps: true
    }
)

export default mongoose.model("Goal",goalSchema);