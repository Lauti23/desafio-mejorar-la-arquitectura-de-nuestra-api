import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

export const connectionToMongo = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("Database connected"))
        .catch(err => console.log("Database error", err));
}