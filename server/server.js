import express from "express";
import dotenv from "dotenv";
dotenv.config();
import goalRoutes from "./routes/goalRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js"


const port= process.env.PORT|| 5000;
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:false})); // middleware bodyparser to get data when we write req.body;

app.use("/api/goals",goalRoutes);

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`server running on ${port}`);
    
})