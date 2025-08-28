 import jwt from "jsonwebtoken";
 import AsyncHandler from "express-async-handler";
 import User from "../models/userModel.js"

 const protect= AsyncHandler( async(req, res, next)=>{
    
    let token;
    console.log(req.headers.authorization, " xxxxxxxxxxxxxxxxxxx",  req.headers.authorization.startsWith("Bearer"));
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer") ){
        
        
        try {
            token= req.headers.authorization.split(" ")[1];
            const decode= jwt.verify(token, process.env.JWT_SECRET)
            console.log("decode: ",decode);
            
            
            console.log(await User.findById( decode.id));
            req.user= await User.findById( decode.id).select("-password")
            console.log(req.user);
            

            next();
        } catch (error) {
            console.log(error);
            throw new Error("not authorized") 
        }
    }
    if(!token){
        res.status(401)
        throw new Error(" not authorized and no token")
    }

 })

 export default protect;