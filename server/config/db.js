import mongoose from "mongoose";



const connectDB= async(req,res)=>{
    try {
        
        const conn= await mongoose.connect(process.env.MONGO_URL);

        console.log(`MongoDB connected= ${conn.connection.host}`);
        

    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}

export default connectDB;