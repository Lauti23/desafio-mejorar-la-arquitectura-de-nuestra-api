import mongoose from "mongoose";

let Schema = mongoose.Schema

export class User {
    static get collection() {
        return "Users";
    }

    static get schema() {
        return {
            name: String,
            surname: String,
            email: String,
            phone: String,
            username: String,
            password: String
        }
    }
}