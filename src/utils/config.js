import dotenv from "dotenv";
dotenv.config();

export default {
    app: {
        persistance: process.env.PERSISTANCE
    },

    mongo: {
        url: process.env.MONGO_URL
    }
}