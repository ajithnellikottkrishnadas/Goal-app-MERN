import mongoose from "mongoose";

const userChema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add a name"]

    },
    email: {
        type: String,
        required: [true, "please add a email"],
        unique: true

    },
    password: {
        type: String,
        required: [true, "please add a password"]

    },
}, {
    timestamp: true,
})

export default mongoose.model("User", userChema);