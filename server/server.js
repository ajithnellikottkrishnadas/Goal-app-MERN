import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import goalRoutes from "./routes/goalRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import errorHandler from "./middleware/errorMiddleware.js"
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";


connectDB();
const port = process.env.PORT || 5000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
 
};
app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: false })); // middleware bodyparser to get data when we write req.body;

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes)

if(process.env.NODE_ENV=== "production"){
    app.use(express.static(path.join(__dirname,"../client/build")))
    app.get(/.*/, (req,res)=> res.sendFile(path.resolve(__dirname,"../client", "build", "index.html")))
}else{
  app.get("/", (req,res)=> res.send("please set to production"))
}

app.use(errorHandler)

app.listen(port, () => {
    console.log(`server running on ${port}`);

})