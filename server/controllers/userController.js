import AsyncHandler from "express-async-handler";
import User from "../models/userModel.js"
import bcrypt, { genSalt } from "bcryptjs"
import { Error } from "mongoose";
import jwt from "jsonwebtoken";

const registerUser = AsyncHandler(async (req, res) => {

    const { email, name, password } = req.body;

    if (!email || !password || !name) {
        res.status(400)
        throw new Error(" All fiels are required")
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(401)
        throw new Error(" user already exist")
    }

    const salt = await genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            email: user.email,
            name: user.name,
            token: generateToken(user._id)

        })
    } else {
        res.status(400);
        throw new Error("invalid user data")
    }

})

const loginUser = AsyncHandler(async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("email and password are required")
    }
    const user = await User.findOne({ email });

    if (!user) {
        res.status(400)
        throw new Error("user not exist");
    } else {
        await bcrypt.compare(password, user.password)

        res.json({
            message: "logined",
            _id: user._id,
            email: user.email,
            name: user.name,
            token: generateToken(user._id)
        });
    }


})

const getUser = AsyncHandler(async (req, res) => {
    if (!req.user) {
        res.status(401);
        throw new Error("Not authorized");
    }
    res.status(200).json({
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        
    });
})


// Generate token

const generateToken = (id) => {

    return jwt.sign({ id }, process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    )

}



export { registerUser, loginUser, getUser };