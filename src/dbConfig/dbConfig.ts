import { log } from "console";
import mongoose from "mongoose";

export async function connect() => {
    try {
        mongoose.connect(process.env.MONGODB_URL!);
        const connection = mongoose.connection;

        connection.on("connected", () => { 
            console.log("MongoDB connected successfully");
        })

        connection.on("error", (error) => {
            console.log("MongoDB connection error:", error);
            process.exit();    
        })
    } catch (error) {
        console.log("Something went wrong:",error);
    }
}