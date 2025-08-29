import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import goalRoutes from "./routes/goalRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import errorHandler from "./middleware/errorMiddleware.js"
import cors from "cors";

connectDB();
const port = process.env.PORT || 5000;
const app = express();

const corsOptions = {
  origin: "http://localhost:3000", // React app
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
 
};
app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: false })); // middleware bodyparser to get data when we write req.body;

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`server running on ${port}`);

})