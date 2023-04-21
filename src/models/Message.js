import mongoose from "mongoose";

let Schema = mongoose.Schema

export class Message {
    static get collection() {
        return "Messages"
    }
    static get schema() {
        return {
            user: String,
            message: String,
            date: String
        }
    }
}